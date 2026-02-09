import { MapPin, Phone, Clock } from "lucide-react";

export const MapSection = () => {
  return (
    <section id="ubicacion" className="py-16 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Encuéntranos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dónde encontrarnos en Huelva
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Centro de psicología y salud integral en el corazón de Huelva, fácilmente accesible
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Dirección</h3>
                  <p className="text-muted-foreground text-sm">
                    C. la Palma, 4, Local derecha<br />
                    21002 Huelva
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Teléfono y WhatsApp</h3>
                  <p className="text-muted-foreground text-sm">
                    +34 617 64 25 64
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-card p-6 rounded-2xl shadow-sm border border-border">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-xl">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Horario</h3>
                  <p className="text-muted-foreground text-sm">
                    Lunes - Viernes: 9:00 - 21:00<br />
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3185.6583947661!2d-6.951231!3d37.258889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd11c52c8a4d3c3d%3A0x0!2sC.%20la%20Palma%2C%204%2C%2021002%20Huelva!5e0!3m2!1ses!2ses!4v1699999999999!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Neoka en Huelva"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
