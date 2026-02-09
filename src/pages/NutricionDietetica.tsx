import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Apple, Heart, Activity, Target, Salad, Scale, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/nutricion-hero.jpg";
import marioImage from "@/assets/mario-nutricionista.png";

const benefitsData = [
  {
    icon: Target,
    title: "Planes personalizados",
    description: "Diseñamos planes nutricionales adaptados a tus objetivos, preferencias, estilo de vida y estado de salud.",
  },
  {
    icon: Heart,
    title: "Basado en evidencia científica",
    description: "Trabajamos desde la nutrición clínica actual, sin modas ni soluciones rápidas.",
  },
  {
    icon: Activity,
    title: "Seguimiento continuo",
    description: "Revisiones periódicas, ajustes del plan y acompañamiento durante todo el proceso.",
  },
];

const servicesData = [
  {
    icon: Scale,
    title: "Control de peso",
    description: "Pérdida o ganancia de peso de forma saludable y sostenible. Sin dietas restrictivas ni efecto rebote.",
  },
  {
    icon: Salad,
    title: "Patologías digestivas",
    description: "Abordaje nutricional de intolerancias alimentarias, síndrome del intestino irritable, enfermedad celíaca y SIBO, entre otras alteraciones digestivas.",
  },
  {
    icon: Heart,
    title: "Enfermedades crónicas",
    description: "Nutrición adaptada a diabetes, hipertensión, colesterol elevado, patologías cardiovasculares u otras patologías crónicas.",
  },
  {
    icon: Dumbbell,
    title: "Rendimiento deportivo",
    description: "Optimización de la alimentación para mejorar el rendimiento, la recuperación y la composición corporal.",
  },
  {
    icon: Apple,
    title: "Educación alimentaria",
    description: "Aprende a comer de forma autónoma: lectura de etiquetas, planificación de menús y toma de decisiones conscientes.",
  },
  {
    icon: Target,
    title: "Nutrición oncológica",
    description: "Apoyo nutricional especializado durante y después del tratamiento oncológico, basado en la experiencia clínica y protocolos específicos.",
  },
];

const NutricionDietetica = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  // Esquema de Datos Estructurados para Nutricionista
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Nutritionist",
    "name": "Mario C. - Nutricionista en Huelva | Clínica Neoka",
    "description": "Especialista en nutrición clínica, deportiva y oncológica en Huelva. Tratamiento de SIBO, pérdida de peso y educación alimentaria.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Huelva",
      "addressRegion": "Andalucía",
      "addressCountry": "ES"
    },
    "hasCredential": {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "Dietista-Nutricionista Colegiado",
      "identifier": "AND-01673"
    },
    "service": [
      "Tratamiento de SIBO y patologías digestivas",
      "Nutrición oncológica especializada",
      "Nutrición deportiva",
      "Control de peso saludable"
    ]
  };

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Nutricionista en Huelva | Dietética y Nutrición Clínica Neoka</title>
        <meta name="description" content="¿Buscas un nutricionista en Huelva? Mario C. ofrece planes personalizados para SIBO, nutrición oncológica, deportiva y pérdida de peso. ¡Reserva tu cita!" />
        <meta name="keywords" content="nutricionista huelva, dietista huelva, nutrición oncológica huelva, tratamiento sibo huelva, nutrición deportiva huelva, adelgazar huelva" />
        <link rel="canonical" href="https://centroneoka.es/nutricion-y-dietetica" />
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
            alt="Consulta de nutrición y dietética en Huelva - Clínica Neoka"
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
            Nutricionista en Huelva
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Mejora tu salud con nutrición clínica y deportiva basada en evidencia
          </p>
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20nutrición" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Pedir cita con el nutricionista
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-lime-50 flex items-center justify-center mx-auto mb-8">
              <Apple className="w-8 h-8 text-lime-600" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Dietética y nutrición clínica en Huelva
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La nutrición es mucho más que contar calorías. Es comprender cómo lo que comes influye en tu cuerpo, tu energía, tu estado de ánimo y tu calidad de vida.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Neoka ofrecemos un <strong>enfoque profesional de la nutrición en Huelva</strong>, liderado por Mario C., dietista-nutricionista colegiado. Trabajamos bajo rigor científico pero adaptándonos a tu realidad, tus hábitos y tus necesidades, sin dietas milagro ni restricciones innecesarias.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestro objetivo es proporcionarte herramientas para gestionar tu salud de forma autónoma a través de una <strong>alimentación consciente y personalizada</strong>.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Nuestras Especialidades
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Servicios de nutrición especializada
            </h2>
            <p className="text-muted-foreground text-lg">
              Abordamos patologías digestivas, procesos oncológicos y rendimiento deportivo con planes a medida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {servicesData.map((item, index) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-lime-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-lime-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-lime-600" />
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

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Metodología Neoka
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Cómo trabajamos en consulta?
            </h2>
            <p className="text-muted-foreground text-lg">
              Nuestro enfoque se basa en el acompañamiento cercano y el rigor clínico para garantizar resultados duraderos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-lime-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-lime-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-lime-600" />
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

      {/* Mario Profile Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Dietista-Nutricionista
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Mario, tu Nutricionista en Huelva
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={marioImage}
                    alt="Mario C. - Dietista-Nutricionista Colegiado en Huelva"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Mario
                    </h3>
                    <p className="text-lime-600 font-medium mb-1">Dietista-Nutricionista Colegiado</p>
                    <p className="text-sm text-muted-foreground">Número de colegiado: AND-01673</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Mario es especialista en <strong>nutrición clínica y oncológica</strong> (AECC), así como en optimización del <strong>rendimiento deportivo</strong>.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Su enfoque combina rigor científico con cercanía, adaptando cada plan a las necesidades y preferencias reales de la persona. Cree firmemente que comer bien es la mejor herramienta de salud preventiva.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-lime-600 hover:bg-lime-700"
                  >
                    Ver perfil del equipo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-lime-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              Empieza a cuidar tu alimentación en Huelva
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Si quieres mejorar tu salud, tratar patologías digestivas como el SIBO o mejorar tu rendimiento, estamos aquí para acompañarte.
            </p>
            <Button size="lg" className="bg-lime-600 hover:bg-lime-700 gap-2" asChild>
              <a 
                href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20nutrición" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Contactar por WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <TeamModal open={isTeamModalOpen} onOpenChange={setIsTeamModalOpen} />
    </main>
  );
};

export default NutricionDietetica;
