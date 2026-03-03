import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Heart, MessageCircle, Users, Shield, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/terapia-pareja-huelva-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta-new.jpg";

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
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);
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
        <meta name="description" content="¿Buscas terapia de pareja en Huelva? Nuestro Psicólogo Sanitario en Huelva te ayuda a superar crisis, infidelidades y problemas de comunicación. Recupera el vínculo." />
        <link rel="canonical" href="https://centroneoka.es/terapia-pareja" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Terapia de Pareja en Huelva | Neoka" />
        <meta property="og:description" content="Especialistas en terapia de pareja en Huelva. Supera crisis, infidelidades y problemas de comunicación con terapia profesional." />
        <meta property="og:url" content="https://centroneoka.es/terapia-pareja" />
        <meta property="og:image" content="https://centroneoka.es/og-neoka.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Terapia de Pareja en Huelva | Neoka" />
        <meta name="twitter:description" content="Especialistas en terapia de pareja en Huelva. Supera crisis e infidelidades con terapia profesional." />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto dura la terapia de pareja?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La duración de la terapia de pareja varía según el conflicto. En Neoka realizamos una valoración inicial y adaptamos el número de sesiones al proceso de cada pareja, sin plazos rígidos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Puede ir solo uno de la pareja a terapia?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. Es posible comenzar un proceso individual cuando la pareja no está dispuesta a acudir. Trabajamos desde el contexto relacional de cada persona."
                }
              },
              {
                "@type": "Question",
                "name": "¿La terapia de pareja sirve para decidir si separarse?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. La terapia ayuda tanto a reconstruir la relación como a tomar una decisión de separación de forma consciente y con el menor daño emocional posible."
                }
              }
            ]
          })}
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
      <section className="py-10 lg:py-14 bg-background" itemScope itemType="https://schema.org/Service">
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
      <section className="py-10 lg:py-14 bg-rose-50/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Especialidades
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Áreas de intervención en terapia de pareja
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

      {/* Nerea Profile Section */}
      <section className="py-10 lg:py-14 bg-secondary/30" itemScope itemType="https://schema.org/Person">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Conoce a Nerea
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Nuestro Equipo
            </h2>
            <p className="text-muted-foreground mt-4">Terapeuta transpersonal en Huelva</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                <div className="relative">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Terapeuta Transpersonal y de Pareja en Huelva"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    itemProp="image"
                  />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2" itemProp="name">
                      Soy Nerea
                    </h3>
                    <p className="text-rose-500 font-medium mb-1" itemProp="jobTitle">Terapeuta Transpersonal y de Pareja</p>
                    <p className="text-sm text-muted-foreground">Directora del Centro Neoka</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8" itemProp="description">
                    Como <strong>especialista en terapia de pareja en Huelva</strong>, cuento con más de 9 años de experiencia ayudando a reconstruir vínculos dañados por infidelidades o falta de comunicación. Mi objetivo es que encontréis claridad, ya sea para fortalecer vuestra unión o para una separación consciente.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-fit bg-rose-500 hover:bg-rose-600"
                    onClick={() => setIsTeamModalOpen(true)}
                  >
                    Ver equipo médico
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 lg:py-14 bg-rose-50/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Empieza hoy vuestro proceso de terapia de pareja
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              No esperéis a que la distancia sea irreversible. En Neoka os ofrecemos un espacio seguro para reencontraros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600 gap-2" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Hola,%20me%20gustaría%20información%20sobre%20terapia%20de%20pareja"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-rose-200 text-rose-600 hover:bg-rose-50" asChild>
                <Link to="/#contacto">Ver ubicación clínica</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <TeamModal open={isTeamModalOpen} onOpenChange={setIsTeamModalOpen} />
    </main>
  );
};

export default TerapiaPareja;
