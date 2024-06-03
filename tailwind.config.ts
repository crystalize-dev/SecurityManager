/** @type {import('tailwindcss').Config} */
const config = {
  content: [
      './pages/**/*.{js,ts,jsx,tsx,mdx}',
      './components/**/*.{js,ts,jsx,tsx,mdx}',
      './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
      extend: {
          colors: {
              primary: 'var(--primary)'
          }
      }
  },
  plugins: ['prettier-plugin-tailwindcss']
};

export default config;