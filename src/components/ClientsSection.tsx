import client1 from "@/assets/client-1.jpg";
import clientCanalcosta from "@/assets/client-canalcosta.png";
import clientEconomiaSocial from "@/assets/client-economia-social.png";
import clientHi from "@/assets/client-hi.png";
import clientTwitter from "@/assets/client-twitter.jpg";
import clientMancomunidad from "@/assets/client-mancomunidad.jpg";
import clientSporting from "@/assets/client-sporting.jpg";

const clients = [
  { name: "Cliente 1", logo: client1 },
  { name: "Canal Costa", logo: clientCanalcosta },
  { name: "Economía Social", logo: clientEconomiaSocial },
  { name: "Hi", logo: clientHi },
  { name: "Cliente Twitter", logo: clientTwitter },
  { name: "Mancomunidad", logo: clientMancomunidad },
  { name: "Sporting", logo: clientSporting },
];

export const ClientsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Colaboradores
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Hemos trabajado con:
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Empresas y organizaciones que han confiado en nosotros
          </p>
        </div>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {clients.map((client) => (
            <div
              key={client.name}
              className="group flex items-center justify-center p-4 bg-card rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="h-16 md:h-20 w-auto object-contain transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
