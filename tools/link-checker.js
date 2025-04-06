import { Activity } from "@olton/progress"
import { term, Cursor, Screen } from "@olton/terminal"
import fs from 'fs'
import * as rl from 'node:readline'
// import chalk from 'chalk'

Screen.clear()

if (process.argv.length < 3) {
    console.error(`Usage: ${term("node", {colors: 'whiteBright'})} ${term("link-checker.js", {color: 'cyan'})} <host> <required-path>`);
    process.exit(1);
}

const args = process.argv.slice(2);
const [ host, path = '' ] = args;
const bad_links = []
const processed_links = []
let total_links = 0
const startTime = Date.now()

console.log(term(`Links checker v1.0 by Serhii Pimenov.`, {gradient: '#00c6ff, #Ff00fF'}) + ` 💙💛 `);
console.log(`┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
console.log(`Check links on: ${term(host, {color: 'cyanBright'})}`)
console.log(`Using path    : ${term(path ? path : 'all', {color: 'cyanBright'})}`)
console.log(`┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)

const activity = new Activity({
    color: 'yellowBright',
    messageColor: 'cyan',
    type: 'dots',
    spaceBefore: 2,
    spaceAfter: 0,
    cursor: false,
})

await activity.init()

let startLineForBadLinks = Number(activity.position.y) + 2

process.stdout.write(`\n\r${term("Total links checked:", {color: 'gray'})} ${term(total_links, {color: 'yellowBright'})}`)
process.stdout.write(`\n\r${term("Bad links found    :", {color: 'gray'})} ${term(bad_links.length, {color: 'yellowBright'})}`)

async function run(host){
    const page = await fetch(host).then(res => res.text())
    
    const linkRegex = /href="([^"]*)"/g
    const links = []
    let match

// Extract all links from the page
    while ((match = linkRegex.exec(page)) !== null) {
        const link = match[1]
        if (
            !link.startsWith('http') 
            && !link.startsWith("/node_modules/") 
            && !link.includes('#') 
            && !link.endsWith('.xml') 
            && !link.endsWith('.ico') 
            && link !== host
            && link !== path
        ) {
            links.push(match[1])
        }
    }

    for (const link of links) {
        const fullUrl = new URL(link, host).href
        
        if (processed_links.includes(fullUrl)) {
            continue
        }

        total_links++


        Cursor.to(0, startLineForBadLinks - 2)
        process.stdout.write(`\n\r${term("Total links checked:", {color: 'gray'})} ${term(total_links, {color: 'yellowBright'})}`)
        
        processed_links.push(fullUrl)

        activity.process(`${term("Checking:", {color: 'white'})} ${term(fullUrl, {color: 'cyan'})}...`)

        try {
            const response = await fetch(fullUrl)
            if (response.status === 404) {
                bad_links.push(fullUrl)
                Cursor.to(0, startLineForBadLinks - 1)
                process.stdout.write(`\n\r${term("Bad links found    :", {color: 'gray'})} ${term(bad_links.length, {color: 'yellowBright'})}`)
            } else {
                await run(fullUrl)
            }
        } catch (error) {
            console.error(`Error fetching ${fullUrl}:`, error)
        }
    }
}


await run(host)

activity.process(`${term("Checking completed!", {color: 'white'})}`)

Cursor.show()

if (bad_links.length) {
    fs.writeFileSync('bad_links.txt', bad_links.join('\n'), 'utf-8')
}

Cursor.to(0, startLineForBadLinks + 1)

process.stdout.write(`\r\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
if (bad_links.length) {
    process.stdout.write(`\r\n${term("Bad links saved to", {color: 'gray'})} ${term("bad_links.txt", {color: 'redBright'})}`)
    process.stdout.write(`\r\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
}

process.stdout.write(`\r\n${term("Process completed in", {color: 'gray'})} ${((Date.now() - startTime) / 1000).toFixed(4)}s`)
process.stdout.write(`\r\nBye!\n\n`)

process.exit(bad_links.length ? 1 : 0)