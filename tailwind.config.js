/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          DEFAULT: '#06060A',
          surface: '#08080F',
          card: '#10101A',
          elevated: '#1A1A2C',
        },
        accent: {
          cyan: '#22D3EE',
          indigo: '#818CF8',
          violet: '#C084FC',
        },
        txt: {
          primary: '#EAEAEF',
          secondary: '#8888A0',
          muted: '#555570',
        },
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
    },
  },
  plugins: [],
};
