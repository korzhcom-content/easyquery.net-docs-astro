/*
* Add fromtmatter to all markdown files in the api-reference folder
* */

import { globSync } from 'glob';
import {readFileSync, writeFileSync, renameSync} from 'fs';
import {basename, dirname, sep} from 'path';

console.log(`Add FrontMatter`)

let files = globSync('../src/content/docs/api-reference/**/*.{md,mdx}')

for (const file of files) {
    const name = basename(file)
    if (name.startsWith('__')) {
        // skip a file
        continue
    }
    
    const content = readFileSync(file, 'utf-8').trim().split('\n')
    if (content[0].startsWith('---')) {
        continue
    }
    const slug = file.replaceAll('..\\src\\content\\docs\\', '').replace('.md', '').replaceAll('\\', '/')
    const title = content[0].replace('#', '').trim()
    const frontmatter = `---
title: ${title}
slug: ${slug}
---\n\n`
    
    writeFileSync(file, frontmatter + content.slice(1).join('\n').replaceAll('](', '](/'))
}
