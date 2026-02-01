import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { TeamModal } from "./TeamModal";
import equipoNeoka from "@/assets/equipo-neoka.png";

const features = [
  "Equipo multidisciplinar cualificado",
  "Enfoque integral de la salud",
  "Instalaciones modernas y accesibles",
  "Atención personalizada",
  "Horarios flexibles de lunes a viernes",
];

export const AboutSection = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <section id="nosotros" className="py-20 lg:py-28 bg-secondary/30">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Column */}
          <div className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden card-shadow">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/10" />
              <img
                src={equipoNeoka}
                alt="Equipo del Centro Neoka en Huelva"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 -right-6 bg-card p-6 rounded-xl card-shadow border border-border hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-2xl font-serif font-bold text-primary">9</span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">Años en Huelva</p>
                  <p className="text-sm text-muted-foreground">Cuidando de ti</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="order-1 lg:order-2">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Sobre Nosotros
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6 leading-tight">
              Más de 9 años cuidando la salud de Huelva
            </h2>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              En <strong className="text-foreground">Neoka</strong> creemos que la salud es un concepto integral 
              que abarca cuerpo, mente y emociones. Por eso, reunimos bajo un mismo techo a profesionales 
              de diferentes disciplinas que trabajan de forma coordinada para ofrecerte la mejor atención.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nuestro centro, ubicado en el corazón de Huelva, está diseñado para que te sientas 
              como en casa desde el primer momento. Un espacio acogedor donde tu bienestar es 
              nuestra única prioridad.
            </p>

            {/* Features list */}
            <ul className="space-y-4 mb-8">
              {features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="default" size="lg" onClick={() => setIsTeamModalOpen(true)}>
              Conoce al equipo
            </Button>
          </div>
        </div>
      </div>

      <TeamModal open={isTeamModalOpen} onOpenChange={setIsTeamModalOpen} />
    </section>
  );
};
