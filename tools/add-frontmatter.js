/*
* Add frontmatter to all Markdown files in the folder
* */

import { globSync } from 'glob';
import { readFileSync, writeFileSync, renameSync } from 'fs';
import { basename, dirname, sep } from 'path';

export default function addFrontmatter(path) {
    let files = globSync(`${path}/**/*.{md,mdx}`)

    for (const file of files) {
        const name = basename(file)
        console.log(name)
        if (name.startsWith('_')) {
            // skip a file
            continue
        }
        const content = readFileSync(file, 'utf-8').trim().split('\n')
        if (content[0].startsWith('---')) {

            const slug = file.replace('src\\content\\docs\\', '').replace('.md', '').replaceAll('\\', '/')

            //replace slug
            let slugIndex = content.findIndex(line => line.startsWith('slug:'));
            const slugLine = `slug: ${slug}`;
            if (slugIndex == -1) {
                slugIndex = 2;
            }
            else {
                content.splice(slugIndex, 1);
            }

            if (name.startsWith('index.md')) {
                // skip a file
                continue
            }

            content.splice(slugIndex, 0, slugLine);

            writeFileSync(file, content.join('\n'));

            continue
        }
        const frontmatter = `---
title: ${title}
slug: ${slug}
---\n\n`

        // New content and fix links        
        let new_content = content.slice(1).join('\n')
            .replaceAll('](', '](/')
            .replaceAll('/http', 'http')
            .replaceAll('https://korzh.com/easyquery/docs', '')

        writeFileSync(file, frontmatter + new_content)
    }
}

