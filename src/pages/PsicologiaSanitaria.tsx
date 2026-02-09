import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Brain, Shield, Users, Heart, Sparkles, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/psicologia-hero.jpg";
import mariaImage from "@/assets/maria-psicologa.jpg";

const benefitsData = [
  {
    icon: Shield,
    title: "Ansiedad, estrés y bienestar",
    description: "Intervención psicológica profesional en Huelva para comprender y reducir los niveles de ansiedad y estrés, aprendiendo estrategias para recuperar la calma y el equilibrio emocional.",
  },
  {
    icon: Users,
    title: "Resolución de conflictos",
    description: "Trabajo orientado a modificar patrones de conducta que generan malestar, mejorando la gestión de conflictos personales y relacionales de forma saludable.",
  },
  {
    icon: Brain,
    title: "Trastornos y fobias",
    description: "Evaluación e intervención psicológica en trastornos emocionales, miedos paralizantes y fobias que interfieren en tu bienestar y limitan tu vida cotidiana.",
  },
  {
    icon: Heart,
    title: "Habilidades sociales",
    description: "Desarrollo de asertividad y comunicación para mejorar tus relaciones interpersonales, forjando lazos afectivos sanos y aprendiendo a expresarte con libertad.",
  },
  {
    icon: Sparkles,
    title: "Regulación emocional",
    description: "Comprende y maneja tus emociones de forma saludable, reduciendo el impacto del malestar emocional mediante técnicas de psicología general sanitaria.",
  },
  {
    icon: Target,
    title: "Estado de ánimo",
    description: "Atención psicológica especializada en alteraciones del estado de ánimo que afectan a tu funcionamiento diario, ayudándote a recuperar tu bienestar personal.",
  },
];

const PsicologiaSanitaria = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Datos estructurados para Google (JSON-LD)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    "mainEntity": {
      "@type": "MedicalService",
      "name": "Psicología General Sanitaria en Huelva",
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
      "description": "Servicios profesionales de psicología en Huelva. Especialistas en ansiedad, depresión, fobias y regulación emocional.",
      "serviceType": "Psychology"
    }
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Psicóloga en Huelva | Ansiedad y Salud Mental – Centro Neoka</title>
        <meta name="description" content="¿Necesitas un psicólogo en Huelva? María D. ofrece atención sanitaria profesional para ansiedad, fobias y bienestar emocional en Neoka. ¡Pide tu cita hoy!" />
        <link rel="canonical" href="https://centroneoka.es/psicologia-sanitaria" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Consulta de Psicología en Huelva - Centro Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-primary hover:text-primary/80 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Servicios de Salud en Huelva</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Psicología General Sanitaria en Huelva
          </h1>
          <h2 className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto animate-fade-up mb-4">
            Tu bienestar emocional es nuestra prioridad. Atención psicológica de calidad.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto animate-fade-up mb-8">
            En Neoka combinamos la evidencia científica con un trato humano y cercano para ayudarte a superar la ansiedad y mejorar tu salud mental en Huelva.
          </p>
          <Button size="lg" className="animate-fade-up" asChild>
            <a 
              href="https://wa.me/34617642564?text=Hola, me gustaría información para una consulta de psicología"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir cita con María
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center" itemScope itemType="https://schema.org/MedicalEntity">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Psicoterapia individualizada: Un camino hacia la calma
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-6">
              <p>
                La <strong>terapia psicológica en Huelva</strong> es un proceso diseñado para comprender el origen de tu malestar y dotarte de herramientas prácticas para tu día a día.
              </p>
              <p>
                En Neoka, realizamos una <strong>evaluación psicológica</strong> exhaustiva para evitar que los síntomas se cronifiquen, buscando siempre la solución más efectiva para tu caso particular.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              ¿Cómo podemos ayudarte?
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Servicios de Psicología Sanitaria
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all border border-border/50"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
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

      {/* María Profile Section - Implementando los Microdatos que pediste */}
      <section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/Physician">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                <div className="relative">
                  <img
                    src={mariaImage}
                    alt="María D. - Psicóloga General Sanitaria Colegiada en Huelva"
                    className="w-full h-full object-cover"
                    itemProp="image"
                  />
                </div>
                
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2" itemProp="name">
                      Soy María
                    </h3>
                    <p className="text-primary font-medium mb-1" itemProp="jobTitle">Psicóloga General Sanitaria</p>
                    <p className="text-sm text-muted-foreground">
                      Colegiada: <span itemProp="credentialCategory">AN10746</span>
                    </p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8" itemProp="description">
                    Como <strong>psicóloga en Huelva</strong>, María se especializa en la intervención clínica con adultos. Su enfoque combina la calidez humana con el rigor sanitario, asegurando que cada paciente reciba una atención noble, valiente y adaptada a su realidad emocional.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit"
                  >
                    Conoce más sobre el equipo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Empieza hoy tu proceso terapéutico en Huelva
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              No esperes a que el malestar te limite. En Neoka te ofrecemos un espacio seguro para cuidar de ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Hola, quiero pedir una cita para psicología"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Contactar por WhatsApp
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#contacto">Ver ubicación en Huelva</Link>
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

export default PsicologiaSanitaria;
