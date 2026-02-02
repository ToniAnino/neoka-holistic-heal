import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Phone, Quote } from "lucide-react";
import marioNutricionista from "@/assets/mario-nutricionista.png";

interface TeamMember {
  name: string;
  role: string;
  subtitle: string;
  image: string;
  description: string;
  colegiado?: string;
}

const director: TeamMember = {
  name: "Nerea",
  role: "Directora del centro Neoka",
  subtitle: "Terapeuta transpersonal, Coach, Conferenciante y Escritora",
  image: "https://static.wixstatic.com/media/281c03_280aa5ac46294e9992e386d5821cb9dc~mv2.jpeg/v1/crop/x_0,y_75,w_777,h_777/fill/w_289,h_289,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202020-03-16%20at%2021_28_02_jp.jpeg",
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
    image: "https://static.wixstatic.com/media/281c03_19a886c742e3458884f0c4d303498182~mv2.jpeg/v1/crop/x_71,y_386,w_761,h_764/fill/w_296,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Mar%C3%ADa.jpeg",
    description: "Lleva por bandera su profesión: ser psicóloga como forma de vida. Es de las que piensa que compartir momentos y experiencias vale por dos. Siente que hablar es clave en el proceso de sanar, aprender y crecer. María es humanitaria, valiente, generosa, cercana y noble.",
  },
  {
    name: "Estefanía M.",
    role: "Fisioterapeuta",
    subtitle: "Colegiada: 4399",
    colegiado: "4399",
    image: "https://static.wixstatic.com/media/281c03_73509c439c6c4c038e06491a32e242d4~mv2.jpeg/v1/crop/x_0,y_162,w_1200,h_1205/fill/w_296,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/Estefania.jpeg",
    description: "El arte de sanar a alguien a través de las manos con diferentes técnicas y conocimientos sobre el cuerpo humano es su pasión. Ayudar y poder contribuir en la recuperación de las personas y mejorar su calidad de vida es su principal objetivo. Implicación, constancia y perseverancia son palabras que le definen.",
  },
  {
    name: "Paola B.",
    role: "Podóloga",
    subtitle: "Colegiada: 838212329",
    colegiado: "838212329",
    image: "https://static.wixstatic.com/media/281c03_46ca1673eb824d2cab8294ae6efd9789~mv2.jpg/v1/crop/x_85,y_361,w_737,h_740/fill/w_296,h_297,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/WhatsApp%20Image%202023-12-12%20at%2022_57_edite.jpg",
    description: "Con 10 años de experiencia y formación con diferentes Post grados. Apasionada de la podología, siempre está en constante evolución. Ofrece tratamientos de quiropodia, papilomas, verrugas, exploraciones biomecánicas y ortesis plantares a medida.",
  },
  {
    name: "Mario C.",
    role: "Dietista-Nutricionista",
    subtitle: "Colegiado: AND-01673",
    colegiado: "AND-01673",
    image: marioNutricionista,
    description: "Mario es dietista-nutricionista en Huelva con experiencia en nutrición clínica, trabajando con personas con distintas patologías desde un enfoque cercano, individualizado y basado en la evidencia científica. Actualmente es el profesional responsable de la atención nutricional de la Asociación Española Contra el Cáncer (AECC) en Huelva.",
  },
];

const curiosities = [
  {
    question: "¿Qué me mueve?",
    answer: "Ayudar a las personas a alcanzar su máximo potencial y bienestar integral.",
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
        <title>Contacto Clínica Neoka | Psicología y Salud Integral en Huelva</title>
        <meta name="description" content="Contacta con la clínica Neoka en Huelva y reserva tu cita en psicología, terapia de pareja o salud integral. Estamos aquí para ayudarte." />
      </Helmet>
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-gradient-to-br from-primary/5 via-background to-secondary/30">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Conócenos
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-semibold text-foreground mb-6 leading-tight">
              Nuestro Equipo
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Un equipo multidisciplinar comprometido con tu bienestar integral. 
              Profesionales cualificados que trabajan juntos para ofrecerte la mejor atención.
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
                    className="w-full h-full object-cover"
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
                Contamos con diferentes profesionales colaboradores creando así un servicio 
                multidisciplinar para llegar a todas las personas.
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
                      className="w-full h-full object-cover"
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
              Nuestra consulta, tu casa
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Un espacio diseñado para tu tranquilidad y bienestar. En Neoka creemos que 
              la salud es un concepto integral que abarca cuerpo, mente y emociones. 
              Por eso, reunimos bajo un mismo techo a profesionales de diferentes disciplinas 
              que trabajan de forma coordinada para ofrecerte la mejor atención.
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
