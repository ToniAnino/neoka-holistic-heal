import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Activity, Shield, Wrench, Dumbbell, Stethoscope, HeartPulse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/fisioterapia-hero.jpg";
import estefaniaImage from "@/assets/estefania-fisioterapeuta.jpg";

const benefitsData = [
  {
    icon: Shield,
    title: "Proteger",
    description: "Es prioritario entender los posibles condicionantes que hacen que el problema perdure en el tiempo. La educación en salud es una de nuestras prioridades. Ayudar a conseguir estrategias prácticas y realistas es uno de los grandes retos.",
  },
  {
    icon: Wrench,
    title: "Corregir",
    description: "Cuando tenemos unos hábitos correctos, la parte de corregir es mucho más fácil. Aquí entran todas las herramientas específicas con las que trabajamos para mejorar aquello que impide que la lesión evolucione correctamente.",
  },
  {
    icon: Dumbbell,
    title: "Fortalecer",
    description: "Habiendo conseguido las dos primeras partes, toca afianzar el proceso fortaleciendo los eslabones débiles, recuperando un equilibrio y armonía para mantener un cuerpo robusto y resiliente.",
  },
];

const pathologiesData = [
  {
    icon: Stethoscope,
    title: "Dolor muscular y articular",
    description: "Contracturas, cervicalgias, dorsalgias, lumbalgias de tipo agudo y crónico. Tratamiento especializado para el alivio del dolor.",
  },
  {
    icon: Activity,
    title: "Lesiones deportivas",
    description: "Tendinitis, esguinces, fascitis plantar, lesiones musculares. Recuperación completa para volver a tu actividad deportiva.",
  },
  {
    icon: HeartPulse,
    title: "Rehabilitación",
    description: "Recuperación de lesiones, rehabilitación post-quirúrgica y gerontológica. Acompañamiento en todo el proceso de recuperación.",
  },
];

const Fisioterapia = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Fisioterapia - Neoka"
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
            Fisioterapia
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Recupera tu movilidad y calidad de vida
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-emerald-50 flex items-center justify-center mx-auto mb-8">
              <Activity className="w-8 h-8 text-emerald-500" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿Qué es la fisioterapia?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La Fisioterapia es el conjunto de métodos, actuaciones y técnicas que, mediante la aplicación de <strong className="text-foreground">medios físicos</strong>, curan, previenen, recuperan y adaptan a personas afectadas de disfunciones somáticas o a las que se desea mantener en un nivel adecuado de salud.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Mediante el conjunto de métodos, actuaciones y técnicas, a través de la aplicación tanto manual como instrumental de medios físicos, la fisioterapia procura una <strong className="text-foreground">amplia mejoría en la patología a tratar</strong>. También tiene un carácter preventivo y puede recomendarse a las personas que desean mantener un nivel adecuado de salud.
            </p>
          </div>
        </div>
      </section>

      {/* Three Pillars Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-widest mb-4">
              Nuestra metodología
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Los tres pilares del tratamiento
            </h2>
            <p className="text-muted-foreground text-lg">
              Nuestro enfoque integral se basa en tres pilares fundamentales para garantizar una recuperación completa y duradera.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-emerald-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-emerald-500" />
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

      {/* Pathologies Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-widest mb-4">
              Áreas de tratamiento
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Qué patologías tratamos?
            </h2>
            <p className="text-muted-foreground text-lg">
              Abordamos una amplia variedad de patologías con tratamientos personalizados y basados en la evidencia científica.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {pathologiesData.map((item, index) => (
              <article
                key={item.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-emerald-500/20"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-emerald-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <item.icon className="w-7 h-7 text-emerald-500" />
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

      {/* Estefanía Profile Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-emerald-600 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Estefanía, Fisioterapeuta en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={estefaniaImage}
                    alt="Estefanía Molina - Fisioterapeuta"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent md:bg-gradient-to-r" />
                </div>
                
                {/* Content */}
                <div className="p-8 lg:p-10 flex flex-col justify-center">
                  <div className="mb-6">
                    <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-foreground mb-2">
                      Soy Estefanía
                    </h3>
                    <p className="text-emerald-600 font-medium mb-1">Fisioterapeuta</p>
                    <p className="text-sm text-muted-foreground">Diplomada en 2000</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Con más de dos décadas de experiencia, Estefanía combina su amplio conocimiento técnico con un enfoque <strong className="text-foreground">humano y cercano</strong>. Su pasión por la fisioterapia y su compromiso con la recuperación de cada paciente la convierten en una profesional excepcional. Especializada en terapia manual y rehabilitación.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-emerald-600 hover:bg-emerald-700"
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
      <section className="py-16 lg:py-20 bg-emerald-50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Listo para recuperar tu bienestar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nosotros y comienza tu proceso de rehabilitación y recuperación.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700" asChild>
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

export default Fisioterapia;
