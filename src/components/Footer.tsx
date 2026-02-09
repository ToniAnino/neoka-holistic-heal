import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import neokaLogo from "@/assets/neoka-logo.png";

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
              <img 
                src={neokaLogo} 
                alt="Neoka" 
                className="h-10 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-background/70 mb-6 leading-relaxed">
              Centro de Salud Integral en Huelva. Cuidamos tu bienestar mental, emocional y físico desde 2016.
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/neokapsicologia/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/neokaoficial/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com/neokaterapia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCBrhtnUQXf86RAxp4-Hlo2g"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
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
                  Calle La Palma, 4, Local derecha<br />
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
                <a href="mailto:webneoka@gmail.com" className="text-background/70 hover:text-primary transition-colors">
                  webneoka@gmail.com
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
              {[
                { name: "Terapia de Pareja", link: "/terapia-pareja" },
                { name: "Psicología Sanitaria", link: "/psicologia-sanitaria" },
                { name: "Terapia emocional / transpersonal", link: "/terapia-transpersonal" },
                { name: "Fisioterapia", link: "/fisioterapia" },
                { name: "Nutrición y Dietética", link: "/nutricion-dietetica" },
                { name: "Podología", link: "/podologia" },
              ].map((service) => (
                <li key={service.name}>
                  <a href={service.link} className="text-background/70 hover:text-primary transition-colors">
                    {service.name}
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
