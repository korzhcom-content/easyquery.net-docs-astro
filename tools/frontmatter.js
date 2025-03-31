/*
* Add frontmatter to all Markdown files in the folder
* */

import { globSync } from 'glob';
import { readFileSync, writeFileSync, renameSync } from 'fs';
import { basename, dirname, sep } from 'path';
import matter from 'gray-matter';
import { Progress } from "@olton/progress"

const isEmpty = (obj) => {
    return Object.keys(obj).length === 0 && obj.constructor === Object;
}

export default function frontmatter(path = "./src/content/docs", options = {}) {
    const { skip = [], skipUnderLineFiles = true, template = '' } = options
    let files = globSync(`${path}/**/*.{md,mdx}`)

    console.log(`\nAdding frontmatter...\n`)
    const progressBar = new Progress({
        total: files.length,
    })
    
    for (const file of files) {
        progressBar.process()
        
        const name = basename(file)
        let slug = '', title = name.replace('.md', '').replace('.mdx', '')

        if (skipUnderLineFiles && name.startsWith('_') || skip.includes(name)) {
            // skip a file
            continue
        }

        let fileContent = readFileSync(file, 'utf-8').trim()
        const parsed = matter(fileContent)
        const frontMatterPresent = isEmpty(parsed.data) === false

        if (frontMatterPresent) {
            fileContent.replace(/---(.*?)---/gs, '')
        }
        
        const lines = fileContent.split('\n')
        
        if (lines[0].startsWith('# ')) {
            title = lines[0]
              .replace('# ', '')
              .replace(":", '')
            lines.shift()
        }

        slug = file.replace('src\\content\\docs\\', '').replace('.md', '').replaceAll('\\', '/')

        const frontmatter = template
          .replace('{title}', title)
          .replace('{slug}', slug)

        const newContent = (frontmatter + lines.join('\n'))
            .replaceAll('](', '](/')
            .replaceAll('/http', 'http')
            .replaceAll('https://korzh.com/easyquery/docs', '')
        
        writeFileSync(file, newContent)
    }

    console.log(`\n\nDone! ${files.length} files processed.\n`)
}

