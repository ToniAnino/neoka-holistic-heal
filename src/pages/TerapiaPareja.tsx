import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Users, Shield, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/terapia-pareja-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta.jpg";

const benefitsData = [
  {
    icon: MessageCircle,
    title: "Mejora de la comunicación",
    description: "Aprenderéis a expresar vuestras necesidades y sentimientos de forma asertiva, escuchando activamente al otro y estableciendo un diálogo constructivo que fortalezca vuestro vínculo.",
  },
  {
    icon: Heart,
    title: "Reconexión emocional",
    description: "Trabajamos para restablecer el contacto emocional perdido, recuperando la intimidad y complicidad que caracterizaba vuestra relación en sus mejores momentos.",
  },
  {
    icon: Shield,
    title: "Resolución de conflictos",
    description: "Identificamos los patrones de conflicto recurrentes y proporcionamos herramientas efectivas para gestionar las diferencias de manera saludable y respetuosa.",
  },
  {
    icon: Users,
    title: "Fortalecimiento del vínculo",
    description: "Reforzamos los pilares fundamentales de vuestra relación: confianza, respeto mutuo, apoyo incondicional y compromiso compartido hacia un futuro juntos.",
  },
  {
    icon: Sparkles,
    title: "Crecimiento personal en pareja",
    description: "Cada miembro tomará conciencia de su historia personal, creencias e identidad, entendiendo cómo estos aspectos influyen en la dinámica de la relación.",
  },
  {
    icon: HandHeart,
    title: "Separación respetuosa",
    description: "Para parejas que deciden terminar su relación, ofrecemos acompañamiento para hacerlo de manera respetuosa, minimizando el daño emocional para ambas partes.",
  },
];

const TerapiaPareja = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Terapia de Pareja - Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 text-rose-500 hover:text-rose-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia de Pareja
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-up animation-delay-100">
            Reconstruye y fortalece tu relación con ayuda profesional
          </p>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center mx-auto mb-8">
              <Heart className="w-8 h-8 text-rose-500" />
            </div>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
              ¿Qué es la terapia de pareja?
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La terapia de pareja es el <strong className="text-foreground">mejor método para buscar soluciones</strong> a los conflictos que están afectando vuestra relación. Sea del tipo que sea, un conflicto en la pareja siempre genera distanciamiento, infelicidad y frialdad.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Es un espacio donde se analizan las dificultades que os afectan como pareja. Revisamos la dinámica actual para detectar <strong className="text-foreground">cómo habéis llegado hasta aquí</strong>, cómo os sentís y poder restablecer el contacto, el diálogo y la comunicación.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En la terapia de pareja se tratan temas de cualquier índole: <strong className="text-foreground">afectivos, emocionales, psicológicos o sexuales</strong>. Crisis por convivencia, cambios personales, insatisfacciones por rutina, falta de comunicación o roles estancados.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-rose-50/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Áreas de trabajo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Cómo puede ayudaros la terapia?
            </h2>
            <p className="text-muted-foreground text-lg">
              Cada relación es única. Trabajamos de forma personalizada para abordar vuestras necesidades específicas y fortalecer vuestro vínculo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {benefitsData.map((benefit, index) => (
              <article
                key={benefit.title}
                className="group bg-card rounded-2xl p-8 card-shadow hover:card-shadow-hover transition-all duration-300 border border-border/50 hover:border-rose-200"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-rose-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-rose-500" />
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

      {/* Important Message Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="bg-rose-50/50 rounded-2xl p-8 lg:p-12 border border-rose-100">
              <h3 className="font-serif text-xl md:text-2xl font-semibold text-foreground mb-6 text-center">
                Es importante dar el paso
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Al igual que ocurre con la terapia individual, tomar la decisión de acudir a terapia de pareja no es fácil. A veces existe falta de información o esta es confusa, lo que retrasa el momento de pedir ayuda.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Es importante <strong className="text-foreground">quitar la connotación negativa</strong> que pueda tener recurrir a un terapeuta de pareja. A medida que pase el tiempo, mayor será el conflicto y más grande la distancia entre vosotros.
              </p>
              <p className="text-rose-600 font-medium text-lg text-center">
                Y si has llegado hasta aquí, quizás ahora sea el momento que estabais esperando para iniciar la terapia. ¿A qué esperáis para empezar?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nerea Profile Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Nuestro Equipo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground">
              Conoce a Nerea, Terapeuta de Pareja en Neoka
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-card rounded-2xl card-shadow border border-border/50 overflow-hidden">
              <div className="grid md:grid-cols-[300px_1fr] gap-0">
                {/* Image */}
                <div className="relative aspect-square md:aspect-auto">
                  <img
                    src={nereaImage}
                    alt="Nerea B. - Terapeuta Transpersonal y de Pareja"
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
                    <p className="text-rose-500 font-medium mb-1">Terapeuta Transpersonal y de Pareja</p>
                    <p className="text-sm text-muted-foreground">Coach y Directora del Centro Neoka</p>
                  </div>
                  
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    Nerea es la directora y fundadora de Neoka. Especializada en terapia transpersonal y de pareja, acompaña a personas y parejas en su proceso de crecimiento personal y transformación. Su enfoque integrador combina <strong className="text-foreground">herramientas terapéuticas con técnicas de coaching</strong> para lograr resultados profundos y duraderos.
                  </p>

                  <Button 
                    variant="default" 
                    size="lg" 
                    onClick={() => setIsTeamModalOpen(true)}
                    className="w-fit bg-rose-500 hover:bg-rose-600"
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
      <section className="py-16 lg:py-20 bg-rose-50/50">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-serif text-2xl md:text-3xl font-semibold text-foreground mb-4">
              ¿Listos para dar el primer paso juntos?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contactad con nosotros y comenzad vuestro camino hacia una relación más sana y feliz.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-rose-500 hover:bg-rose-600" asChild>
                <a href="tel:+34959000000">Llamar ahora</a>
              </Button>
              <Button variant="outline" size="lg" className="border-rose-200 text-rose-600 hover:bg-rose-50" asChild>
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

export default TerapiaPareja;