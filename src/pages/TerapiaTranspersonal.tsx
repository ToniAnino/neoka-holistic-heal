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

  // Datos estructurados para mejorar el posicionamiento local y de servicio
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Terapia Transpersonal en Huelva",
    "description": "Acompañamiento profundo en crecimiento personal, patrones vitales y sentido de vida en Huelva.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Neoka",
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
        <title>Terapia Transpersonal en Huelva | Crecimiento Personal – Neoka</title>
        <meta name="description" content="Terapia transpersonal en Huelva orientada al crecimiento personal, los patrones vitales y el sentido de vida. Un enfoque profundo y consciente con Nerea B." />
        <meta name="keywords" content="terapia transpersonal huelva, crecimiento personal huelva, autoconocimiento, transgeneracional huelva, nerea neoka" />
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
            alt="Sesión de Terapia Transpersonal en Huelva - Centro Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-violet-500 hover:text-violet-400 hover:bg-background/90 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia transpersonal
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-4">
            Un camino de autoconocimiento, sentido y transformación interior
          </p>
          <h2 className="text-xl md:text-2xl text-foreground/90 font-medium max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Cuando lo de afuera ya no te sirve, toca mirar hacia dentro.
          </h2>
          <Button size="lg" className="bg-violet-500 hover:bg-violet-600 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20sesión%20de%20terapia%20transpersonal" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Reservar sesión
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-violet-50 flex items-center justify-center mx-auto mb-8">
              <Sparkles className="w-8 h-8 text-violet-500" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿Qué es la terapia transpersonal?
            </h2>
            <div className="text-left space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hay personas que no vienen a terapia porque "tienen un problema". Vienen porque sienten que algo no encaja. Va más allá del síntoma, del diagnóstico o del "qué me pasa", para adentrarse en el <strong className="text-foreground">porqué profundo</strong> de tu historia, de tus patrones repetidos y de tu manera de vivir y relacionarte. La terapia no debe confundirse la psicología clínica. Es un enfoque terapéutico holístico totalmente distinto.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Si estás aquí, probablemente ya has probado lo convencional. Has hablado, has entendido cosas con la cabeza… pero <strong className="text-foreground">algo dentro de ti sigue sin resolverse</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La terapia transpersonal parte de una idea sencilla y profunda: <strong className="text-foreground">no todo lo que dirige tu vida es consciente</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Existen patrones internos, memorias emocionales y estructuras profundas que configuran tu manera de amar, de elegir, de reaccionar y de colocarte en el mundo.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Patrones que no se rompen solo hablando de ellos, porque no nacieron en la mente racional.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Aquí no buscamos únicamente aliviar el síntoma. <strong className="text-foreground">Buscamos comprender el sentido</strong>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tu historia no empezó contigo */}
<section className="py-16 lg:py-24 bg-violet-50/30">
  <div className="container">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8 text-center">
        Tu historia no empezó contigo
      </h2>
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Muchas de las vivencias que hoy te duelen no comenzaron en tu vida adulta. Algunas ni siquiera comenzaron en tu historia personal.
        </p>
        <p className="text-muted-foreground text-lg leading-relaxed">
          Existen lealtades invisibles, mandatos familiares y relatos internos que has asumido como propios y que configuran tu identidad y tu manera de vivir. <strong className="text-foreground">Esto puede verse como:</strong>
        </p>
        <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground text-lg">
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Patrones emocionales inconscientes</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Dinámicas familiares que dejan huella</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Creencias profundas que te condicionan</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Bloqueos internos que frenan tu evolución</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>La búsqueda de propósito y sentido vital</span>
          </li>
        </ul>
        <p className="text-muted-foreground text-lg leading-relaxed">
          La terapia transpersonal te invita a mirar más allá de lo evidente, a observar tu vida como un <strong className="text-foreground">mapa simbólico</strong> que puede ser leído, comprendido y transformado.
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Cuando la vida se repite */}
<section className="py-16 lg:py-24 bg-background">
  <div className="container">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8 text-center">
        Cuando la vida se repite… no es casualidad
      </h2>
      <div className="space-y-6">
        <p className="text-muted-foreground text-lg leading-relaxed">
          Hay momentos en los que una persona siente que:
        </p>
        <ul className="grid md:grid-cols-2 gap-4 text-muted-foreground text-lg">
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Siempre acaba en relaciones similares</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>Repite conflictos emocionales una y otra vez</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            {/* CORREGIDO ABAJO: se añadió el > después de ✓ */}
            <span className="text-violet-500 font-bold">✓</span>
            <span>Vive una desconexión profunda consigo misma</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            {/* CORREGIDO ABAJO: se añadió el > después de ✓ */}
            <span className="text-violet-500 font-bold">✓</span>
            <span>Siente que "algo falta", aunque aparentemente todo esté bien</span>
          </li>
          <li className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-violet-100">
            <span className="text-violet-500 font-bold">✓</span>
            <span>No encuentra respuestas en los enfoques tradicionales</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</section>

      {/* El para qué de tu camino */}
      <section className="py-16 lg:py-24 bg-violet-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8 text-center">
              El para qué de tu camino
            </h2>
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cuando una persona empieza a comprender el <strong className="text-foreground">para qué</strong> de su historia, todo cambia.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lo que antes parecía castigo empieza a adquirir sentido.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Lo que antes dolía sin explicación comienza a ordenarse.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Este trabajo no busca darte respuestas cerradas, sino <strong className="text-foreground">abrir conciencia</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Que puedas reconocerte, entender tus ciclos, tus repeticiones, tus momentos de bloqueo y de expansión, y empezar a vivir desde un lugar más alineado con quien realmente eres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Un trabajo profundo, consciente y simbólico */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Un trabajo profundo, consciente y simbólico
            </h2>
            <div className="space-y-6 text-left">
              <p className="text-muted-foreground text-lg leading-relaxed">
                En este proceso se utilizan herramientas de exploración y autoconocimiento profundo, adaptadas a cada persona, que permiten observar la experiencia vital desde distintos niveles: <strong className="text-foreground">emocional, simbólico y transgeneracional</strong>.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                No se trata de creer.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                <strong className="text-foreground">Se trata de ver.</strong>
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Si todo esto te resuena, este es el momento para iniciar tu proceso.
              </p>
              <p className="text-violet-600 font-medium text-lg">
                Cuando comprendes el mapa de tu vida, dejas de caminar a ciegas.
              </p>
            </div>
            <div className="mt-10">
              <Button size="lg" className="bg-violet-500 hover:bg-violet-600" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20iniciar%20un%20proceso%20de%20terapia%20transpersonal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Iniciar proceso de terapia transpersonal
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Nerea Profile Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-violet-500 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Nerea, terapeuta transpersonal en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Terapeuta Transpersonal en Huelva"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Nerea
                    </h3>
                    <p className="text-violet-500 font-medium mb-1">Terapeuta Transpersonal</p>
                    <p className="text-sm text-muted-foreground">Directora del Centro Neoka</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Desde hace más de 9 años acompaña procesos de crecimiento personal, conciencia y transformación interior. Su enfoque integra el trabajo emocional, el autoconocimiento y la lectura profunda de los procesos vitales, respetando siempre los límites profesionales y el ritmo de cada persona.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-fit bg-violet-500 hover:bg-violet-600"
                    asChild
                  >
                    <a 
                      href="https://wa.me/34617642564?text=Me%20gustaría%20pedir%20cita%20de%20terapia%20transpersonal" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Pedir cita
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-violet-50/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Sientes que es momento de mirar hacia dentro?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Si estás en un momento de búsqueda, crisis o cambio vital, la terapia transpersonal puede ser el espacio que necesitas para comprender tu historia desde un lugar más profundo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-500 hover:bg-violet-600 gap-2" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20pedir%20cita%20de%20terapia%20transpersonal" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Pedir cita de terapia transpersonal
                </a>
              </Button>
              <Button variant="outline" size="lg" className="border-violet-200 text-violet-600 hover:bg-violet-50" asChild>
                <Link to="/#contacto">Contactar para resolver dudas</Link>
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
