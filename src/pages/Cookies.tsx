import { LegalPageLayout } from "@/components/LegalPageLayout";

const Cookies = () => (
  <LegalPageLayout title="Política de Cookies – Centro Neoka">
    <p>Este sitio web utiliza cookies para mejorar la navegación del usuario.</p>

    <h2>1. ¿Qué son las cookies?</h2>
    <p>
      Son pequeños archivos que se almacenan en su navegador para que el servidor
      recuerde cierta información.
    </p>

    <h2>2. Cookies utilizadas en esta web</h2>
    <ul>
      <li>
        <strong>Técnicas:</strong> Necesarias para el correcto funcionamiento de la web.
      </li>
      <li>
        <strong>Analíticas:</strong> (Si usas Google Analytics o similar) Permiten
        cuantificar el número de usuarios y realizar la medición y análisis estadístico
        de la utilización que hacen los usuarios del servicio.
      </li>
    </ul>

    <h2>3. Desactivación</h2>
    <p>
      El usuario podrá en cualquier momento elegir qué cookies quiere que funcionen en
      este sitio web mediante la configuración de su navegador.
    </p>
  </LegalPageLayout>
);

export default Cookies;
