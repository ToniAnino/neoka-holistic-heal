import { Helmet, HelmetProps } from "react-helmet-async";

/**
 * Wrapper alrededor de react-helmet-async que fuerza defer={false} para que
 * los metadatos por ruta (title, description, canonical, og:*, JSON-LD) se
 * apliquen de forma síncrona y sean visibles para los rastreadores.
 */
export const Seo = (props: HelmetProps) => <Helmet defer={false} {...props} />;

export default Seo;
