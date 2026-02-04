import { Brain, Heart, Sparkles, Activity, Footprints, Apple, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Heart,
    title: "Terapia de Pareja",
    description: "Acompañamiento en dificultades de pareja, crisis, y problemas de comunicación. Fortalece vínculos y construye confianza. Resolución de conflictos.",
    color: "text-rose-500",
    bgColor: "bg-rose-50",
    link: "/terapia-pareja",
  },
  {
    icon: Brain,
    title: "Psicología Sanitaria",
    description: "Atención psicológica profesional para el cuidado de la salud mental, ansiedad, depresión, trastornos.",
    color: "text-primary",
    bgColor: "bg-primary/10",
    link: "/psicologia-sanitaria",
  },
  {
    icon: Sparkles,
    title: "Terapia emocional / transpersonal",
    description: "Un espacio para fortalecer tu autoestima y encontrar sentido y propósito en los procesos vitales que atraviesas, y trabajar la dimensión emocional y espiritual, profundizar en tu crecimiento personal o comprender tus bloqueos.",
    color: "text-violet-500",
    bgColor: "bg-violet-50",
    link: "/terapia-transpersonal",
  },
  {
    icon: Activity,
    title: "Fisioterapia",
    description: "Tratamiento personalizado para aliviar el dolor, mejorar la movilidad y favorecer la recuperación física, con un enfoque cercano y profesional. Recuperación de lesiones y rehabilitación.",
    color: "text-emerald-500",
    bgColor: "bg-emerald-50",
    link: "/fisioterapia",
  },
  {
    icon: Apple,
    title: "Nutrición y Dietética",
    description: "Asesoramiento nutricional adaptado a tus necesidades para mejorar tu salud, tu energía y tu relación con la alimentación. Tratamiento de patologías, educación alimentaria.",
    color: "text-lime-600",
    bgColor: "bg-lime-50",
    link: "/nutricion-dietetica",
  },
  {
    icon: Footprints,
    title: "Podología",
    description: "Cuidado integral del pie para prevenir molestias, tratar afecciones y mejorar tu bienestar en el día a día. Estudios biomecánicos, tratamiento de patologías y plantillas personalizadas.",
    color: "text-amber-600",
    bgColor: "bg-amber-50",
    link: "/podologia",
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
            Servicios de psicología, terapia y salud integral
          </h2>
          <p className="text-muted-foreground text-lg">
            Un equipo multidisciplinar de profesionales cualificados para cuidar cada aspecto de tu salud física y emocional.
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
              {service.link ? (
                <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn" asChild>
                  <Link to={service.link}>
                    <span className="font-medium">{service.title}</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              ) : (
                <Button variant="ghost" className="p-0 h-auto text-primary hover:bg-transparent group/btn">
                  <span className="font-medium">{service.title}</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
