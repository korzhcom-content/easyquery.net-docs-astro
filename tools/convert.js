import addFrontmatter from "./add-frontmatter.js";
import addSection from "./add-section.js";

const args = process.argv.slice(2);
const path = args[0];

console.log(`Processing ${path}`)

addSection(path);
addFrontmatter(path);

console.log(`Done`);