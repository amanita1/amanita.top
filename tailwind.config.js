/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class', 'html[data-theme="dark"]'],
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
