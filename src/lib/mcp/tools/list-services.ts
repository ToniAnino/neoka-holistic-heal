import { defineTool } from "@lovable.dev/mcp-js";

const services = [
  { name: "Psicología Sanitaria", path: "/psicologia-sanitaria" },
  { name: "Terapia de Pareja", path: "/terapia-pareja" },
  { name: "Terapia Transpersonal", path: "/terapia-transpersonal" },
  { name: "Fisioterapia", path: "/fisioterapia" },
  { name: "Podología", path: "/podologia" },
  { name: "Nutrición y Dietética", path: "/nutricion-dietetica" },
];

export default defineTool({
  name: "list_services",
  title: "Listar servicios",
  description:
    "Devuelve los servicios ofrecidos por Neoka - Centro de Psicología, Terapia de Pareja y Coaching en Huelva.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = services.map((s) => ({
      ...s,
      url: `https://www.centroneoka.es${s.path}`,
    }));
    return {
      content: [{ type: "text", text: JSON.stringify(items, null, 2) }],
      structuredContent: { items },
    };
  },
});
