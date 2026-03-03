import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 animate-fade-up">
      <div className="container max-w-4xl">
        <div className="bg-card border border-border rounded-2xl shadow-lg p-5 md:p-6 flex flex-col md:flex-row items-start md:items-center gap-4">
          <Cookie className="w-6 h-6 text-primary flex-shrink-0 mt-0.5 md:mt-0" />
          <p className="text-sm text-muted-foreground flex-1">
            Utilizamos cookies para mejorar tu experiencia en nuestra web.
            Puedes consultar nuestra{" "}
            <Link to="/cookies" className="text-primary underline hover:text-primary/80">
              Política de Cookies
            </Link>{" "}
            para más información.
          </p>
          <div className="flex gap-3 flex-shrink-0">
            <Button variant="outline" size="sm" onClick={handleReject}>
              Rechazar
            </Button>
            <Button size="sm" onClick={handleAccept}>
              Aceptar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
