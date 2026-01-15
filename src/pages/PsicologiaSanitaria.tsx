import { useState } from "react";
import { Link } from "react-router-dom";
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
    title: "Miedos y prevención de estrés y ansiedad",
    description: "Con una variedad de técnicas eficaces podrás deshacerte de esa sensación de angustia constante y aumentar tu tranquilidad para afrontar tu día a día, comprender qué activa tu respuesta ansiógena y por qué, y modificar pensamientos, creencias y conductas disfuncionales.",
  },
  {
    icon: Users,
    title: "Problemas de conducta y resolución de conflictos",
    description: "Realizamos una intervención hacia la solución de hábitos o conductas que nos generan malestar, generadas por su parte o por los demás. Nuestra mente nos está pidiendo un cambio. Los conflictos que puedan sucederse con uno mismo o en relación con otras personas son gestionados de forma profesional y objetiva para una satisfacción por todas las partes.",
  },
  {
    icon: Brain,
    title: "Trastornos y fobias",
    description: "Una fobia es un temor a situaciones o cosas que no son peligrosas y que la mayoría de las personas no las encuentran molestas. Un trastorno es una alteración o cambio en el funcionamiento de un organismo o en el equilibrio psíquico o mental de una persona. Con la psicología, se soluciona, prevé o mejora todo ello de una manera muy importante.",
  },
  {
    icon: Heart,
    title: "Habilidades sociales",
    description: "Aprenderás a relacionarte con los demás, a forjar lazos afectivos con otras personas, a expresarte como quieres, desde el corazón y sin miedos. Además, sabrás enfrentarte a los conflictos resolviéndolos de manera exitosa, con capacidad asertiva y empatía.",
  },
  {
    icon: Sparkles,
    title: "Autoconocimiento",
    description: "Descúbrete, profundiza en ti y averigua hacia dónde quieres ir y qué quieres conseguir. Pondrás de manifiesto todas tus virtudes para así sacarles mayor partido y brillar con ellas, y descubrirás aquellos defectos que no te terminan de dejar ser lo que estás llamado a ser.",
  },
  {
    icon: Target,
    title: "Gestión de emociones",
    description: "Las emociones son lo que más nos preocupa hoy en día, debido a que ellas son las que nos ponen en momentos complicados o en momentos de auténtica euforia. Si no se saben gestionar, pueden ser peligrosas. Aprende el autocontrol, y domina tu vida.",
  },
];

const PsicologiaSanitaria = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Psicología General Sanitaria - Neoka"
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
            Psicología General Sanitaria
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Tu bienestar emocional es nuestra prioridad
          </p>
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
              La terapia psicológica es <strong className="text-foreground">cambio, solución y optimización</strong> de todas las áreas personales que influyen en nuestra satisfacción, en nuestra felicidad y en nuestra calma.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Es sentirte escuchado, reflexionar y profundizar sobre uno mismo y lo que sucede. Es analizar cuáles son los motivos que han generado el problema y que actualmente lo mantienen, para poder elaborar una <strong className="text-foreground">terapia individualizada</strong> y evitar el malestar, ponerle solución y mejorar el estado emocional de la persona.
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
              La Psicología General abarca un amplio espectro de motivos de consulta. Todos tienen en común la búsqueda de comprensión, respuestas, alivio, cambio y solución.
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
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a María, Psicóloga General Sanitaria en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={mariaImage}
                    alt="María D. - Psicóloga General Sanitaria"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy María
                    </h3>
                    <p className="text-primary font-medium mb-1">Psicóloga General Sanitaria</p>
                    <p className="text-sm text-muted-foreground">Colegiada: AN10746</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Lleva por bandera su profesión: ser psicóloga como forma de vida. Es de las que piensa que compartir momentos y experiencias vale por dos. Siente que hablar es clave en el proceso de sanar, aprender y crecer. María es <strong className="text-foreground">humanitaria, valiente, generosa, cercana y noble</strong>.
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
              ¿Listo para dar el primer paso?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nosotros y comienza tu proceso de cambio y bienestar.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
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

export default PsicologiaSanitaria;
