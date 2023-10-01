/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text-slate-200': '#E2E8F0',
        'text-slate-400': "rgb(148 163 184)",
        'text-teal-300': "rgba(94 234 212 1)",
        'bg-slate-900': "#0F172A "
      }
    },
  },
  plugins: [],
}