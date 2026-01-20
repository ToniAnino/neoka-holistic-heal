import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";
import { Resend } from "https://esm.sh/resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ContactRequest {
  name: string;
  email: string;
  phone?: string;
  message: string;
  recaptchaToken: string;
}

const RECAPTCHA_SECRET_KEY = Deno.env.get("RECAPTCHA_SECRET_KEY") ?? "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") ?? "";
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") ?? "";
const SUPABASE_SERVICE_ROLE_KEY = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? "";

async function verifyRecaptcha(token: string): Promise<boolean> {
  try {
    const response = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: `secret=${RECAPTCHA_SECRET_KEY}&response=${token}`,
    });

    const data = await response.json();
    // reCAPTCHA v3 returns a score between 0 and 1
    // 0.5 is the recommended threshold
    return data.success && data.score >= 0.5;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, message, recaptchaToken }: ContactRequest = await req.json();

    // Validate required fields
    if (!name || !email || !message || !recaptchaToken) {
      return new Response(
        JSON.stringify({ error: "Faltan campos obligatorios" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Verify reCAPTCHA token
    const isHuman = await verifyRecaptcha(recaptchaToken);
    if (!isHuman) {
      return new Response(
        JSON.stringify({ error: "Verificación anti-spam fallida" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json", ...corsHeaders },
        }
      );
    }

    // Initialize Supabase client
    const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

    // Save to database
    const { error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name,
        email,
        phone: phone || null,
        message,
      });

    if (dbError) {
      console.error("Database error:", dbError);
      throw new Error("Error al guardar en la base de datos");
    }

    // Send email notification using Resend
    if (RESEND_API_KEY) {
      const resend = new Resend(RESEND_API_KEY);

      const currentDate = new Date().toLocaleString("es-ES", {
        dateStyle: "full",
        timeStyle: "short",
        timeZone: "Europe/Madrid",
      });

      // Send notification to Neoka
      await resend.emails.send({
        from: "Neoka Web <onboarding@resend.dev>",
        to: ["webneoka@gmail.com"],
        subject: `Nuevo mensaje de contacto de ${name}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c9a8a;">Nuevo mensaje de contacto</h2>
            <p style="color: #666;">Recibido el ${currentDate}</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Nombre:</strong> ${name}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
            ${phone ? `<p><strong>Teléfono:</strong> <a href="tel:${phone}">${phone}</a></p>` : ""}
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Mensaje:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #999; font-size: 12px;">Este mensaje fue enviado desde el formulario de contacto de la web de Neoka.</p>
          </div>
        `,
      });

      // Send confirmation to user
      await resend.emails.send({
        from: "Neoka <onboarding@resend.dev>",
        to: [email],
        subject: "Hemos recibido tu mensaje - Neoka",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #2c9a8a;">¡Gracias por contactarnos, ${name}!</h2>
            <p>Hemos recibido tu mensaje y te responderemos lo antes posible.</p>
            <p>Si tu consulta es urgente, puedes llamarnos al <a href="tel:+34617642564">617 64 25 64</a>.</p>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p><strong>Tu mensaje:</strong></p>
            <div style="background-color: #f9f9f9; padding: 15px; border-radius: 8px; white-space: pre-wrap;">${message}</div>
            <hr style="border: none; border-top: 1px solid #eee; margin: 20px 0;">
            <p style="color: #666;">Un saludo,<br>El equipo de Neoka</p>
            <p style="color: #999; font-size: 12px;">Neoka - Centro de Salud Integral | Huelva</p>
          </div>
        `,
      });
    }

    return new Response(
      JSON.stringify({ success: true }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Error interno del servidor" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
