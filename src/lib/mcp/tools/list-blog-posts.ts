import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { blogPosts } from "@/data/blogPosts";

export default defineTool({
  name: "list_blog_posts",
  title: "Listar artículos del blog",
  description:
    "Devuelve la lista de artículos publicados en el blog de Neoka (slug, título, fecha, tiempo de lectura y meta descripción).",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = blogPosts.map((p) => ({
      slug: p.slug,
      title: p.title,
      date: p.date,
      readTime: p.readTime,
      metaDescription: p.metaDescription,
      url: `https://www.centroneoka.es/blog/${p.slug}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
