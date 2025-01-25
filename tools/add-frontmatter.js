/*
* Add fromtmatter to all markdown files in the api-reference folder
* */

import { globSync } from 'glob';
import fs from 'fs';

const files = globSync('../src/content/docs/api-reference/**/*.{md,mdx}')

console.log(`Found ${files.length} files`)

for (const file of files) {
    console.log(`Processing ${file}...`)
    const content = fs.readFileSync(file, 'utf-8').trim()
    if (content.startsWith('---')) {
        continue
    }
    const frontmatter = `
---
title: ${content.split('\n')[0].replace('#', '').trim()}
slug: ${file.replaceAll('..\\src\\content\\docs\\', '').replace('.md', '').replaceAll('\\', '/')}
---\n\n`.trim()
    
    fs.writeFileSync(file, frontmatter + content.replaceAll('](', '](/').split('\n').slice(1).join('\n'))
}