import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			keyframes: {
				blip: {
					'0%, 100%': { opacity: '0' },
					'50%': { opacity: '1' },
				},
				intro: {
					'0%': { transform: 'scaleY(0%) translate(-200px)' },
					'10%': { transform: 'scaleY(100%) translate(-200px)' },
					'30% ': { transform: 'translate(200px)' },
					'40% ': { transform: 'translate(200px) scaleY(0%)' },

					'60% ': { transform: 'translate(200px) scaleY(0%)' },
					'70% ': { transform: 'translate(200px)scaleY(100%)' },
					'90%': { transform: 'scaleY(100%) translate(-200px)' },
					'100%': { transform: 'scaleY(0%) translate(-200px)' },
				},
				textintro: {
					'0%': { width: '0%' },
					'10%': { width: '0%' },
					'30% ': { width: '100%' },
					'40% ': { width: '100%' },

					'60% ': { width: '100%' },
					'70% ': { width: '100%' },
					'90%': { width: '0%' },
					'100%': { width: '0%' },
				},
			},
			animation: {
				blip: 'blip 0.5s ease-in-out infinite',
				intro: 'intro 4s ease-in-out 1',
				textintro: 'textintro 4s ease-in-out 1',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
