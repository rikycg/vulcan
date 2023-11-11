/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'gray-dark': 'var(--rik-color-gray-dark)',
      'gray-light': 'var(--rik-color-gray-light)',
      'gray-medium': 'var(--rik-color-gray-medium)',
      'warning': 'var(--rik-color-warning)',
      'white': '#ffffff',
    },
    fontFamily: {
      regular: ['latoregular', 'Inter', 'sans-serif'],
      bold: ['latobold', 'Inter', 'sans-serif'],
      semibold: ['latosemibold', 'Inter', 'sans-serif'],
      medium: ['latomedium', 'Inter', 'sans-serif'],
    }
  },
  plugins: [],
}
