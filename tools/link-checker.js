import { Activity, clearConsole, cursor } from "@olton/progress"
import fs from 'fs'
import * as rl from 'node:readline'
import chalk from 'chalk'

clearConsole()

if (process.argv.length < 3) {
    console.error("Usage: node link-checker.js <host> <required-path>");
    process.exit(1);
}

const args = process.argv.slice(2);
const [ host, path = '' ] = args;
const bad_links = []
const processed_links = []
let total_links = 0
const startTime = Date.now()

console.log(`Links checker v1.0 by Serhii Pimenov. 💙💛 `)
console.log(`┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
console.log(`Check links on: ${host}`)
console.log(`Using path    : ${path ? path : 'all'}`)
console.log(`┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)

const activity = new Activity({
    color: 'yellowBright',
    messageColor: 'cyan',
    type: 'dots',
    spaceBefore: 1,
    spaceAfter: 0,
    cursor: false,
})

await activity.init()

let startLineForBadLinks = Number(activity.position.y) + 2

process.stdout.write(`\n\r${chalk.gray("Total links checked:")} ${total_links}`)
process.stdout.write(`\n\r${chalk.gray("Bad links found    :")} ${bad_links.length}`)

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


        rl.cursorTo(process.stdout,0, startLineForBadLinks - 2)
        process.stdout.write(`\n\r${chalk.gray("Total links checked:")} ${total_links}`)
        
        processed_links.push(fullUrl)

        activity.process(`${chalk.white("Checking:")} ${fullUrl}...`)

        try {
            const response = await fetch(fullUrl)
            if (response.status === 404) {
                bad_links.push(fullUrl)
                rl.cursorTo(process.stdout,0, startLineForBadLinks - 1)
                process.stdout.write(`\n\r${chalk.gray("Bad links found    :")} ${bad_links.length}`)
            } else {
                await run(fullUrl)
            }
        } catch (error) {
            console.error(`Error fetching ${fullUrl}:`, error)
        }
    }
}


await run(host)

activity.process(`${chalk.white("Checking completed!")}`)

cursor(true)

if (bad_links.length) {
    fs.writeFileSync('bad_links.txt', bad_links.join('\n'), 'utf-8')
}

rl.cursorTo(process.stdout,0, startLineForBadLinks)

process.stdout.write(`\r\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
if (bad_links.length) {
    process.stdout.write(`\r\n${chalk.gray("Bad links saved to")} bad_links.txt`)
    process.stdout.write(`\r\n┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄`)
}

process.stdout.write(`\r\n${chalk.gray("Process completed in")} ${((Date.now() - startTime) / 1000).toFixed(4)}s`)
process.stdout.write(`\r\nBye!\n\n`)

process.exit(bad_links.length ? 1 : 0)