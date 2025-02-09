import type { Config } from 'tailwindcss';

export default {
	darkMode: 'class',
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				mono: ['var(--font-geist-mono)'],
				merry: ['var(--font-merriweather)'],
			},
			colors: {
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
				accent: 'rgb(var(--accent))',
			},
		},
	},
	plugins: [],
} satisfies Config;
