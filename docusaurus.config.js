// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'Kōyō Finance',
	tagline: 'Documentation and Guides',
	url: 'https://docs.koyo.finance',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'warn',
	favicon: 'img/favicon.ico',
	i18n: {
		defaultLocale: 'en',
		locales: ['en']
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					routeBasePath: 'protocol/',
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/koyo-finance/docs/'
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/koyo-finance/docs/'
				},
				theme: {
					customCss: require.resolve('./src/css/custom.css'),
					customCss2: require.resolve('./src/css/colours.css')
				}
			})
		]
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Kōyō Finance Docs',
				logo: {
					alt: 'Kōyō Finance Logo',
					src: 'img/logo.svg'
				},
				items: [
					{ to: '/blog', label: 'Blog', position: 'right' },
					{
						href: 'https://github.com/facebook/docusaurus',
						label: 'GitHub',
						position: 'right'
					}
				]
			},
			footer: {
				// style: 'dark',
				links: []
			},
			colorMode: {
				// "light" | "dark"
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true
			},
			prism: {
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		})
};

module.exports = config;
