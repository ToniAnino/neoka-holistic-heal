import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, MessageCircle, Users, Shield, Sparkles, HandHeart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import heroImage from "@/assets/terapia-pareja-hero.jpg";
import nereaImage from "@/assets/nerea-terapeuta.jpg";

const benefitsData = [
  {
    icon: Shield,
    title: "Infidelidades y crisis de confianza",
    description: "Acompañamos a parejas que atraviesan una infidelidad o una pérdida de confianza, ayudándoos a comprender qué ha ocurrido, gestionar el impacto emocional y decidir, desde la conciencia, si queréis reconstruir la relación o cerrar la etapa.",
  },
  {
    icon: Heart,
    title: "Celos y control",
    description: "Trabajamos los celos, el miedo a la pérdida y las dinámicas de control que generan sufrimiento en la relación. Identificamos el origen emocional de estos patrones para crear vínculos más seguros y sanos.",
  },
  {
    icon: MessageCircle,
    title: "Comunicación y discusiones",
    description: "Cuando las conversaciones se convierten en reproches, silencios o discusiones repetitivas, la terapia de pareja ayuda a aprender nuevas formas de comunicarse, escucharse y entenderse sin dañar el vínculo.",
  },
  {
    icon: Sparkles,
    title: "Rutina, monotonía y desconexión emocional",
    description: "Muchas parejas sienten que la relación se ha apagado con el tiempo. Abordamos la rutina, la distancia emocional y la sensación de estar juntos pero desconectados, ayudándoos a redefinir la relación en esta nueva etapa.",
  },
  {
    icon: Users,
    title: "Falta de deseo y dificultades en la vida sexual",
    description: "La sexualidad es una parte importante de la relación. Trabajamos la falta de deseo, la desconexión íntima y los conflictos relacionados con el sexo desde un enfoque respetuoso, emocional y consciente. Sin juicios. Con honestidad y herramientas potentes para relanzar este tema.",
  },
  {
    icon: HandHeart,
    title: "Crecimiento en pareja o separación consciente",
    description: "Acompañamos tanto a parejas que desean fortalecer sus vínculos (respeto, compromiso, cooperación) como a aquellas que deciden separarse, ofreciendo un espacio terapéutico para tomar decisiones maduras, conscientes y con el menor daño emocional posible.",
  },
];

const TerapiaPareja = () => {
  return (
    <main className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Terapia de Pareja en Huelva - Neoka"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
        </div>
        <div className="container relative z-10 text-center">
          <Link 
            to="/#servicios" 
            className="inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-rose-500 hover:text-rose-400 hover:bg-background/90 transition-colors mb-6 px-4 py-2 rounded-full"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Volver a servicios</span>
          </Link>
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-4 animate-fade-up">
            Terapia de Pareja en Huelva
          </h1>
          <h2 className="text-lg md:text-xl text-foreground/90 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-4 font-medium">
            Cuando la relación se resiente, buscar ayuda a tiempo marca la diferencia.
          </h2>
          <p className="text-base md:text-lg text-foreground/80 max-w-2xl mx-auto animate-fade-up animation-delay-100 mb-8">
            En Neoka trabajamos con parejas que atraviesan dificultades en su relación, ofreciendo un espacio profesional para comprender lo que ocurre, mejorar el vínculo y tomar decisiones conscientes.
          </p>
          <Button size="lg" className="bg-rose-500 hover:bg-rose-600 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20terapia%20de%20pareja" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Pedir cita para terapia de pareja
            </a>
          </Button>
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
              La terapia de pareja es un espacio profesional donde ambos miembros pueden comprender qué está ocurriendo en la relación, identificar los conflictos que se repiten y aprender nuevas formas de comunicarse y vincularse.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              En Neoka acompañamos a parejas de Huelva que atraviesan crisis de convivencia, distanciamiento emocional, problemas de comunicación, celos, infidelidades o dificultades para tomar decisiones importantes sobre su relación.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Durante el proceso terapéutico revisamos la historia de la pareja, la dinámica actual y el modo en que cada uno se relaciona consigo mismo y con el otro, para recuperar el diálogo, la conexión emocional y el respeto mutuo.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              La terapia de pareja no solo está indicada cuando la relación está a punto de romperse, sino también cuando existe malestar, dudas, bloqueo emocional o sensación de estancamiento.
            </p>
            <p className="text-foreground text-lg leading-relaxed font-semibold">
              Buscar ayuda a tiempo puede evitar que los conflictos se cronifiquen y deterioren la relación.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-rose-50/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-rose-500 uppercase tracking-widest mb-4">
              Áreas de trabajo
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Cómo puede ayudaros la terapia de pareja?
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Cada relación atraviesa momentos de dificultad. En la terapia de pareja trabajamos de forma personalizada para ayudaros a comprender qué está ocurriendo, mejorar la comunicación y tomar decisiones conscientes sobre vuestro vínculo.
            </p>
            <p className="text-muted-foreground text-lg">
              En Neoka ofrecemos terapia de pareja en Huelva, adaptada a la historia, necesidades y momento vital de cada pareja, creando un espacio seguro donde ambos podáis expresaros sin juicios.
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

      {/* Unique Process Section */}
      <section className="py-16 lg:py-20 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-8">
                Cada pareja es única, y también lo es su proceso
              </h2>
            </div>
            <div className="space-y-6 text-center">
              <p className="text-muted-foreground text-lg leading-relaxed">
                No existen relaciones perfectas ni manuales universales. Cada pareja atraviesa momentos de crisis, cambios y dificultades que, si no se atienden a tiempo, pueden generar distancia emocional, resentimiento o bloqueo en la relación.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                En nuestro centro de terapia de pareja en Huelva trabajamos desde una mirada profunda y respetuosa, teniendo en cuenta la historia de la relación, las emociones de cada miembro y el momento vital en el que os encontráis como pareja.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                La terapia no busca señalar culpables, sino comprender qué está ocurriendo entre vosotros y qué necesitáis en esta etapa, ya sea para reconstruir la relación, mejorar la convivencia o tomar decisiones importantes con mayor claridad emocional.
              </p>
              <p className="text-rose-600 font-semibold text-lg mt-8">
                Pedir ayuda no es un fracaso, es una forma de cuidar vuestro vínculo
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
              Conoce a Nerea, Directora y creadora de Neoka. Coach, Terapeuta transpersonal y de pareja en Huelva
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
                  
                  <div className="text-muted-foreground leading-relaxed space-y-4 mb-8">
                    <p>
                      Acompaño a parejas que atraviesan crisis, conflictos, bloqueos emocionales o momentos de cambio en su relación, ofreciendo un espacio seguro donde poder comprender qué está ocurriendo y cómo afrontarlo de una forma más consciente.
                    </p>
                    <p>
                      Trabajo desde una mirada profunda e integradora, atendiendo no solo a la dinámica de la pareja, sino también a la historia emocional de cada persona y al momento vital que estáis atravesando juntos. Cuento con más de 9 años de experiencia en el acompañamiento terapéutico de parejas, abordando situaciones como infidelidades, celos, problemas de comunicación, desgaste por la rutina, dificultades en la intimidad y procesos de separación o reconstrucción del vínculo.
                    </p>
                    <p>
                      Entiendo la terapia de pareja como un proceso de crecimiento y toma de conciencia, donde no se busca señalar culpables, sino comprender qué necesita cada relación en su momento presente.
                    </p>
                    <p className="text-foreground font-medium">
                      Si sentís que algo no va bien en vuestra relación, o simplemente necesitáis ayuda para aclarar el camino, pedir apoyo profesional puede marcar la diferencia.
                    </p>
                  </div>

                  <Button 
                    variant="default" 
                    size="lg" 
                    className="w-fit bg-rose-500 hover:bg-rose-600"
                    asChild
                  >
                    <a 
                      href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20terapia%20de%20pareja" 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      Pedir cita
                    </a>
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
              ¿Buscáis terapia de pareja en Huelva?
            </h2>
            <p className="text-foreground font-semibold text-lg mb-4">
              Pedir ayuda es un acto de cuidado
            </p>
            <p className="text-muted-foreground text-lg mb-8">
              Si vuestra relación atraviesa un momento difícil, sentís distancia emocional o repetís los mismos conflictos, la terapia de pareja puede ayudaros a comprender qué está ocurriendo y a encontrar nuevas formas de relacionaros.
            </p>
            <Button size="lg" className="bg-rose-500 hover:bg-rose-600 gap-2" asChild>
              <a 
                href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita%20de%20terapia%20de%20pareja" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Pedir cita
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default TerapiaPareja;
