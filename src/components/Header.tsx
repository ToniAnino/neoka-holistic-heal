import { useState, useEffect } from "react";
import { Menu, X, Phone, ChevronDown, Brain, Heart, Sparkles, Activity, Footprints, Apple } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import neokaLogo from "@/assets/neoka-logo.png";

const navLinks = [
  { label: "Inicio", href: "/#inicio" },
  { label: "Quiénes Somos", href: "/quienes-somos", isRoute: true },
  { label: "Blog", href: "/#blog" },
  { label: "Contacto", href: "/#contacto" },
];

const services = [
  { icon: Brain, label: "Psicología Sanitaria", href: "/psicologia-sanitaria", color: "text-primary" },
  { icon: Heart, label: "Terapia de Pareja", href: "/terapia-pareja", color: "text-rose-500" },
  { icon: Sparkles, label: "Terapia Transpersonal", href: "/terapia-transpersonal", color: "text-violet-500" },
  { icon: Activity, label: "Fisioterapia", href: "/fisioterapia", color: "text-emerald-500" },
  { icon: Footprints, label: "Podología", href: "/podologia", color: "text-amber-600" },
  { icon: Apple, label: "Nutrición y Dietética", href: "/nutricion-dietetica", color: "text-lime-600" },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

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
        <a href="/#inicio" className="flex items-center gap-2 group">
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
          <a
            href="/#inicio"
            className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
          >
            Inicio
          </a>
          
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button
              className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
            >
              Servicios
              <ChevronDown className={`w-4 h-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {isServicesOpen && (
              <div className="absolute top-[calc(100%)] left-0 w-64 bg-card border border-border rounded-xl shadow-lg py-2 z-50 animate-fade-in before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    to={service.href}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 transition-colors"
                    onClick={() => setIsServicesOpen(false)}
                  >
                    <service.icon className={`w-5 h-5 ${service.color}`} />
                    <span>{service.label}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>

          {navLinks.slice(1).map((link) => (
            link.isRoute ? (
              <Link
                key={link.label}
                to={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="px-4 py-2 text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            )
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
        <div className="lg:hidden absolute top-full left-0 right-0 bg-card backdrop-blur-lg shadow-lg border-t border-border animate-fade-in">
          <nav className="container py-6 flex flex-col gap-2">
            <a
              href="/#inicio"
              className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Inicio
            </a>
            
            {/* Mobile Services Accordion */}
            <div>
              <button
                className="w-full flex items-center justify-between px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
              >
                Servicios
                <ChevronDown className={`w-5 h-5 transition-transform ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isMobileServicesOpen && (
                <div className="ml-4 mt-1 border-l-2 border-border pl-4 space-y-1">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      to={service.href}
                      className="flex items-center gap-3 px-4 py-2 text-sm text-foreground/80 hover:text-primary hover:bg-secondary/50 rounded-lg transition-colors"
                      onClick={() => {
                        setIsMobileMenuOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                    >
                      <service.icon className={`w-4 h-4 ${service.color}`} />
                      <span>{service.label}</span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {navLinks.slice(1).map((link) => (
              link.isRoute ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-4 py-3 text-base font-medium text-foreground hover:text-primary hover:bg-secondary rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
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
