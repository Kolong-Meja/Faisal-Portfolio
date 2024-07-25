import flowbitePlugin from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		'./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'
	],
	theme: {
		fontFamily: {
			roboto: ['Roboto', 'sans-serif'],
			'dancing-script': ['Dancing Script']
		},
		extend: {
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
						transform: 'translateX(-30%)',
						opacity: 1
					},
					'100%': {
						transform: 'translateX(0%)',
						opacity: 1
					}
				},
				flipLeft: {
					'0%': { transform: 'rotateY(-100deg)' },
					'40%': { transform: 'rotateY(0deg)' },
					'55%': { transform: 'rotateY(-14deg)' },
					'70%': { transform: 'rotateY(0deg)' },
					'80%': { transform: 'rotateY(-8deg)' },
					'100%': { transform: 'rotateY(0deg)' }
				}
			}
		},
		animation: {
			slideInDown: 'slideInDown 0.2s ease-out forwards',
			slideOutUp: 'slideOutUp 0.2s ease-out forwards',
			slideInLeft: 'slideInLeft 1.5s ease-out forwards',
			flipLeft: 'flipLeft 2s ease-in-out forwards'
		}
	},
	plugins: [flowbitePlugin]
};
