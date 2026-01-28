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
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-primary hover:text-primary/80 hover:bg-background/90 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Fisioterapia
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Recupera tu movilidad y calidad de vida
          </p>
          <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20fisioterapia" 
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
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 gap-2" asChild>
                <a 
                  href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20fisioterapia" 
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

export default Fisioterapia;
