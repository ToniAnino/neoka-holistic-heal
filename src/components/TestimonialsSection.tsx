import { useEffect, useState, useRef } from "react";

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
  const trustindexRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Trustindex script
    const script = document.createElement('script');
    script.src = 'https://cdn.trustindex.io/loader.js?d26506f628ff634ddb264d78de8';
    script.defer = true;
    script.async = true;
    
    if (trustindexRef.current) {
      trustindexRef.current.appendChild(script);
    }

    return () => {
      // Cleanup script on unmount
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

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

        {/* Trustindex Google Reviews Widget */}
        <div 
          ref={trustindexRef} 
          className="w-full min-h-[300px] flex items-center justify-center"
        >
          {/* Trustindex widget will be loaded here */}
          <div className="text-muted-foreground animate-pulse">
            Cargando reseñas...
          </div>
        </div>
      </div>
    </section>
  );
};
