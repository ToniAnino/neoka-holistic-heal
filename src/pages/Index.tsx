/**
 * Home Page - Versión optimizada para SEO v1.2
 * Incluye metadatos, estructura semántica, JSON-LD y contenido optimizado para buscadores.
 */
import { Helmet } from "react-helmet-async";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { AboutSection } from "@/components/AboutSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { BlogSection } from "@/components/BlogSection";
import { ClientsSection } from "@/components/ClientsSection";
import { MapSection } from "@/components/MapSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  "name": "Neoka - Centro de Psicología y Salud Integral",
  "description": "Clínica de psicología y terapia de pareja en Huelva. Psicología sanitaria, terapia transpersonal, fisioterapia, podología y nutrición.",
  "url": "https://centroneoka.es",
  "telephone": "+34617642564",
  "email": "webneoka@gmail.com",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Calle La Palma, 4, Local derecha",
    "addressLocality": "Huelva",
    "postalCode": "21001",
    "addressRegion": "Andalucía",
    "addressCountry": "ES"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 37.258889,
    "longitude": -6.951231
  },
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "medicalSpecialty": [
    "Psicología Sanitaria",
    "Terapia de Pareja",
    "Terapia Transpersonal",
    "Fisioterapia",
    "Podología",
    "Nutrición y Dietética"
  ],
  "sameAs": [
    "https://www.facebook.com/neokapsicologia/",
    "https://www.instagram.com/neokaoficial/",
    "https://twitter.com/neokaterapia",
    "https://www.youtube.com/channel/UCBrhtnUQXf86RAxp4-Hlo2g"
  ]
};

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Clínica de Psicología y Terapia de Pareja en Huelva | Neoka</title>
        <meta name="description" content="Clínica de psicología y terapia de pareja en Huelva. Bienestar emocional, salud mental y atención integral con un equipo multidisciplinar. Reserva tu cita." />
        <link rel="canonical" href="https://centroneoka.es" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Clínica de Psicología y Terapia de Pareja en Huelva | Neoka" />
        <meta property="og:description" content="Clínica de psicología y terapia de pareja en Huelva. Bienestar emocional, salud mental y atención integral. Reserva tu cita." />
        <meta property="og:url" content="https://centroneoka.es" />
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <TestimonialsSection />
      <BlogSection />
      <ClientsSection />
      <MapSection />
      <ContactSection />
      <Footer />
    </main>
  );
};

export default Index;
