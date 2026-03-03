import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Footprints, Bone, Activity, Stethoscope, HeartPulse, Eye, User, Calendar, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/podologia-huelva-hero.jpg";
import paolaImage from "@/assets/paola-podologa-new.png";

const servicesData = [
  {
    icon: Footprints,
    title: "Quiropodia y salud del pie",
    description: "Tratamiento de callosidades, durezas, hiperqueratosis y uñas encarnadas. Cuidado integral preventivo en Huelva.",
  },
  {
    icon: Bug,
    title: "Hongos, verrugas y papilomas",
    description: "Especialistas en patologías cutáneas: tratamiento de hongos en uñas, verrugas plantares y papilomas (VPH) recurrentes.",
  },
  {
    icon: Activity,
    title: "Fascitis plantar y dolor",
    description: "Abordaje clínico de la fascitis plantar, tendinitis y metatarsalgias para recuperar tu movilidad sin dolor.",
  },
  {
    icon: Bone,
    title: "Deformidades y dedos en garra",
    description: "Corrección y tratamiento de alteraciones estructurales, dedos en garra y deformidades digitales.",
  },
  {
    icon: HeartPulse,
    title: "Unidad de Pie Diabético",
    description: "Prevención y tratamiento especializado para el pie diabético, evitando complicaciones mediante controles periódicos.",
  },
  {
    icon: Stethoscope,
    title: "Estudio de la pisada y plantillas",
    description: "Análisis biomecánico computerizado de la marcha en Huelva. Diseñamos plantillas personalizadas a medida para corregir la pisada.",
  },
];

const benefitsData = [
  {
    icon: Eye,
    title: "Visión Postural Global",
    description: "Analizamos cómo influye el pie en tu postura y espalda para detectar el origen real de tus dolencias.",
  },
  {
    icon: User,
    title: "Podología Personalizada",
    description: "Adaptamos cada tratamiento a tu actividad diaria, edad y necesidades específicas. Sin soluciones estándar.",
  },
  {
    icon: Calendar,
    title: "Prevención a Largo Plazo",
    description: "Apostamos por el seguimiento continuo para evitar la reaparición de lesiones y mantener la salud de tus pies.",
  },
];

const Podologia = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Esquema SEO para búsqueda local y profesional de salud
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PodiatricCare",
    "name": "Paola Buitrago - Podóloga en Huelva | Clínica Neoka",
    "description": "Clínica de podología en Huelva especializada en plantillas a medida, estudio biomecánico, pie diabético y quiropodia.",
    "provider": {
      "@type": "MedicalOrganization",
      "name": "Neoka",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Huelva",
        "addressRegion": "Andalucía",
        "addressCountry": "ES"
      }
    },
    "knowsAbout": ["Estudio biomecánico de la pisada", "Plantillas personalizadas", "Pie Diabético", "Fascitis Plantar", "Quiropodia"],
    "employee": {
      "@type": "Person",
      "name": "Paola Buitrago",
      "jobTitle": "Podóloga Colegiada",
      "identifier": "838212329"
    }
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Podólogo en Huelva | Plantillas y Estudio de la Pisada | Neoka</title>
        <meta name="description" content="¿Buscas podólogo en Huelva? Paola Buitrago ofrece estudio biomecánico de la pisada, plantillas a medida, tratamiento de hongos, papilomas y pie diabético. ¡Reserva cita!" />
        <meta name="keywords" content="podologo huelva, podologia huelva, plantillas a medida huelva, estudio pisada huelva, tratamiento papiloma pie huelva, uñas encarnadas huelva, pie diabetico huelva" />
        <link rel="canonical" href="https://centroneoka.es/podologia" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Podólogo en Huelva | Plantillas y Estudio de la Pisada | Neoka" />
        <meta property="og:description" content="Especialistas en podología en Huelva. Estudio biomecánico de la pisada, plantillas a medida y tratamiento de pie diabético." />
        <meta property="og:url" content="https://centroneoka.es/podologia" />
        <meta property="og:image" content="https://centroneoka.es/og-neoka.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Podólogo en Huelva | Clínica Neoka" />
        <meta name="twitter:description" content="Especialistas en podología en Huelva. Plantillas a medida, estudio de pisada y pie diabético." />
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
            alt="Clínica de Podología en Huelva Neoka - Especialistas en salud del pie"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-primary hover:text-primary/80 hover:bg-background/90 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Podólogo en Huelva
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Expertos en plantillas personalizadas y estudio biomecánico de la pisada
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20podología" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Pedir cita en Podología
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-amber-50 flex items-center justify-center mx-auto mb-8">
              <Footprints className="w-8 h-8 text-amber-600" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Especialistas en el cuidado integral de tus pies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Neoka entendemos que los pies son el pilar de tu postura. Un mal apoyo puede ser el origen de dolores en rodillas, cadera o espalda. Por ello, nuestra <strong>clínica de podología en Huelva</strong> ofrece un enfoque global.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Desde la <strong>quiropodia básica</strong> hasta el <strong>estudio biomecánico computerizado</strong>, Paola Buitrago utiliza tecnología avanzada para diagnosticar y tratar patologías del pie de forma personalizada y definitiva.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-10 lg:py-14 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Tratamientos Podológicos
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Servicios de Podología Avanzada
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluciones a medida para patologías comunes y biomecánica deportiva.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((item, index) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-amber-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-amber-600" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Paola Profile Section */}
      <section className="py-10 lg:py-14 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Paola, Podóloga en Huelva
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={paolaImage}
                    alt="Paola Buitrago - Especialista en Podología y Biomecánica en Huelva"
                    className="w-full h-full object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Paola Buitrago
                    </h3>
                    <p className="text-amber-600 font-medium mb-1">Podóloga Colegiada</p>
                    <p className="text-sm text-muted-foreground">Número de colegiado: 838212329</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Con más de una década de experiencia, Paola destaca por su enfoque en la <strong className="text-foreground">biomecánica del pie y el diseño de plantillas personalizadas</strong>. Su objetivo es proporcionar una solución integral que mejore no solo la marcha, sino la postura general del paciente.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-amber-600 hover:bg-amber-700"
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
      <section className="py-10 lg:py-14 bg-amber-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Buscas plantillas a medida o estudio de la pisada en Huelva?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Evita lesiones futuras y camina sin dolor. Agenda tu consulta de podología hoy mismo.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20podología" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
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

export default Podologia;
