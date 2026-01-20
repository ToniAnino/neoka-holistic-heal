import { useState, useEffect, useCallback } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre no puede exceder 100 caracteres"),
  email: z.string().trim().email("Por favor, introduce un email válido").max(255, "El email no puede exceder 255 caracteres"),
  phone: z.string().trim().optional().refine(
    (val) => !val || /^[+]?[\d\s()-]{6,20}$/.test(val),
    "Por favor, introduce un teléfono válido"
  ),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

declare global {
  interface Window {
    grecaptcha: {
      ready: (callback: () => void) => void;
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
    };
  }
}

const RECAPTCHA_SITE_KEY = "6LcpFEYrAAAAADjJNVcxHBKJt_f6f__cqtPsf4wh";

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);
  const { toast } = useToast();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  useEffect(() => {
    // Load reCAPTCHA script
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      window.grecaptcha.ready(() => {
        setRecaptchaLoaded(true);
      });
    };
    document.head.appendChild(script);

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector(`script[src*="recaptcha"]`);
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  const getRecaptchaToken = useCallback(async (): Promise<string | null> => {
    if (!recaptchaLoaded || !window.grecaptcha) {
      return null;
    }
    try {
      const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action: "contact_submit" });
      return token;
    } catch (error) {
      console.error("reCAPTCHA error:", error);
      return null;
    }
  }, [recaptchaLoaded]);

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    try {
      // Get reCAPTCHA token
      const recaptchaToken = await getRecaptchaToken();
      if (!recaptchaToken) {
        toast({
          title: "Error de verificación",
          description: "No se pudo verificar que no eres un robot. Intenta de nuevo.",
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }

      // Call edge function to handle submission
      const { data: response, error } = await supabase.functions.invoke("send-contact-email", {
        body: {
          ...data,
          recaptchaToken,
        },
      });

      if (error) {
        throw error;
      }

      if (response?.error) {
        throw new Error(response.error);
      }

      setIsSubmitted(true);
      reset();
      toast({
        title: "¡Mensaje enviado!",
        description: "Hemos recibido tu mensaje. Te responderemos lo antes posible.",
      });

      // Reset success state after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error: any) {
      console.error("Error submitting form:", error);
      toast({
        title: "Error al enviar",
        description: "Hubo un problema al enviar tu mensaje. Por favor, inténtalo de nuevo.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="formulario-contacto" className="py-20 lg:py-28 bg-muted/30">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Mail className="w-4 h-4" />
              Escríbenos
            </div>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Formulario de Contacto
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl mx-auto">
              ¿Tienes alguna pregunta? Rellena el formulario y te responderemos lo antes posible.
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-background rounded-2xl shadow-lg p-8 md:p-10">
            {isSubmitted ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-foreground mb-2">
                  ¡Mensaje enviado!
                </h3>
                <p className="text-muted-foreground">
                  Gracias por contactarnos. Te responderemos pronto.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {/* Name Field */}
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground font-medium">
                    Nombre *
                  </Label>
                  <Input
                    id="name"
                    placeholder="Tu nombre completo"
                    {...register("name")}
                    className={errors.name ? "border-destructive" : ""}
                  />
                  {errors.name && (
                    <p className="text-sm text-destructive">{errors.name.message}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-foreground font-medium">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="tu@email.com"
                    {...register("email")}
                    className={errors.email ? "border-destructive" : ""}
                  />
                  {errors.email && (
                    <p className="text-sm text-destructive">{errors.email.message}</p>
                  )}
                </div>

                {/* Phone Field */}
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-foreground font-medium">
                    Teléfono
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+34 600 000 000"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                {/* Message Field */}
                <div className="space-y-2">
                  <Label htmlFor="message" className="text-foreground font-medium">
                    Mensaje *
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos en qué podemos ayudarte..."
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || !recaptchaLoaded}
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar mensaje
                    </>
                  )}
                </Button>

                {/* reCAPTCHA Notice */}
                <p className="text-xs text-muted-foreground text-center">
                  Este sitio está protegido por reCAPTCHA y aplican la{" "}
                  <a
                    href="https://policies.google.com/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Política de Privacidad
                  </a>{" "}
                  y los{" "}
                  <a
                    href="https://policies.google.com/terms"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Términos de Servicio
                  </a>{" "}
                  de Google.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
