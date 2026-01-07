import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import heroBackground from "@/assets/hero-background.jpg";

export const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Parallax Background Image */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      >
        <img 
          src={heroBackground} 
          alt="Consultorio de psicología en Huelva" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-background/80 backdrop-blur-[2px]" />
      </div>

      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container relative z-10 pt-24 pb-16 lg:pt-32 lg:pb-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-primary/10 mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-secondary-foreground">
              Más de 9 años cuidando de ti
            </span>
          </div>

          {/* Main Heading - H1 with SEO keyword */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-semibold text-foreground leading-tight mb-6 animate-fade-up animation-delay-100">
            Tu Centro de{" "}
            <span className="text-gradient">Psicología en Huelva</span>
            <br />
            y Salud Integral
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up animation-delay-200">
            Cuidamos tu bienestar <strong className="text-foreground">mental, emocional y físico</strong>. 
            Un equipo de profesionales comprometidos con tu salud en un espacio diseñado para tu tranquilidad.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up animation-delay-300">
            <Button variant="hero" size="xl">
              Reservar Primera Consulta
              <ArrowRight className="w-5 h-5 ml-1" />
            </Button>
            <Button variant="outline" size="xl">
              Conoce Nuestros Servicios
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="mt-16 pt-10 border-t border-border/50 animate-fade-up animation-delay-400">
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-primary">+2500</p>
                <p className="text-sm text-muted-foreground mt-1">Pacientes atendidos</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-primary">9</p>
                <p className="text-sm text-muted-foreground mt-1">Años de experiencia</p>
              </div>
              <div className="hidden sm:block w-px h-12 bg-border" />
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-serif font-semibold text-primary">5</p>
                <p className="text-sm text-muted-foreground mt-1">Especialidades</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary/50 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
