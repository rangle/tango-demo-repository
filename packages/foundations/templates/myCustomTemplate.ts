import type { TemplateModule } from "radius-toolkit";

export default {
  name: "my-custom-template",
  render: ({ layers, vectors }, options) => {
    console.log("data", JSON.stringify(layers, null, 2));
    const transformed = vectors?.map(({ name, properties, source }) => {
      return {
        name,
        properties,
        source,
      };
    });
    return Buffer.from(`${JSON.stringify(transformed)}`);
  },
} satisfies TemplateModule;
