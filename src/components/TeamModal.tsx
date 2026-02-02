import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import mariaPsicologa from "@/assets/maria-psicologa-new.jpg";
import estefaniaFisioterapeuta from "@/assets/estefania-fisioterapeuta-new.jpg";
import paolaPodologa from "@/assets/paola-podologa-new.jpg";
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
    imagePosition: "object-top",
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

interface TeamModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const TeamModal = ({ open, onOpenChange }: TeamModalProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] p-0 overflow-hidden">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="font-serif text-3xl text-center text-foreground">
            Nuestro Equipo
          </DialogTitle>
        </DialogHeader>
        
        <ScrollArea className="h-[calc(90vh-100px)] px-6 pb-6">
          {/* Director Section */}
          <div className="mb-12">
            <h3 className="font-serif text-2xl text-primary text-center mb-8">Sobre mí</h3>
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <div className="flex-shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                  <img
                    src={director.image}
                    alt={director.name}
                    className={`w-full h-full object-cover scale-110 ${director.imagePosition || ''}`}
                  />
                </div>
                <div className="text-center mt-4">
                  <h4 className="font-serif text-xl text-foreground italic">{director.name}</h4>
                  <p className="text-sm text-primary font-medium">{director.role}</p>
                  <p className="text-xs text-muted-foreground mt-1">{director.subtitle}</p>
                </div>
              </div>
              <div className="flex-1">
                <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                  {director.description}
                </p>
                <blockquote className="mt-6 border-l-4 border-primary pl-4 italic text-foreground/80">
                  "Si no conoces tu Ego, no conoces tu enemigo. Despierta tu consciencia y destruirás tu ego."
                </blockquote>
              </div>
            </div>
          </div>

          {/* Team Members Section */}
          <div>
            <h3 className="font-serif text-2xl text-primary text-center mb-8">Equipo Colaborador</h3>
            <p className="text-center text-muted-foreground mb-8">
              Contamos con diferentes profesionales colaboradores en Huelva, creando un servicio multidisciplinar para llegar a todas las personas.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member) => (
                <div
                  key={member.name}
                  className="bg-secondary/30 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-primary/20 shadow-md mx-auto mb-4">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover scale-110 ${member.imagePosition || ''}`}
                    />
                  </div>
                  <h4 className="font-serif text-lg text-foreground font-semibold">{member.name}</h4>
                  <p className="text-sm text-primary font-medium">{member.role}</p>
                  {member.colegiado && (
                    <p className="text-xs text-muted-foreground mt-1">Col. {member.colegiado}</p>
                  )}
                  <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Quote */}
          <div className="mt-12 text-center py-8 border-t border-border">
            <h4 className="font-serif text-xl text-foreground mb-2">Nuestra clínica en Huelva, tu espacio de confianza</h4>
            <p className="text-muted-foreground">
              Un espacio diseñado para tu tranquilidad y bienestar.
            </p>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};
