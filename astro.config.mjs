// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightThemeRapide from 'starlight-theme-rapide'
import starlightLinksValidator from 'starlight-links-validator'
import { rehypeLinks } from './plugins/rehype-links';
import { updateFrontmatter } from './plugins/update-frontmatter';
import sidebar from "./sidebar.mjs"

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
				...sidebar,
				{
					label: 'API Reference',
					collapsed: true,
					autogenerate: { directory: 'api-reference' },
				},
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
				// starlightLinksValidator({
				// 	errorOnRelativeLinks: false,
				// 	exclude: ["/api-reference/"],
				// }),
			],
		}),
	],
	markdown: {
		rehypePlugins: [[rehypeLinks, {base}]],
		remarkPlugins: [updateFrontmatter]
	}
});
