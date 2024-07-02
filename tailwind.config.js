/** @type {import('tailwindcss').Config} */
export default {
  content: [ 
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}",
  ],
  theme: {
    fontFamily: {
      'roboto': ['Roboto', 'sans-serif'],
      'dancing-script': ['Dancing Script'],
    },
    extend: {},
  },
  plugins: [
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    require('flowbite/plugin')
  ],
}

