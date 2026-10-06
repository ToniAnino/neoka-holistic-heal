import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider, HelmetServerState } from "react-helmet-async";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppRoutes } from "./App";
import { blogPostsMeta } from "./data/blogPostsMeta";

export const routes = [
  "/", "/quienes-somos", "/psicologia-sanitaria", "/terapia-pareja",
  "/terapia-transpersonal", "/fisioterapia", "/podologia", "/nutricion-dietetica",
  "/blog", ...blogPostsMeta.map((p) => `/blog/${p.slug}`),
];

export function render(url: string) {
  const helmetContext: { helmet?: HelmetServerState } = {};
  const html = renderToString(
    <QueryClientProvider client={new QueryClient()}>
      <HelmetProvider context={helmetContext}>
        <StaticRouter location={url}>
          <AppRoutes />
        </StaticRouter>
      </HelmetProvider>
    </QueryClientProvider>
  );
  const h = helmetContext.helmet;
  const head = h
    ? [h.title, h.meta, h.link, h.script].map((x) => x.toString()).join("\n")
    : "";
  return { html, head };
}
