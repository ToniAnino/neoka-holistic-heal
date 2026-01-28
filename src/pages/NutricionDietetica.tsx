import { useState } from "react";
import { Link } from "react-router-dom";
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
    description: "Cada persona es única. Diseñamos planes nutricionales adaptados a tus objetivos, preferencias alimentarias, estilo de vida y condiciones de salud específicas.",
  },
  {
    icon: Heart,
    title: "Basado en evidencia",
    description: "Nuestras recomendaciones se fundamentan en la última evidencia científica. Nada de dietas milagro ni modas pasajeras, solo nutrición real y efectiva.",
  },
  {
    icon: Activity,
    title: "Seguimiento continuo",
    description: "Te acompañamos en todo el proceso con revisiones periódicas, ajustes del plan según tu progreso y apoyo constante para alcanzar tus metas.",
  },
];

const servicesData = [
  {
    icon: Scale,
    title: "Control de peso",
    description: "Pérdida de peso saludable y sostenible, ganancia de masa muscular o mantenimiento. Sin dietas restrictivas ni efecto rebote.",
  },
  {
    icon: Salad,
    title: "Patologías digestivas",
    description: "Tratamiento nutricional para intolerancias alimentarias, síndrome de intestino irritable, enfermedad celíaca y otras patologías digestivas.",
  },
  {
    icon: Heart,
    title: "Enfermedades crónicas",
    description: "Nutrición especializada para diabetes, hipertensión, colesterol elevado, enfermedades cardiovasculares y otras patologías crónicas.",
  },
  {
    icon: Dumbbell,
    title: "Rendimiento deportivo",
    description: "Optimiza tu alimentación para mejorar el rendimiento, acelerar la recuperación y alcanzar tus objetivos deportivos.",
  },
  {
    icon: Apple,
    title: "Educación alimentaria",
    description: "Aprende a comer bien de forma autónoma. Te enseñamos a interpretar etiquetas, planificar menús y hacer elecciones saludables.",
  },
  {
    icon: Target,
    title: "Nutrición oncológica",
    description: "Apoyo nutricional especializado durante y después del tratamiento oncológico, basado en la experiencia en la AECC.",
  },
];

const NutricionDietetica = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Nutrición y Dietética - Neoka"
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
            Nutrición y Dietética
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Tu alimentación, tu salud, tu bienestar
          </p>
          <Button size="lg" className="bg-lime-600 hover:bg-lime-700 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20nutrición" 
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
            <div className="w-16 h-16 rounded-2xl bg-lime-50 flex items-center justify-center mx-auto mb-8">
              <Apple className="w-8 h-8 text-lime-600" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              Alimentación consciente para una vida plena
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La nutrición es mucho más que contar calorías. Es entender cómo los alimentos afectan a nuestro cuerpo, nuestra energía, nuestro estado de ánimo y nuestra <strong className="text-foreground">calidad de vida</strong>.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Ofrecemos <strong className="text-foreground">asesoramiento personalizado y planes nutricionales basados en evidencia científica</strong>. Tratamiento de patologías, educación alimentaria y mejora del rendimiento físico y la salud.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Nuestro objetivo es que aprendas a alimentarte de forma saludable, sostenible y placentera. Sin prohibiciones, sin culpa, con conocimiento y autonomía.
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Nuestro enfoque
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Cómo trabajamos?
            </h2>
            <p className="text-muted-foreground text-lg">
              Un enfoque integral y personalizado para ayudarte a alcanzar tus objetivos nutricionales.
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

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Servicios
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Cómo podemos ayudarte?
            </h2>
            <p className="text-muted-foreground text-lg">
              Soluciones nutricionales para cada etapa de la vida y cada objetivo de salud.
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

      {/* Mario Profile Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-lime-600 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Mario, Dietista-Nutricionista en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={marioImage}
                    alt="Mario C. - Dietista-Nutricionista"
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
                    <p className="text-lime-600 font-medium mb-1">Dietista-Nutricionista</p>
                    <p className="text-sm text-muted-foreground">Colegiado: AND-01673</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Mario combina su formación especializada con experiencia en <strong className="text-foreground">nutrición clínica y oncológica</strong> (AECC) y en optimización del <strong className="text-foreground">rendimiento deportivo</strong>. Su enfoque se basa en la evidencia científica, pero siempre adaptado a las necesidades y preferencias de cada persona. Cree firmemente que comer bien debe ser un placer, no una obligación.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-lime-600 hover:bg-lime-700"
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
      <section className="py-16 lg:py-20 bg-lime-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Listo para mejorar tu alimentación?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nosotros y da el primer paso hacia una nutrición saludable y consciente.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-lime-600 hover:bg-lime-700 gap-2" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20nutrición" 
                  target="_blank" 
                  rel="noopener noreferrer"
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

export default NutricionDietetica;
