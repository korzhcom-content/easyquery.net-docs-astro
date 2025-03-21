// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import { rehypeLinks } from './plugins/rehype-links';
import { updateFrontmatter } from './plugins/update-frontmatter';
import getSidebar from "./tools/generate-sidebar.js"

const base = ''; // 'easyquery/docs';
const site = 'https://korzh.com';

// https://astro.build/config
export default defineConfig({
	site,
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
				{ label: "Introduction", slug: "easyquery/docs/introduction" },
				{ label: "End-user's guide", slug: "easyquery/docs/end-user-guide" },
				...getSidebar("./src/content/docs/easyquery/docs/getting-started", true),
				...getSidebar("./src/content/docs/easyquery/docs/fundamentals", true),
				...getSidebar("./src/content/docs/easyquery/docs/tutorials", true),
				...getSidebar("./src/content/docs/easyquery/docs/how-to", true),
				...getSidebar("./src/content/docs/easyquery/docs/data-model-editor", true),
				...getSidebar("./src/content/docs/easyquery/docs/release-notes/", true),
				...getSidebar("./src/content/docs/easyquery/docs/api-reference/", true),
				...getSidebar("./src/content/docs/easyquery/docs/api-reference-4x/", true),
				...getSidebar("./src/content/docs/easyquery/docs/api-reference-5x/", true),
			],
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/Footer.astro',
				SocialIcons: './src/components/SocialIcons.astro',
				Sidebar: './src/components/Sidebar.astro',
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
		//rehypePlugins: [[rehypeLinks, {base}]],
		remarkPlugins: [updateFrontmatter]
	}
});
