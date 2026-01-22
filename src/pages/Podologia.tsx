import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Footprints, Bone, Activity, Stethoscope, Shield, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/fisioterapia-hero.jpg";
import paolaImage from "@/assets/paola-podologa.jpg";

const benefitsData = [
  {
    icon: Stethoscope,
    title: "Diagnóstico especializado",
    description: "El podólogo es el profesional sanitario universitario con los conocimientos, habilidades y aptitudes para realizar las actividades dirigidas a la prevención, diagnóstico y tratamiento de las afecciones de los pies.",
  },
  {
    icon: Shield,
    title: "Prevención y tratamiento",
    description: "Actúa de forma autónoma o dentro de un entorno multidisciplinar, con una identidad bien definida. Tratamiento de afecciones y deformidades de los pies mediante procedimientos terapéuticos podológicos.",
  },
  {
    icon: Activity,
    title: "Estudio biomecánico",
    description: "Análisis completo de la marcha y la pisada para detectar alteraciones que puedan afectar no solo a los pies, sino también a rodillas, caderas y espalda.",
  },
];

const servicesData = [
  {
    icon: Footprints,
    title: "Quiropodía",
    description: "Tratamiento de callosidades, durezas, uñas encarnadas y otras afecciones comunes del pie que causan molestias en el día a día.",
  },
  {
    icon: Bone,
    title: "Plantillas personalizadas",
    description: "Diseño y fabricación de plantillas a medida para corregir alteraciones en la pisada y mejorar la biomecánica del pie.",
  },
  {
    icon: HeartPulse,
    title: "Pie diabético",
    description: "Cuidado especializado para pacientes diabéticos, con protocolos específicos de prevención y tratamiento de úlceras y otras complicaciones.",
  },
];

const Podologia = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Podología - Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Podología
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Cuidado integral de tus pies
          </p>
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
              La importancia del pie
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              El pie es una de las partes más importantes de nuestro cuerpo. Es <strong className="text-foreground">nuestra base de apoyo</strong>, nos mantiene erguidos y nos permite caminar de manera bípeda.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Está formado por <strong className="text-foreground">26 huesos, 33 articulaciones y más de 100 músculos</strong> que encajan perfectamente, pero que no siempre funcionan como es debido.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              La podología es la rama de la medicina cuya finalidad es el estudio de las afecciones, alteraciones y enfermedades que afectan al pie. Aporta en el diagnóstico, el tratamiento y la investigación de todo lo relacionado con el pie.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Nuestro enfoque
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Atención podológica integral
            </h2>
            <p className="text-muted-foreground text-lg">
              Un enfoque completo para el cuidado de tus pies, desde la prevención hasta el tratamiento especializado.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-amber-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-amber-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-amber-600" />
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

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Servicios
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Qué tratamientos ofrecemos?
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluciones personalizadas para cada patología y necesidad del pie.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
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
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Paola, Podóloga en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={paolaImage}
                    alt="Paola Buitrago - Podóloga"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Paola
                    </h3>
                    <p className="text-amber-600 font-medium mb-1">Podóloga</p>
                    <p className="text-sm text-muted-foreground">Más de 10 años de experiencia</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Con más de una década de experiencia en podología, Paola combina su <strong className="text-foreground">profundo conocimiento técnico</strong> con un trato cercano y personalizado. Especializada en biomecánica del pie, quiropodía y tratamiento del pie diabético. Su compromiso es mejorar la calidad de vida de cada paciente a través del cuidado integral de sus pies.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-amber-600 hover:bg-amber-700"
                  >
                    Conoce al equipo
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-amber-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Necesitas cuidar tus pies?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nosotros y comienza a cuidar la base de tu bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-amber-600 hover:bg-amber-700" asChild>
                <a href="tel:+34959000000">Llamar ahora</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/#contacto">Más información</Link>
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
