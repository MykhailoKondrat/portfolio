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
				fadeIn: 'fadeIn 1s ease-in-out forwards',
				grow: 'grow 0.5s ease-in-out forwards',
				bounceGrow: 'bounce-grow 0.8s ease-in-out forwards',
			},
			animationDelay: {
				'0': '0s',
				'100': '100ms',
				'200': '200ms',
				'300': '300ms',
				'400': '400ms',
				'500': '500ms',
				'600': '600ms',
				'700': '700ms',
				'800': '800ms',
				'900': '900ms',
				'1000': '1s',
				'1100': '1.1s',
				'1200': '1.2s',
				'1300': '1.3s',
				'1400': '1.4s',
				'1500': '1.5s',
				'1600': '1.6s',
				'1700': '1.7s',
				'1800': '1.8s',
				'1900': '1.9s',
				'2000': '2s',
			},
			boxShadow: {
				xs: '2px 2px 5px rgba(0,0,0,0.1)',
				sm: '5px 5px 15px rgba(0,0,0,0.2)',
				md: '10px 10px 30px rgba(0,0,0,0.5)', // Mid-level shadow
				lg: '15px 15px 40px rgba(0,0,0,0.6)',
				xl: '20px 20px 50px rgba(0,0,0,0.7)',
			},
			colors: {
				accent: 'rgb(var(--accent))',
				background: 'rgb(var(--background))',
				foreground: 'rgb(var(--foreground))',
			},
			fontFamily: {
				merry: ['var(--font-merriweather)'],
				mono: ['var(--font-geist-mono)'],
			},
			keyframes: {
				fadeIn: {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' },
				},
				grow: {
					'0%': {
						opacity: '0',
						transform: 'scale(0)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
				'bounce-grow': {
					'0%': {
						opacity: '0',
						transform: 'scale(0)',
					},
					'25%': {
						opacity: '0.25',
						transform: 'scale(1.05)',
					},
					'50%': {
						opacity: '0.5',
						transform: 'scale(0.95)',
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1)',
					},
				},
			},
			screens: {
				'max-lg': { max: '1023px' },
			},
		},
	},
	plugins: [
		function ({ addUtilities, theme }) {
			const animationDelay = theme('animationDelay');
			const utilities = {};
			Object.entries(animationDelay).forEach(([key, value]) => {
				utilities[`.animation-delay-${key}`] = { 'animation-delay': value };
				utilities[`.animate-grow-${key}`] = {
					animation: `grow ${value} ease-in-out forwards`,
				};
			});
			addUtilities(utilities, ['responsive']);
		},
	],
} satisfies Config;
