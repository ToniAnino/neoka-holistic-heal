import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";
import listServices from "./tools/list-services";
import getContactInfo from "./tools/get-contact-info";

export default defineMcp({
  name: "neoka-mcp",
  title: "Neoka - Centro de Salud Integral",
  version: "0.1.0",
  instructions:
    "Herramientas públicas de Neoka (Huelva): consulta de artículos del blog, servicios ofrecidos e información de contacto oficial del centro.",
  tools: [listBlogPosts, getBlogPost, listServices, getContactInfo],
});
