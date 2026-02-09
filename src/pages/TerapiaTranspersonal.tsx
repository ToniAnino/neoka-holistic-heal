import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/terapia-transpersonal-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta.jpg";

const TerapiaTranspersonal = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Datos estructurados para Google (JSON-LD) - Enfoque en Crecimiento Personal
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Terapia Transpersonal y Crecimiento Personal en Huelva",
    "description": "Acompañamiento en procesos de autoconocimiento, crisis vitales y transformación interior con Nerea B. en Centro Neoka.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Centro Neoka",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Huelva",
        "addressCountry": "ES"
      }
    }
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Terapia Transpersonal en Huelva | Autoconocimiento y Conciencia – Neoka</title>
        <meta name="description" content="Descubre la terapia transpersonal en Huelva. Un enfoque profundo para el crecimiento personal, superación de patrones y búsqueda de sentido vital con Nerea B." />
        <link rel="canonical" href="https://centroneoka.es/terapia-transpersonal" />
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
            alt="Terapia Transpersonal y Autoconocimiento en Huelva"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-violet-600 hover:text-violet-500 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Explorar otros servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia Transpersonal en Huelva
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up mb-4">
            Un camino de autoconocimiento, sentido y transformación interior.
          </p>
          <h2 className="text-xl md:text-2xl text-foreground/90 font-medium max-w-2xl mx-auto animate-fade-up mb-8">
            Cuando lo de afuera ya no te sirve, toca mirar hacia dentro.
          </h2>
          <Button size="lg" className="bg-violet-600 hover:bg-violet-700 animate-fade-up" asChild>
            <a 
              href="https://wa.me/34617642564?text=Hola Nerea, me gustaría reservar una sesión de terapia transpersonal" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Iniciar mi proceso
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-violet-600" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿Qué es el acompañamiento transpersonal?
            </h2>
            <div className="text-left space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hay personas que no buscan una solución a un síntoma clínico, sino que sienten que algo no encaja en su vida. Este enfoque va más allá del diagnóstico para adentrarse en el <strong>porqué profundo</strong> de tu historia y tus patrones repetidos.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La <strong>terapia transpersonal en Huelva</strong> parte de una premisa clara: no todo lo que dirige tu vida es consciente. Existen memorias emocionales y estructuras profundas que configuran tu manera de amar, elegir y reaccionar.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed font-medium text-foreground">
                Aquí no buscamos únicamente aliviar el malestar. Buscamos comprender su sentido y propósito vital.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Secciones de contenido profundo con mejor espaciado y legibilidad */}
      <section className="py-16 lg:py-24 bg-violet-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8 text-center">
              Tu historia y las lealtades invisibles
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Muchos de los bloqueos que experimentas hoy tienen raíces en dinámicas familiares o relatos asumidos como propios. En las sesiones trabajamos sobre:
              </p>
              <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground text-lg">
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
                  <span className="text-violet-500 font-bold">✓</span>
                  <span>Patrones emocionales inconscientes</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
                  <span className="text-violet-500 font-bold">✓</span>
                  <span>Dinámicas familiares heredadas</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
                  <span className="text-violet-500 font-bold">✓</span>
                  <span>Creencias limitantes profundas</span>
                </li>
                <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
                  <span className="text-violet-500 font-bold">✓</span>
                  <span>Propósito y sentido vital</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nerea Profile Section - E-E-A-T Optimizado */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/Person">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-violet-600 uppercase tracking-widest mb-4">
              Especialista en Conciencia
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Nerea, terapeuta transpersonal
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Especialista en Terapia Transpersonal en Huelva"
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2" itemProp="name">
                      Soy Nerea B.
                    </h3>
                    <p className="text-violet-600 font-medium mb-1" itemProp="jobTitle">Terapeuta Transpersonal</p>
                    <p className="text-sm text-muted-foreground">Directora de Centro Neoka</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8" itemProp="description">
                    Con más de 9 años de experiencia, acompaño procesos de <strong>crecimiento personal y transformación interior</strong>. Mi enfoque integra el trabajo emocional profundo con una lectura simbólica de los procesos vitales, ayudándote a recuperar el mapa de tu propia vida.
                  </p>

                  <Button 
                    className="w-fit bg-violet-600 hover:bg-violet-700"
                    asChild
                  >
                    <a 
                      href="https://wa.me/34617642564?text=Hola Nerea, me gustaría informarme sobre las sesiones" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Solicitar información
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 lg:py-20 bg-violet-50/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Sientes que es momento de despertar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Si estás en un momento de crisis o cambio vital, este es el espacio seguro para comprender tu historia desde un lugar más profundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-600 hover:bg-violet-700" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Quiero reservar una sesión de Terapia Transpersonal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Agendar sesión
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-violet-200 text-violet-700 hover:bg-violet-50" asChild>
                <Link to="/#contacto">Resolver dudas</Link>
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

export default TerapiaTranspersonal;
