import type { TemplateModule } from "radius-toolkit";

export default {
  name: "my-custom-template",
  render: ({ layers, vectors }, options) => {
    const transformed = vectors?.map(({ name, properties, source }) => {
      return {
        name,
        properties: JSON.stringify(properties),
        source,
      };
    });
    return Buffer.from(`${JSON.stringify(transformed)}`);
  },
} satisfies TemplateModule;
