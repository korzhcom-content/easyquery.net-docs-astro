import frontmatter from './frontmatter.js'
import { clearConsole } from './console.js'

if (process.argv.length < 3) {
    console.error("Usage: node add-frontmatter.js <folder path>");
    process.exit(1);
}

const args = process.argv.slice(2);
const root = args[0];
const skip = ["index.mdx"];

const frontmatter_template = `---
title: {title}
slug: {slug}
---\n`

clearConsole()

frontmatter(root, {
    skipUnderLineFiles: true,
    skip,
    template: frontmatter_template
})
