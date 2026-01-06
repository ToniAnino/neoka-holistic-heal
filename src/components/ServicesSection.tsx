import { Brain, Heart, Sparkles, Activity, Footprints, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Brain,
    title: "Psicología Sanitaria",
    description: "Terapia individual para ansiedad, depresión, estrés y otros trastornos. Enfoque personalizado basado en evidencia científica.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Heart,
    title: "Terapia de Pareja",
    description: "Mejora la comunicación y resuelve conflictos. Fortalece los vínculos y reconstruye la confianza en tu relación.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
  },
  {
    icon: Sparkles,
    title: "Terapia Transpersonal",
    description: "Explora tu crecimiento personal y espiritual. Conecta con tu esencia y encuentra un mayor sentido de propósito.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Rehabilitación, terapia manual y tratamiento del dolor. Recupera tu movilidad y calidad de vida.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
  },
  {
    icon: Footprints,
    title: "Podología",
    description: "Cuidado integral del pie: estudios biomecánicos, tratamiento de patologías y plantillas personalizadas.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
  },
];

export const ServicesSection = () => {
  return (
    <section id="servicios" className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Nuestros Servicios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Atención integral para tu bienestar
          </h2>
          <p className="text-muted-foreground text-lg">
            Un equipo multidisciplinar de profesionales cualificados para cuidar 
            cada aspecto de tu salud física y emocional.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`w-7 h-7 ${service.color}`} />
              </div>

              {/* Content */}
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Link */}
              <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
                <span className="font-medium">Saber más</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
