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
					editUrl: 'https://github.com/koyo-finance/docs/blob/main/'
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/koyo-finance/docs/blob/main/'
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
					src: 'img/logo.svg',
					srcDark: 'img/logo.svg'
				},
				items: [
					{
						to: '/protocol/introduction',
						label: 'V1',
						position: 'left',
						className: 'persistent'
					},
					{
						href: 'https://docs.koyo.finance/github',
						label: 'GitHub',
						position: 'right',
						className: 'persistent'
					}
				]
			},
			footer: {
				// style: 'dark',
				links: [
					{
						title: 'Developers',
						items: [
							{
								label: '#dev-chat',
								href: 'https://docs.koyo.finance/discord'
							}
						]
					},
					{
						title: 'Ecosystem',
						items: [
							{
								label: 'Home',
								href: 'https://koyo.finance/'
							},
							{
								label: 'Swap',
								href: 'https://koyo.finance/swap'
							},
							{
								label: 'Analytics',
								href: 'https://info.koyo.finance'
							}
						]
					},
					{
						title: 'Community',
						items: [
							{
								label: 'Snapshot',
								href: 'https://docs.koyo.finance/snapshot'
							},
							{
								label: 'Discord',
								href: 'https://docs.koyo.finance/discord'
							},
							{
								label: 'Twitter',
								href: 'https://docs.koyo.finance/twitter'
							}
						]
					}
				]
			},
			colorMode: {
				// "light" | "dark"
				defaultMode: 'dark',
				disableSwitch: false,
				respectPrefersColorScheme: true
			},
			prism: {
				additionalLanguages: ['solidity', 'python'],
				theme: lightCodeTheme,
				darkTheme: darkCodeTheme
			}
		}),

	scripts: [{ src: 'https://plausible.io/js/script.js', defer: true, 'data-domain': 'docs.koyo.finance' }]
};

module.exports = config;
