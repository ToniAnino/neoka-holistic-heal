import { defineTool } from "@lovable.dev/mcp-js";

export default defineTool({
  name: "get_contact_info",
  title: "Información de contacto",
  description:
    "Devuelve el nombre, dirección, teléfono, WhatsApp, web y número de registro sanitario (NICA) de Neoka.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const data = {
      name: "Neoka - Centro de Psicología, Terapia de Pareja y Coaching",
      address: "C. la Palma, 4, Local derecha, 21002 Huelva",
      phone: "+34 617 64 25 64",
      whatsapp: "https://wa.me/34617642564",
      website: "https://www.centroneoka.es",
      googleMaps: "https://www.google.com/maps/search/?api=1&query=Neoka+Centro+de+Psicolog%C3%ADa+Huelva",
      nica: "60441",
    };
    return {
      content: [{ type: "text", text: JSON.stringify(data, null, 2) }],
      structuredContent: data,
    };
  },
});
