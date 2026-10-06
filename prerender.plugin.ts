import type { Plugin, ResolvedConfig } from "vite";
import { build } from "vite";
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

/**
 * Tras el build de cliente, compila src/entry-server.tsx en modo SSR y genera
 * dist/<ruta>/index.html con el HTML y las etiquetas de Helmet ya resueltas.
 * Si algo falla, avisa y deja el build SPA intacto.
 */
export function prerenderPlugin(): Plugin {
  let config: ResolvedConfig;
  return {
    name: "neoka-prerender",
    apply: "build",
    configResolved(c) { config = c; },
    async closeBundle() {
      if (config.build.ssr || process.env.NEOKA_SSR_BUILD) return;
      const outDir = path.resolve(config.root, config.build.outDir);
      const ssrDir = path.resolve(config.root, "node_modules/.prerender");
      try {
        process.env.NEOKA_SSR_BUILD = "1";
        await build({
          configFile: path.resolve(config.root, "vite.config.ts"),
          mode: config.mode,
          logLevel: "warn",
          build: { ssr: "src/entry-server.tsx", outDir: ssrDir, emptyOutDir: true, copyPublicDir: false },
          ssr: { noExternal: true },
        });
        const file = fs.readdirSync(ssrDir).find((f) => f.startsWith("entry-server"))!;
        const mod = await import(pathToFileURL(path.join(ssrDir, file)).href + `?t=${Date.now()}`);
        const template = fs.readFileSync(path.join(outDir, "index.html"), "utf-8");
        for (const url of mod.routes as string[]) {
          const { html, head } = mod.render(url);
          const page = template
            .replace(/<title>[\s\S]*?<\/title>/, "")
            .replace("</head>", `${head}\n</head>`)
            .replace('<div id="root"></div>', `<div id="root">${html}</div>`);
          const dest = url === "/" ? path.join(outDir, "index.html") : path.join(outDir, url, "index.html");
          fs.mkdirSync(path.dirname(dest), { recursive: true });
          fs.writeFileSync(dest, page);
        }
        console.log(`[prerender] ${mod.routes.length} rutas generadas`);
      } catch (e) {
        console.warn("[prerender] omitido, se mantiene la SPA:", e);
      } finally {
        delete process.env.NEOKA_SSR_BUILD;
        fs.rmSync(ssrDir, { recursive: true, force: true });
      }
    },
  };
}
