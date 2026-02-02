/**
 * Home Page - Versión optimizada para SEO v1.1
 * Incluye metadatos, estructura semántica y contenido optimizado para buscadores.
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

const Index = () => {
  return (
    <main className="min-h-screen">
      <Helmet>
        <title>Clínica de Psicología y Terapia de Pareja en Huelva | Neoka</title>
        <meta name="description" content="Clínica de psicología y terapia de pareja en Huelva. Bienestar emocional, salud mental y atención integral con un equipo multidisciplinar. Reserva tu cita." />
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
