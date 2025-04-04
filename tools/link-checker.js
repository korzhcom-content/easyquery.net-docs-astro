import { Progress, clearConsole } from "@olton/progress"

clearConsole()

if (process.argv.length < 3) {
    console.error("Usage: node link-checker.js <folder path>");
    process.exit(1);
}

const args = process.argv.slice(2);
const [ host, path = '' ] = args;
const bad_links = []
const processed_links = []

console.log(`Checking links on: ${host}`)
console.log(`Using path: ${path ? path : 'all'}`)

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

    // console.log(`Found ${links.length} links...`, links)
    // process.exit(0)

    for (const link of links) {
        const fullUrl = new URL(link, host).href
        if (processed_links.includes(fullUrl)) {
            continue
        }
        processed_links.push(fullUrl)
        process.stdout.write(`Checking link: ${fullUrl}...`)
        try {
            const response = await fetch(fullUrl)
            if (response.status === 404) {
                process.stdout.write(`Bad link\n`)
                bad_links.push(fullUrl)
            } else {
                process.stdout.write(`Ok\r`)
                process.stdout.clearLine(0)
                await run(fullUrl)
            }
        } catch (error) {
            console.error(`Error fetching ${fullUrl}:`, error)
        }
    }
}

await run(host)

if (bad_links.length) {
    console.log(`Bad links found:`, bad_links)
}