import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Heart, MessageCircle, Users, Shield, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/terapia-pareja-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta.jpg";

const benefitsData = [
  {
    icon: Shield,
    title: "Infidelidades y crisis de confianza",
    description: "Acompañamos a parejas que atraviesan una infidelidad o una pérdida de confianza, ayudándoos a comprender qué ha ocurrido, gestionar el impacto emocional y decidir, desde la conciencia, si queréis reconstruir la relación o cerrar la etapa.",
  },
  {
    icon: Heart,
    title: "Celos y control",
    description: "Trabajamos los celos, el miedo a la pérdida y las dinámicas de control que generan sufrimiento en la relación. Identificamos el origen emocional de estos patrones para crear vínculos más seguros y sanos.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación y discusiones",
    description: "Cuando las conversaciones se convierten en reproches, silencios o discusiones repetitivas, la terapia de pareja ayuda a aprender nuevas formas de comunicarse, escucharse y entenderse sin dañar el vínculo.",
  },
  {
    icon: Sparkles,
    title: "Rutina, monotonía y desconexión emocional",
    description: "Muchas parejas sienten que la relación se ha apagado con el tiempo. Abordamos la rutina, la distancia emocional y la sensación de estar juntos pero desconectados, ayudándoos a redefinir la relación en esta nueva etapa.",
  },
  {
    icon: Users,
    title: "Falta de deseo y dificultades en la vida sexual",
    description: "La sexualidad es una parte importante de la relación. Trabajamos la falta de deseo, la desconexión íntima y los conflictos relacionados con el sexo desde un enfoque respetuoso, emocional y consciente.",
  },
  {
    icon: HandHeart,
    title: "Crecimiento en pareja o separación consciente",
    description: "Acompañamos tanto a parejas que desean fortalecer sus vínculos como a aquellas que deciden separarse de forma madura, consciente y con el menor daño emocional posible.",
  },
];

const TerapiaPareja = () => {
  // Datos estructurados para Google
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Terapia de Pareja",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Centro Neoka",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Huelva",
        "addressRegion": "Andalucía",
        "addressCountry": "ES"
      }
    },
    "description": "Especialistas en terapia de pareja en Huelva. Tratamiento de crisis, infidelidades, problemas de comunicación y sexualidad.",
    "areaServed": {
      "@type": "City",
      "name": "Huelva"
    }
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Terapia de Pareja en Huelva | Especialistas en Relaciones – Neoka</title>
        <meta name="description" content="¿Buscas terapia de pareja en Huelva? En Neoka ayudamos a superar crisis, infidelidades y problemas de comunicación. Recupera el vínculo con terapia profesional." />
        <link rel="canonical" href="https://centroneoka.es/terapia-de-pareja" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Sesión de terapia de pareja en Huelva"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-rose-500 hover:text-rose-400 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Servicios de Psicología en Huelva</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia de Pareja en Huelva
          </h1>
          <h2 className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-fade-up font-medium">
            Acompañamiento profesional para superar crisis y fortalecer vuestro vínculo emocional.
          </h2>
          <div className="mt-8">
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 animate-fade-up" asChild>
              <a href="https://wa.me/34617642564?text=Hola, busco información sobre terapia de pareja en Huelva">
                Pedir primera cita
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Introduction Section con Microdatos */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/Service">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h2 itemProp="name" className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿En qué consiste nuestra terapia de pareja en Huelva?
            </h2>
            <div itemProp="description" className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                La <strong>terapia de pareja</strong> es un recurso clínico fundamental cuando la relación se encuentra estancada. En nuestro centro en Huelva, ofrecemos un entorno neutral y seguro.
              </p>
              <p>
                Abordamos desde <strong>crisis de convivencia</strong> hasta <strong>distanciamiento emocional</strong>, ayudando a las parejas de Huelva a reconstruir el diálogo y el respeto mutuo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Usando etiquetas Article para SEO */}
      <section className="py-16 lg:py-24 bg-rose-50/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Especialidades
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Áreas de intervención en psicología de pareja
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-rose-500" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Nerea Profile Section - Optimización E-E-A-T */}
      <section className="py-16 lg:py-24 bg-secondary/30" itemScope itemType="https://schema.org/Person">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr]">
                <div className="relative">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Especialista en Terapia de Pareja en Huelva"
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
                <div className="p-8 lg:p-10">
                  <h3 className="font-serif text-2xl font-semibold mb-2" itemProp="name">Soy Nerea</h3>
                  <p className="text-rose-500 font-medium mb-4" itemProp="jobTitle">Terapeuta Transpersonal y de Pareja</p>
                  <div className="text-muted-foreground space-y-4" itemProp="description">
                    <p>
                      Como <strong>especialista en terapia de pareja en Huelva</strong>, cuento con más de 9 años de experiencia ayudando a reconstruir vínculos dañados por infidelidades o falta de comunicación.
                    </p>
                    <p className="italic">
                      "Mi objetivo es que encontréis claridad, ya sea para fortalecer vuestra unión o para una separación consciente."
                    </p>
                  </div>
                  <Button className="mt-8 bg-rose-500 hover:bg-rose-600" asChild>
                    <a href="https://wa.me/34617642564">Contactar con Nerea</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TerapiaPareja;
