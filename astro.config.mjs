// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import { rehypeLinks } from './plugins/rehype-links';
import { updateFrontmatter } from './plugins/update-frontmatter';
import getSidebar from "./tools/generate-sidebar.js"

const base = 'easyquery/docs';

// https://astro.build/config
export default defineConfig({
	base,
	trailingSlash: "never",
	integrations: [
		starlight({
			title: 'EasyQuery.NET',
			favicon: '/favicon.ico',
			social: {
				github: 'https://github.com/korzhcom-content/easyquery.net-docs-astro',
				discord: 'https://discord.gg',
			},
			sidebar: [
				{label: "Introduction", slug: "introduction"},
				{label: "End-user's guide", slug: "end-user-guide"},
				...getSidebar("./src/content/docs/getting-started", true),
				...getSidebar("./src/content/docs/fundamentals", true),
				...getSidebar("./src/content/docs/tutorials", true),
				...getSidebar("./src/content/docs/how-to", true),
				...getSidebar("./src/content/docs/data-model-editor", true),
				...getSidebar("./src/content/docs/release-notes/", true),
				...getSidebar("./src/content/docs/api-reference/", true),
				...getSidebar("./src/content/docs/api-reference-4x/", true),
				...getSidebar("./src/content/docs/api-reference-5x/", true),
			],
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			lastUpdated: true,
			plugins: [
				starlightThemeRapide(),
			],
			tableOfContents: {
				minHeadingLevel: 2, 
				maxHeadingLevel: 4,
			},
			credits: false,
		}),
	],
	markdown: {
		rehypePlugins: [[rehypeLinks, {base}]],
		remarkPlugins: [updateFrontmatter]
	}
});
