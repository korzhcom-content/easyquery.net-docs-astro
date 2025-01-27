/*
* Add section name from __section.md
* */

import { globSync } from 'glob';
import {readFileSync, rmSync, unlinkSync} from 'fs';
import {copySync} from 'fs-extra/esm'
import {dirname, sep} from 'path';

const pattern = '../src/content/docs/api-reference/**/__section.md'

let files = globSync(pattern)
while (files.length) {
    const file = files.shift()
    const content = readFileSync(file, 'utf-8').trim().split('\n')
    const title = content[0].replace('#', '').trim()
    const oldDirName = dirname(file).split(sep); 
    const newDirName = [...oldDirName]; 
    
    newDirName.pop();
    newDirName.push(title);

    const _old = oldDirName.join(sep)
    const _new = newDirName.join(sep)

    if (title === "API reference") {
        unlinkSync(file)
        continue
    }

    unlinkSync(file)
    copySync(_old, _new)
    rmSync(_old, { recursive: true, force: true })
    files = globSync(pattern)
    console.log(`Processing directory: ${_old}`)
    // break
}
