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
				{label: "Introduction", slug: "introduction"},
				{
					label: 'Getting Started',
					collapsed: false,
					autogenerate: { directory: 'getting-started' },
				},
				{
					label: 'Fundamentals',
					collapsed: true,
					autogenerate: { directory: 'fundamentals' },
				},
				{
					label: 'Tutorials',
					collapsed: true,
					autogenerate: { directory: 'tutorials' },
				},
				{
					label: 'How To',
					collapsed: true,
					autogenerate: { directory: 'how-to' },
				},
				{
					label: 'Data Model Editor',
					collapsed: true,
					autogenerate: { directory: 'data-model-editor' },
				},
				{
					label: 'Release Notes',
					collapsed: true,
					autogenerate: { directory: 'release-notes' },
				},
				{
					label: 'API Reference',
					collapsed: true,
					autogenerate: { directory: 'api-reference' },
				},
				{
					label: 'API Reference (previous versions)',
					collapsed: true,
					autogenerate: { directory: 'api-reference-previous-versions' },
				},
				{label: "End User's Guide", slug: "end-user-guide"},
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
