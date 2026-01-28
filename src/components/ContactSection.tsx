import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const services = [
  "Terapia de Pareja",
  "Psicología Sanitaria",
  "Terapia Emocional / Transpersonal",
  "Fisioterapia",
  "Nutrición y Dietética",
  "Podología",
];

const contactSchema = z.object({
  name: z.string().trim().min(2, "El nombre debe tener al menos 2 caracteres").max(100, "El nombre no puede exceder 100 caracteres"),
  interest: z.string().min(1, "Por favor, selecciona un servicio"),
  message: z.string().trim().min(10, "El mensaje debe tener al menos 10 caracteres").max(1000, "El mensaje no puede exceder 1000 caracteres"),
});

type ContactFormData = z.infer<typeof contactSchema>;

export const ContactSection = () => {
  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const selectedInterest = watch("interest");

  const onSubmit = (data: ContactFormData) => {
    // Build WhatsApp message with emojis and line breaks
    const rawMessage = `🌿 *Contacto desde la web Neoka*

👤 *Nombre:* ${data.name}
✨ *Interés:* ${data.interest}
💬 *Mensaje:* ${data.message}

🌐 _Enviado desde el formulario web_`;
    
    // Encode the entire message at once
    const encodedMessage = encodeURIComponent(rawMessage);
    
    // Open WhatsApp with the formatted message
    window.open(`https://wa.me/34617642564?text=${encodedMessage}`, "_blank");
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

              {/* Interest Dropdown */}
              <div className="space-y-2">
                <Label htmlFor="interest" className="text-foreground font-medium">
                  Interés *
                </Label>
                <Select
                  value={selectedInterest}
                  onValueChange={(value) => setValue("interest", value, { shouldValidate: true })}
                >
                  <SelectTrigger className={errors.interest ? "border-destructive" : ""}>
                    <SelectValue placeholder="Selecciona un servicio" />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((service) => (
                      <SelectItem key={service} value={service}>
                        {service}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.interest && (
                  <p className="text-sm text-destructive">{errors.interest.message}</p>
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
              >
                <svg 
                  className="w-5 h-5 mr-2" 
                  fill="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Enviar por WhatsApp
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
