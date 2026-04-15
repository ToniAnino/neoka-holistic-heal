import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ScrollToTop } from "./components/ScrollToTop";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PsicologiaSanitaria from "./pages/PsicologiaSanitaria";
import TerapiaPareja from "./pages/TerapiaPareja";
import TerapiaTranspersonal from "./pages/TerapiaTranspersonal";
import Fisioterapia from "./pages/Fisioterapia";
import Podologia from "./pages/Podologia";
import NutricionDietetica from "./pages/NutricionDietetica";
import QuienesSomos from "./pages/QuienesSomos";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import AvisoLegal from "./pages/AvisoLegal";
import Privacidad from "./pages/Privacidad";
import Cookies from "./pages/Cookies";
import Terminos from "./pages/Terminos";
import { CookieBanner } from "./components/CookieBanner";
import { FloatingWhatsApp } from "./components/FloatingWhatsApp";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quienes-somos" element={<QuienesSomos />} />
          <Route path="/psicologia-sanitaria" element={<PsicologiaSanitaria />} />
          <Route path="/terapia-pareja" element={<TerapiaPareja />} />
          <Route path="/terapia-transpersonal" element={<TerapiaTranspersonal />} />
          <Route path="/fisioterapia" element={<Fisioterapia />} />
          <Route path="/podologia" element={<Podologia />} />
          <Route path="/nutricion-dietetica" element={<NutricionDietetica />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/aviso-legal" element={<AvisoLegal />} />
          <Route path="/privacidad" element={<Privacidad />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terminos" element={<Terminos />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <CookieBanner />
        <FloatingWhatsApp />
      </BrowserRouter>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
