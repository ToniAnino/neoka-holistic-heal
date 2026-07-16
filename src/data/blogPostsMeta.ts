// Plain metadata for blog posts. No React, no image imports — safe to import
// from server-side / edge bundles (e.g. the MCP server function).
export interface BlogPostMeta {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  metaTitle: string;
  metaDescription: string;
}

export const blogPostsMeta: BlogPostMeta[] = [
  {
    slug: "romper-bucles-discusiones-pareja",
    title: "¿Por qué discutimos siempre por lo mismo? Cómo romper los bucles en la pareja",
    date: "16 jul 2026",
    readTime: "5 Min. de lectura",
    metaTitle: "¿Por qué discutimos siempre por lo mismo? Romper bucles en pareja | Terapia de Pareja Huelva",
    metaDescription:
      "Descubre por qué las parejas discuten siempre por los mismos temas y aprende, con ayuda profesional en Huelva, cómo romper los bucles emocionales que dañan la relación.",
  },
  {
    slug: "comunicacion-asertiva-pareja",
    title: "5 Claves para mejorar la comunicación asertiva en tu relación.",
    date: "15 abr 2026",
    readTime: "5 Min. de lectura",
    metaTitle: "5 Claves para la comunicación asertiva en pareja | Terapia de Pareja Huelva",
    metaDescription:
      "Descubre las 5 claves esenciales para mejorar la comunicación asertiva en tu relación de pareja. Escucha activa, validación emocional y más consejos profesionales.",
  },
  {
    slug: "el-amor-se-ha-perdido",
    title: "El amor se ha perdido.",
    date: "8 may 2024",
    readTime: "4 Min. de lectura",
    metaTitle: "El amor se ha perdido | Reflexiones de Terapia de Pareja - Neoka Huelva",
    metaDescription:
      "Reflexión profesional sobre cómo se transforma el amor con el tiempo y cuándo acudir a terapia de pareja en Huelva.",
  },
  {
    slug: "mirar-hacia-otro-lado",
    title: "Mirar hacia otro lado",
    date: "1 may 2024",
    readTime: "4 Min. de lectura",
    metaTitle: "Mirar hacia otro lado | Blog de Psicología - Neoka Huelva",
    metaDescription:
      "Artículo sobre el mecanismo de evitación emocional y cómo la psicoterapia ayuda a afrontar aquello que evitamos.",
  },
  {
    slug: "la-importancia-del-compromiso",
    title: "La importancia del compromiso.",
    date: "11 oct 2023",
    readTime: "4 Min. de lectura",
    metaTitle: "La importancia del compromiso en pareja | Neoka Huelva",
    metaDescription:
      "Por qué el compromiso es un pilar de la relación de pareja y cómo trabajarlo desde la terapia.",
  },
  {
    slug: "perderse-encontrarse-catarsis",
    title: "Perderse - Encontrarse = Catarsis.",
    date: "8 jun 2023",
    readTime: "4 Min. de lectura",
    metaTitle: "Perderse y encontrarse: la catarsis emocional | Neoka Huelva",
    metaDescription:
      "Reflexión sobre la catarsis emocional en los procesos de autoconocimiento y terapia.",
  },
  {
    slug: "idolos-del-circo",
    title: "Ídolos del circo.",
    date: "20 sept 2020",
    readTime: "4 Min. de lectura",
    metaTitle: "Ídolos del circo | Blog de Psicología - Neoka Huelva",
    metaDescription: "Artículo del blog de Neoka sobre modelos y referentes sociales.",
  },
  {
    slug: "bendito-2020",
    title: "Bendito 2020.",
    date: "11 dic 2020",
    readTime: "4 Min. de lectura",
    metaTitle: "Bendito 2020 | Blog de Psicología - Neoka Huelva",
    metaDescription: "Reflexión sobre el año 2020 y sus aprendizajes emocionales.",
  },
];
