import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPostsMeta } from "@/data/blogPostsMeta";

export default defineTool({
  name: "get_blog_post",
  title: "Obtener artículo del blog",
  description:
    "Devuelve los metadatos y la URL pública de un artículo del blog de Neoka por su slug.",
  inputSchema: {
    slug: z.string().min(1).describe("Slug del artículo, p. ej. 'comunicacion-asertiva-pareja'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const post = blogPostsMeta.find((p) => p.slug === slug);
    if (!post) {
      return {
        content: [{ type: "text", text: `No se encontró ningún artículo con slug "${slug}".` }],
        isError: true,
      };
    }
    const data = {
      slug: post.slug,
      title: post.title,
      date: post.date,
      readTime: post.readTime,
      metaTitle: post.metaTitle,
      metaDescription: post.metaDescription,
      url: `https://www.centroneoka.es/blog/${post.slug}`,
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
