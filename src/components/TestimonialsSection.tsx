import { Star, Quote } from "lucide-react";
import { useEffect, useState, useRef } from "react";

const testimonials = [
  {
    name: "María García",
    role: "Paciente de Psicología",
    content: "Después de años lidiando con la ansiedad, encontré en Neoka el apoyo que necesitaba. El equipo es excepcional y el trato muy humano.",
    rating: 5,
  },
  {
    name: "Carlos Rodríguez",
    role: "Paciente de Fisioterapia",
    content: "Me recuperé de una lesión deportiva mucho más rápido de lo esperado. Profesionales de primer nivel y un ambiente muy agradable.",
    rating: 5,
  },
  {
    name: "Laura y Pedro",
    role: "Terapia de Pareja",
    content: "La terapia de pareja nos ayudó a reconectar y comunicarnos mejor. Recomendamos Neoka sin dudarlo.",
    rating: 5,
  },
];

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

const Counter = ({ end, suffix = "", duration = 2000 }: CounterProps) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    requestAnimationFrame(step);
  }, [isVisible, end, duration]);

  return (
    <span ref={countRef}>
      {count.toLocaleString()}{suffix}
    </span>
  );
};

export const TestimonialsSection = () => {
  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container">
        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 p-8 md:p-12 bg-primary rounded-2xl text-primary-foreground">
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
              <Counter end={2500} suffix="+" />
            </p>
            <p className="text-sm opacity-80">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
              <Counter end={9} />
            </p>
            <p className="text-sm opacity-80">Años de experiencia</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
              <Counter end={5} />
            </p>
            <p className="text-sm opacity-80">Especialidades</p>
          </div>
          <div className="text-center">
            <p className="text-4xl md:text-5xl font-serif font-bold mb-2">
              <Counter end={98} suffix="%" />
            </p>
            <p className="text-sm opacity-80">Satisfacción</p>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
            Testimonios
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold text-foreground mb-6">
            Lo que dicen nuestros pacientes
          </h2>
          <p className="text-muted-foreground text-lg">
            La confianza de nuestros pacientes es nuestro mayor reconocimiento.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-shadow border border-border/50 relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                <Quote className="w-5 h-5 text-primary-foreground" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4 pt-2">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                  <span className="text-lg font-serif font-semibold text-primary">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
