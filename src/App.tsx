import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
//import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PsicologiaSanitaria from "./pages/PsicologiaSanitaria";
import TerapiaPareja from "./pages/TerapiaPareja";
import TerapiaTranspersonal from "./pages/TerapiaTranspersonal";
import Fisioterapia from "./pages/Fisioterapia";
import Podologia from "./pages/Podologia";
import NutricionDietetica from "./pages/NutricionDietetica";
const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    {/*<TooltipProvider>*/}
      <Toaster />
      <Sonner />
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/psicologia-sanitaria" element={<PsicologiaSanitaria />} />
          <Route path="/terapia-pareja" element={<TerapiaPareja />} />
          <Route path="/terapia-transpersonal" element={<TerapiaTranspersonal />} />
          <Route path="/fisioterapia" element={<Fisioterapia />} />
          <Route path="/podologia" element={<Podologia />} />
          <Route path="/nutricion-dietetica" element={<NutricionDietetica />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    {/*</TooltipProvider>*/}
  </QueryClientProvider>
);

export default App;
