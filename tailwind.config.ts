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
			animation: {
				fadeIn: 'fadeIn 1s ease-in-out',
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
			},
			screens: {
				'max-lg': { max: '1023px' },
			},
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
