import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Quote } from "lucide-react";
import mariaPsicologa from "@/assets/maria-psicologa-new.jpg";
import estefaniaFisioterapeuta from "@/assets/estefania-fisioterapeuta-new.jpg";
import paolaPodologa from "@/assets/paola-podologa-recortada.png";
import marioNutricionista from "@/assets/mario-nutricionista-new.jpg";
import nereaTerapeuta from "@/assets/nerea-terapeuta-new.jpg";

interface TeamMember {
  name: string;
  role: string;
  subtitle: string;
  image: string;
  imagePosition?: string;
  description: string;
  colegiado?: string;
}

const director: TeamMember = {
  name: "Nerea",
  role: "Directora del centro Neoka",
  subtitle: "Terapeuta transpersonal y de pareja, Coach, Conferenciante y Escritora",
  image: nereaTerapeuta,
  imagePosition: "object-top scale-100",
  description: `Aunque parezca raro, lo más difícil es definirse uno mismo. Esa ha sido mi lucha toda la vida, hacer que otros sepan quienes son para poder enfrentar la vida con todas las herramientas que conozcan y guardan en su interior. La clave de una vida plena es el autoconocimiento.

Soy terapeuta transpersonal y psico-social, coach integral, conferenciante, escritora además de trabajadora social. Me he criado en una familia con creencias espirituales y científicas que me han calado en mi forma de pensar y actuar frente a la vida uniendo ambas cosas. Soy una apasionada de la mente y las emociones.

El éxito de mis terapias se basa en el trabajo multidisciplinar de diferentes técnicas que hacen que mis sesiones tengan un gran significado en la vida de las personas.

Estoy para ayudarte, para acompañarte en este proceso. Tu plenitud, bienestar y armonía está más cerca de lo que crees. Ahora te toca a ti. ¡Es tu momento!`,
};

const teamMembers: TeamMember[] = [
  {
    name: "María D.",
    role: "Psicóloga General Sanitaria",
    subtitle: "Colegiada: AN10746",
    colegiado: "AN10746",
    image: mariaPsicologa,
    imagePosition: "object-[center_15%]",
    description: "Lleva por bandera su profesión: ser psicóloga como forma de vida. Es de las que piensa que compartir momentos y experiencias vale por dos. Siente que hablar es clave en el proceso de sanar, aprender y crecer. María es humanitaria, valiente, generosa, cercana y noble.",
  },
  {
    name: "Estefanía M.",
    role: "Fisioterapeuta",
    subtitle: "Colegiada: 4399",
    colegiado: "4399",
    image: estefaniaFisioterapeuta,
    imagePosition: "object-[center_20%]",
    description: "El arte de sanar a alguien a través de las manos con diferentes técnicas y conocimientos sobre el cuerpo humano es su pasión. Ayudar y poder contribuir en la recuperación de las personas y mejorar su calidad de vida es su principal objetivo. Implicación, constancia y perseverancia son palabras que le definen.",
  },
  {
    name: "Paola B.",
    role: "Podóloga",
    subtitle: "Colegiada: 838212329",
    colegiado: "838212329",
    image: paolaPodologa,
    // Foto ya recortada: evitamos ajustes extra
    imagePosition: "object-center scale-100",
    description: "Con 10 años de experiencia y formación con diferentes Post grados. Apasionada de la podología, siempre está en constante evolución. Ofrece tratamientos de quiropodia, papilomas, verrugas, exploraciones biomecánicas y ortesis plantares a medida.",
  },
  {
    name: "Mario C.",
    role: "Dietista-Nutricionista",
    subtitle: "Colegiado: AND-01673",
    colegiado: "AND-01673",
    image: marioNutricionista,
    imagePosition: "object-[center_20%]",
    description: "Mario es dietista-nutricionista en Huelva con experiencia en nutrición clínica, trabajando con personas con distintas patologías desde un enfoque cercano, individualizado y basado en la evidencia científica. Actualmente es el profesional responsable de la atención nutricional de la Asociación Española Contra el Cáncer (AECC) en Huelva.",
  },
];

const curiosities = [
  {
    question: "¿Qué me mueve?",
    answer: "Ayudar a las personas a alcanzar su máximo potencial y bienestar integral, comprendiendo sus procesos emocionales y vitales.",
  },
  {
    question: "¿Quién me inspira?",
    answer: "Carl Gustav Jung, por su visión integradora de la psique humana.",
  },
];

const QuienesSomos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Quiénes Somos | Clínica de Psicología y Terapia de Pareja en Huelva | Neoka</title>
        <meta name="description" content="Conoce al equipo de Neoka, clínica de psicología y terapia de pareja en Huelva. Profesionales en salud mental, fisioterapia, podología y nutrición." />
        <link rel="canonical" href="https://centroneoka.es/quienes-somos" />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Quiénes somos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Clínica de psicología y terapia de pareja en Huelva
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Neoka nace como un espacio de salud integral donde cuerpo, mente y emociones se trabajan de forma coordinada.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed mt-4">
              Aquí entendemos la salud como un proceso global, no como compartimentos estancos. Por eso reunimos bajo un mismo techo a profesionales de diferentes disciplinas que comparten una misma forma de acompañar: cercana, consciente y personalizada.
            </p>
          </div>
        </div>
      </section>

      {/* Director Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl md:text-4xl text-primary text-center mb-12">Sobre mí</h2>
            
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              {/* Photo and info */}
              <div className="flex-shrink-0 mx-auto lg:mx-0">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20 shadow-xl">
                  <img
                    src={director.image}
                    alt={director.name}
                    className={`w-full h-full object-cover scale-110 ${director.imagePosition || ''}`}
                  />
                </div>
                <div className="text-center mt-6">
                  <h3 className="font-serif text-2xl text-foreground italic">{director.name}</h3>
                  <p className="text-primary font-medium mt-1">{director.role}</p>
                  <p className="text-sm text-muted-foreground mt-2 max-w-xs">{director.subtitle}</p>
                </div>
              </div>

              {/* Description */}
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line text-lg">
                  {director.description}
                </p>
                
                {/* Quote */}
                <blockquote className="mt-8 relative bg-secondary/50 rounded-xl p-6 border-l-4 border-primary">
                  <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />
                  <p className="italic text-foreground/90 text-lg">
                    "Si no conoces tu Ego, no conoces tu enemigo. Despierta tu consciencia y destruirás tu ego."
                  </p>
                </blockquote>

                {/* Curiosities */}
                <div className="mt-8 grid sm:grid-cols-2 gap-4">
                  {curiosities.map((item) => (
                    <div key={item.question} className="bg-card rounded-xl p-5 border border-border">
                      <h4 className="font-semibold text-primary mb-2">{item.question}</h4>
                      <p className="text-muted-foreground text-sm">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Members Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="font-serif text-3xl md:text-4xl text-primary mb-4">Equipo Colaborador</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Contamos con diferentes profesionales colaboradores en Huelva, creando un servicio multidisciplinar para llegar a todas las personas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-card rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow border border-border"
                >
                  <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-md mx-auto mb-5">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover scale-110 ${member.imagePosition || ''}`}
                    />
                  </div>
                  <h3 className="font-serif text-xl text-foreground font-semibold">{member.name}</h3>
                  <p className="text-primary font-medium text-sm mt-1">{member.role}</p>
                  {member.colegiado && (
                    <p className="text-xs text-muted-foreground mt-1">Col. {member.colegiado}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Nuestra clínica en Huelva, tu espacio de confianza
            </h2>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Neoka es más que una clínica. Es un espacio pensado para que cualquier persona se sienta cómoda, escuchada y acompañada desde el primer momento.
            </p>
            <p className="text-lg text-muted-foreground mb-4 leading-relaxed">
              Cada rincón de la clínica está diseñado para transmitir calma, cercanía y confianza, creando un entorno seguro donde poder trabajar el bienestar físico y emocional con profesionales de diferentes disciplinas.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Creemos que el espacio también forma parte del proceso. Por eso cuidamos cada detalle para que, desde que entras, puedas bajar el ritmo y centrarte en ti.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 lg:py-28 bg-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-6">
              Neoka es un espacio creado para ti
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Si buscas un lugar donde sentirte acompañado y trabajar tu bienestar desde una mirada integral, estás en el sitio adecuado.
            </p>
            <a 
              href="https://wa.me/34617642564?text=Me%20gustaría%20concertar%20una%20cita"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="cta" size="lg" className="gap-2">
                <Phone className="w-5 h-5" />
                Reservar Cita
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default QuienesSomos;
