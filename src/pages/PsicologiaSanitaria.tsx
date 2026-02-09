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
    title: "Ansiedad, estrés y prevención del malestar",
    description: "Intervención psicológica para comprender y reducir los niveles de ansiedad y estrés, aprendiendo estrategias para afrontar el día a día con mayor calma y equilibrio emocional.",
  },
  {
    icon: Users,
    title: "Problemas de conducta y resolución de conflictos",
    description: "Trabajo psicológico orientado a identificar y modificar patrones de conducta que generan malestar, así como a mejorar la gestión de conflictos personales y relacionales, ya sea contigo o con los demás.",
  },
  {
    icon: Brain,
    title: "Trastornos y fobias",
    description: "Evaluación e intervención psicológica en trastornos emocionales, miedos intensos o paralizantes y fobias que interfieren en el bienestar personal y limitan la vida cotidiana.",
  },
  {
    icon: Heart,
    title: "Habilidades sociales",
    description: "Desarrollo de habilidades sociales para mejorar la comunicación, la asertividad y las relaciones interpersonales desde un enfoque psicológico, forjando lazos afectivos con otros, y enseñándote a expresarte como quieres.",
  },
  {
    icon: Sparkles,
    title: "Regulación emocional",
    description: "Intervención psicológica orientada a comprender, regular y manejar las emociones de forma saludable, reduciendo el impacto del malestar emocional.",
  },
  {
    icon: Target,
    title: "Estado de ánimo y malestar emocional",
    description: "Evaluación e intervención psicológica en alteraciones del estado de ánimo y malestar emocional que afectan al bienestar personal y al funcionamiento diario.",
  },
];

const PsicologiaSanitaria = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Psicología en Huelva | Ansiedad, Fobias y Trastornos Emocionales – Neoka</title>
        <meta name="description" content="Psicología en Huelva para ansiedad, miedos, fobias, trastornos emocionales y procesos vitales. Atención profesional en psicología general sanitaria en Neoka." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Psicología General Sanitaria en Huelva - Neoka"
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
            Psicología general sanitaria en Huelva
          </h1>
          <h2 className="text-lg md:text-xl text-foreground/90 font-medium max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-4">
            Atención psicológica profesional para el cuidado de tu salud mental
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto animate-fade-up animation-delay-200 mb-8">
            En Neoka ofrecemos atención psicológica sanitaria en Huelva, con un enfoque profesional, cercano y basado en la evidencia científica, adaptado a cada persona y a su momento vital.
          </p>
          <Button size="lg" className="animate-fade-up animation-delay-300" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
            >
              Pedir cita
            </a>
          </Button>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-8">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿Qué es la terapia psicológica?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La terapia psicológica es un proceso profesional orientado a comprender, aliviar y mejorar el malestar emocional que interfiere en tu bienestar y en tu día a día, proporcionándote calma y bienestar.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Es sentirte escuchado, reflexionar. Es analizar cuáles son los motivos que han generado el problema y que actualmente lo mantienen, para poder elaborar una <strong className="text-foreground">terapia individualizada</strong> y evitar el malestar, ponerle solución y mejorar el estado emocional de la persona.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Áreas de mejora
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Qué puedo mejorar si acudo a consulta?
            </h2>
            <p className="text-muted-foreground text-lg">
              La psicología sanitaria aborda diferentes dificultades emocionales y conductuales que afectan al bienestar y a la calidad de vida.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-primary/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
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

{/* María Profile Section */}
<section className="py-16 lg:py-24 bg-background" itemScope itemType="https://schema.org/Physician">
  <div className="container">
    <div className="text-center max-w-2xl mx-auto mb-12">
      <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
        Nuestro Equipo
      </span>
      <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
        Conoce a María, Psicóloga General Sanitaria en Huelva
      </h2>
    </div>

    <div className="max-w-4xl mx-auto">
      <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
        <div className="grid md:grid-cols-[300px_1fr] gap-0">
          {/* Image */}
          <div className="relative aspect-square md:aspect-auto">
            <img
              src={mariaImage}
              alt="María D. - Psicóloga General Sanitaria en Centro Neoka Huelva"
              className="w-full h-full object-cover"
              itemProp="image"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
          </div>
          
          {/* Content */}
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
              María es <strong>psicóloga en Huelva</strong>, graduada en Psicología y especializada en intervención psicológica en adultos y <strong>terapia de pareja</strong>. Su trabajo se basa en un enfoque profesional y cercano, adaptado a las necesidades de cada persona y orientado al bienestar emocional. María es <strong className="text-foreground">humanitaria, valiente, generosa, cercana y noble</strong>.
            </p>

            <Button 
              variant="default" 
              size="lg" 
              onClick={() => setIsTeamModalOpen(true)}
              className="w-fit"
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
      <section className="py-16 lg:py-20 bg-primary/5">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Buscas atención psicológica profesional en Huelva?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Si estás atravesando un momento difícil o necesitas apoyo psicológico profesional, en Neoka podemos ayudarte desde un enfoque cercano, respetuoso y adaptado a ti.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Contacta ahora
                </a>
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

export default PsicologiaSanitaria;
