// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import sidebar from "./sidebar.mjs"

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'EasyQuery.NET',
			favicon: '/favicon.ico',
			social: {
				github: 'https://github.com/korzhcom-content/easyquery.net-docs-astro',
				discord: 'https://discord.gg',
			},
			sidebar,
			customCss: [
				'./src/styles/index.css',
			],
			components: {
				Footer: './src/components/ConditionalFooter.astro',
			},
			lastUpdated: true,
		}),
	],
});
