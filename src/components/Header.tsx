import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import neokaLogo from "@/assets/neoka-logo.png";
const navLinks = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Quiénes Somos", href: "#nosotros" },
  { label: "Blog", href: "#blog" },
  { label: "Contacto", href: "#contacto" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#inicio" className="flex items-center gap-2 group">
          <img 
            src={neokaLogo} 
            alt="Neoka" 
            className="h-10 w-auto transition-transform group-hover:scale-105"
          />
          <span className="text-[10px] text-muted-foreground tracking-widest uppercase">
            Centro de Salud Integral
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center gap-4">
          <a href="tel:+34617642564" className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors">
            <Phone className="w-4 h-4" />
            <span>617 64 25 64</span>
          </a>
          <a 
            href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="cta" size="default">
              Reservar Cita
            </Button>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card/98 backdrop-blur-lg shadow-lg border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <a 
                href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="cta" size="lg" className="w-full">
                  Reservar Cita
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
