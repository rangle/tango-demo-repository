import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

const cwd = path.dirname(fileURLToPath(import.meta.url));

const readVectorFile = async (vectorFile) => {
  const vectorData = await fs.readFile(vectorFile, "utf8");
  return JSON.parse(vectorData);
};

const generateIconFromVectors = async (vectorData) => {
  vectorData.forEach(async (icon) => {
    const iconName = `${icon.name}_${icon.properties.Size}_${icon.properties['Icon type']}_color${icon.properties['Icon colour']}.svg`;
    const iconFile = path.join(cwd, 'svg', iconName)
    await fs
      .writeFile(iconFile, icon.source.replace('\n', '').replace('\'', ''))
      .then(() => console.log(`SVG ${iconName} created`))
      .catch((err) => console.error(err));
  });
}

(async function main() {
  const vectorFile = path.resolve(cwd, ".", "styles", "vector.json");
  const vectorData = await readVectorFile(vectorFile);
  console.log(vectorData);
  await generateIconFromVectors(vectorData);
})();
