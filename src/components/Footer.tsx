import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container py-16 lg:py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-lg">N</span>
              </div>
              <div>
                <span className="font-serif font-semibold text-xl leading-none">Neoka</span>
              </div>
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Centro de Salud Integral en Huelva. Cuidamos tu bienestar mental, emocional y físico desde 2016.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Contacto</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-background/70">
                  Calle Ejemplo, 123<br />
                  21001 Huelva, España
                </span>
              </li>
              <li className="flex gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+34617642564" className="text-background/70 hover:text-primary transition-colors">
                  617 64 25 64
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:info@neoka.es" className="text-background/70 hover:text-primary transition-colors">
                  info@neoka.es
                </a>
              </li>
              <li className="flex gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70">
                  Lunes a Viernes<br />
                  9:00 - 21:00
                </span>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Servicios</h3>
            <ul className="space-y-3">
              {["Psicología Sanitaria", "Terapia de Pareja", "Terapia Transpersonal", "Fisioterapia", "Podología"].map((service) => (
                <li key={service}>
                  <a href="#servicios" className="text-background/70 hover:text-primary transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-6">Legal</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Aviso Legal
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Privacidad
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Política de Cookies
                </a>
              </li>
              <li>
                <a href="#" className="text-background/70 hover:text-primary transition-colors">
                  Términos y Condiciones
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-background/50 text-center md:text-left">
            © {currentYear} Neoka - Centro de Salud Integral. Todos los derechos reservados.
          </p>
          <p className="text-sm text-background/50">
            Diseñado con ❤️ en Huelva
          </p>
        </div>
      </div>
    </footer>
  );
};
