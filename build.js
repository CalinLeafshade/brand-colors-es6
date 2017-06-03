const fs = require("fs");
const brandColors = require("brand-colors");
const fixStart = name => (name.match(/^\d/) ? "_" + name : name);
const fixName = name => name.replace(/\W/g, "_");
const template = (name, color) => `export const ${name} = "${color}";`;

let text = brandColors
  .getAll()
  .map(x => template(fixName(fixStart(x.name)), x.color))
  .join("\n");

fs.writeFileSync("index.js", text);

console.log("Written to index.js");
