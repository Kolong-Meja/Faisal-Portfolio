import flowbitePlugin from 'flowbite/plugin';
import plugin from 'tailwindcss';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			bodoni: ['Libre Bodoni', 'serif'],
			lato: ['Lato', 'sans-serif'],
			grotesk: ['Space Grotesk', 'sans-serif']
		},
		extend: {
			colors: {
				light: '#FEFDED',
				dark: '#070F2B'
			},
			keyframes: {
				slideInDown: {
					'0%': {
						transform: 'translateY(-100%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(0%)',
						opacity: 1
					}
				},
				slideOutUp: {
					'0%': {
						transform: 'translateY(0%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateY(-100%)',
						opacity: 1
					}
				},
				slideInLeft: {
					'0%': {
						transform: 'translateX(-30rem)',
						opacity: 1
					},
					'45%': {
						transform: 'translateX(2rem)',
						opacity: 1
					},
					'100%': {
						transform: 'translateX(0rem)',
						opacity: 1
					}
				},
				slideInRight: {
					'0%': {
						transform: 'translateX(30rem)',
						opacity: 1
					},
					'45%': {
						transform: 'translateX(-2rem)',
						opacity: 1
					},
					'100%': {
						transform: 'translateX(0rem)',
						opacity: 1
					}
				},
				flipRight: {
					'0%': { transform: 'rotateY(-100deg)' },
					'60%': { transform: 'rotateY(25deg)' },
					'100%': { transform: 'rotateY(0deg)' }
				}
			}
		},
		animation: {
			slideInDown: 'slideInDown 0.2s ease-out forwards',
			slideOutUp: 'slideOutUp 0.2s ease-out forwards',
			slideInLeft: 'slideInLeft 1.2s ease-out forwards',
			slideInRight: 'slideInRight 1.2s ease-out forwards',
			flipRight: 'flipRight 1.5s ease-in-out forwards'
		}
	},
	plugins: [
		flowbitePlugin,
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'animate-delay': (value) => ({
						animationDelay: value
					})
				},
				{ values: theme('transitionDelay') }
			);
		})
	]
};
