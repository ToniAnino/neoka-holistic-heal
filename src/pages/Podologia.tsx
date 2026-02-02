import { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, Footprints, Bone, Activity, Stethoscope, Shield, HeartPulse, Eye, User, Calendar, Sparkles, Bug } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { TeamModal } from "@/components/TeamModal";
import heroImage from "@/assets/fisioterapia-hero.jpg";
import paolaImage from "@/assets/paola-podologa.jpg";

const servicesData = [
  {
    icon: Footprints,
    title: "Quiropedia y cuidado del pie",
    description: "Tratamiento de callosidades, durezas, hiperqueratosis, uñas encarnadas y cuidado integral del pie en consulta.",
  },
  {
    icon: Bug,
    title: "Patologías cutáneas y ungueales",
    description: "Tratamiento de hongos, verrugas y papilomas (VPH) —incluidos los recurrentes—, dermatitis y eccemas del pie.",
  },
  {
    icon: Activity,
    title: "Dolor y lesiones del pie",
    description: "Abordaje de fascitis plantar, tendinitis, metatarsalgias y otras patologías dolorosas del pie.",
  },
  {
    icon: Bone,
    title: "Alteraciones estructurales",
    description: "Tratamiento de dedos en garra, deformidades digitales y alteraciones de la pisada.",
  },
  {
    icon: HeartPulse,
    title: "Pie diabético",
    description: "Prevención, control y tratamiento especializado para evitar complicaciones.",
  },
  {
    icon: Stethoscope,
    title: "Estudio biomecánico y plantillas",
    description: "Realizamos un análisis biomecánico computerizado de la pisada y la marcha, estudiando el miembro inferior en su conjunto para detectar alteraciones funcionales que puedan generar dolor o lesiones. A partir de este estudio diseñamos plantillas personalizadas a medida, adaptadas a cada paciente y a sus necesidades específicas.",
  },
];

const benefitsData = [
  {
    icon: Eye,
    title: "Visión global del cuerpo",
    description: "No tratamos el pie de forma aislada. Analizamos cómo influye en la postura, la marcha y el equilibrio corporal, entendiendo que muchas molestias tienen su origen en desajustes globales del movimiento. Esta visión integral nos permite detectar el origen real del problema y no solo sus síntomas.",
  },
  {
    icon: User,
    title: "Atención personalizada",
    description: "Cada paciente tiene una historia distinta. Por eso diseñamos planes de tratamiento personalizados, teniendo en cuenta tu edad, tu actividad diaria, tu nivel de movimiento y tus necesidades específicas. No aplicamos soluciones estándar: adaptamos cada intervención a ti.",
  },
  {
    icon: Calendar,
    title: "Prevención y seguimiento",
    description: "Nuestro trabajo no termina en la consulta. Apostamos por la prevención y el seguimiento, ayudándote a mantener la salud de tus pies a largo plazo y a evitar la reaparición de molestias o lesiones. La prevención es una parte fundamental del cuidado podológico.",
  },
];

const Podologia = () => {
  const [isTeamModalOpen, setIsTeamModalOpen] = useState(false);

  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Podología en Huelva | Cuidado Integral del Pie – Neoka</title>
        <meta name="description" content="Podología en Huelva para tratamiento del pie, estudio biomecánico y plantillas personalizadas. Atención profesional y cercana en Neoka." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Podología en Huelva - Neoka"
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
            Podología en Huelva
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl mx-auto animate-fade-up animation-delay-100 mb-8">
            Cuidamos la salud de tus pies con un enfoque profesional, personalizado y basado en la evidencia
          </p>
          <Button size="lg" className="bg-amber-600 hover:bg-amber-700 animate-fade-up animation-delay-200" asChild>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20podología" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Reservar cita en podología
            </a>
          </Button>
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
              Qué es la podología y por qué es tan importante cuidar tus pies
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Los pies son la base que sostiene todo tu cuerpo. Nos permiten movernos, avanzar y mantener el equilibrio, pero muchas veces solo les prestamos atención cuando aparece el dolor.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              La podología es la disciplina sanitaria que se encarga de cuidar la salud del pie, prevenir lesiones y tratar aquellas alteraciones que afectan a tu bienestar y a tu calidad de vida. Un problema en el pie no solo genera molestias locales: puede repercutir en la forma de caminar, en las rodillas, las caderas o la espalda.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              En Neoka entendemos la podología como algo más que tratar un síntoma puntual. Abordamos cada caso de forma personalizada, buscando el origen del problema y acompañándote en el cuidado integral de tus pies para que puedas moverte con seguridad, comodidad y confianza.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 lg:py-24 bg-secondary/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Servicios
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              ¿Qué tratamientos ofrecemos?
            </h2>
            <p className="text-muted-foreground text-lg">
              Ofrecemos soluciones personalizadas para las patologías más frecuentes y complejas del pie, adaptando cada tratamiento a las necesidades del paciente.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
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

      {/* Benefits Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-amber-600 uppercase tracking-widest mb-4">
              Nuestro enfoque
            </span>
            <h2 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground mb-6">
              Atención podológica integral
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Nuestro enfoque combina diagnóstico clínico, prevención y tratamiento para ofrecer una atención completa y duradera, dentro de un entorno multidisciplinar. En Neoka entendemos la podología como algo más que tratar un problema puntual. Nuestro enfoque se basa en escuchar, observar y comprender cómo se relacionan tus pies con el resto de tu cuerpo y con tu forma de moverte en el día a día.
            </p>
            <p className="text-foreground font-medium text-lg">
              Cada persona pisa diferente. Por eso, cada tratamiento debe ser único.
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
            <p className="text-muted-foreground text-lg mb-4">
              Si sientes molestias en los pies, dolor al caminar o necesitas un tratamiento podológico especializado, en Neoka te ofrecemos una atención cercana, profesional y adaptada a tus necesidades.
            </p>
            <p className="text-foreground font-medium text-lg mb-8">
              Cuidar tus pies es cuidar tu bienestar y tu movilidad diaria.
            </p>
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 gap-2" asChild>
              <a 
                href="https://wa.me/34617642564?text=Me%20gustaría%20reservar%20una%20cita%20de%20podología" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Reservar cita en podología
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

export default Podologia;
