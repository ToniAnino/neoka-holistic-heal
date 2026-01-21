import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, TreeDeciduous, Star, Target, Briefcase, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/terapia-transpersonal-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta.jpg";

const transpersonalData = [
  {
    icon: TreeDeciduous,
    title: "Árbol transgeneracional",
    description: "Exploramos tu historia familiar para identificar patrones heredados que pueden estar influyendo en tu vida actual, liberándote de cargas que no te pertenecen.",
  },
  {
    icon: Star,
    title: "Psicoastrología",
    description: "Utilizamos tu carta astral como herramienta de autoconocimiento para comprender tus talentos innatos, desafíos y propósito de vida.",
  },
  {
    icon: Sparkles,
    title: "Crecimiento espiritual",
    description: "Te acompañamos en tu búsqueda de sentido y conexión con tu esencia más profunda, facilitando una transformación auténtica y duradera.",
  },
];

const coachingData = [
  {
    icon: Trophy,
    title: "Deporte de alto rendimiento",
    description: "Potencia tu rendimiento deportivo trabajando la mentalidad, la gestión del estrés competitivo y la visualización para alcanzar tus metas.",
  },
  {
    icon: Target,
    title: "Vida personal",
    description: "Define y alcanza tus objetivos personales. Te ayudamos a identificar lo que realmente quieres y a diseñar un plan de acción efectivo.",
  },
  {
    icon: Briefcase,
    title: "Empresas y liderazgo",
    description: "Desarrolla tus habilidades de liderazgo, gestión de equipos y comunicación efectiva para maximizar el potencial de tu organización.",
  },
];

const TerapiaTranspersonal = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Terapia Transpersonal y Coaching - Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 text-violet-500 hover:text-violet-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia Transpersonal y Coaching
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Descubre tu potencial y conecta con tu verdadera esencia
          </p>
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
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La terapia transpersonal te ayuda en tu <strong className="text-foreground">búsqueda personal</strong>, identificando patrones repetitivos que se dan en tu vida y que te impiden avanzar o ser feliz. Es un viaje hacia tu interior para descubrir quién eres realmente.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Trabajamos con herramientas como el <strong className="text-foreground">árbol transgeneracional</strong> para explorar tu historia familiar y la <strong className="text-foreground">psicoastrología</strong> como mapa de autoconocimiento, facilitando tu crecimiento personal y espiritual.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Esta terapia te permite conectar con dimensiones más profundas de tu ser, encontrando un mayor <strong className="text-foreground">sentido de propósito</strong> y una vida más alineada con tu verdadera esencia.
            </p>
          </div>
        </div>
      </section>

      {/* Transpersonal Benefits Section */}
      <section className="py-16 lg:py-24 bg-violet-50/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-violet-500 uppercase tracking-widest mb-4">
              Terapia Transpersonal
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Herramientas de transformación
            </h2>
            <p className="text-muted-foreground text-lg">
              Utilizamos diversas técnicas para facilitar tu proceso de autoconocimiento y crecimiento personal.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {transpersonalData.map((item, index) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-violet-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-violet-500" />
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

      {/* Coaching Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-violet-500 uppercase tracking-widest mb-4">
              Coaching
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Ámbitos de aplicación
            </h2>
            <p className="text-muted-foreground text-lg">
              El coaching es una herramienta orientada a objetivos que te ayuda a maximizar tu potencial en diferentes áreas de tu vida.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {coachingData.map((item, index) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-violet-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-violet-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-violet-500" />
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

      {/* Important Message Section */}
      <section className="py-16 lg:py-20 bg-violet-50/30">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl p-8 lg:p-12 border border-violet-100 card-shadow">
              <div className="flex items-center justify-center mb-6">
                <Users className="w-10 h-10 text-violet-500" />
              </div>
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                Un camino hacia tu mejor versión
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Tanto la terapia transpersonal como el coaching son herramientas poderosas para quienes buscan <strong className="text-foreground">algo más en la vida</strong>. No se trata solo de resolver problemas, sino de descubrir tu verdadero potencial y vivir de manera más auténtica.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Cada persona es única, por eso nuestro enfoque es completamente <strong className="text-foreground">personalizado</strong>. Trabajamos contigo para identificar tus objetivos, superar los obstáculos que te frenan y diseñar el camino hacia la vida que realmente deseas.
              </p>
              <p className="text-violet-600 font-medium text-lg text-center">
                ¿Estás listo para comenzar tu viaje de transformación personal?
              </p>
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
              Conoce a Nerea, Terapeuta Transpersonal y Coach
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Terapeuta Transpersonal y Coach"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Nerea
                    </h3>
                    <p className="text-violet-500 font-medium mb-1">Terapeuta Transpersonal y Coach</p>
                    <p className="text-sm text-muted-foreground">Directora del Centro Neoka</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Nerea es la directora y fundadora de Neoka. Especializada en terapia transpersonal y coaching, acompaña a personas en su proceso de <strong className="text-foreground">crecimiento personal y transformación</strong>. Su enfoque integrador combina herramientas terapéuticas con técnicas de coaching para lograr resultados profundos y duraderos, tanto en el ámbito personal como profesional.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-violet-500 hover:bg-violet-600"
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
      <section className="py-16 lg:py-20 bg-violet-50/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Listo para descubrir tu verdadero potencial?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nosotros y comienza tu camino hacia una vida más plena y auténtica.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-violet-500 hover:bg-violet-600" asChild>
                <a href="tel:+34959000000">Llamar ahora</a>
              </Button>
              <Button variant="outline" size="lg" className="border-violet-200 text-violet-600 hover:bg-violet-50" asChild>
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

export default TerapiaTranspersonal;
