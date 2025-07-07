// tailwind.config.js
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}", // adjust if your files are elsewhere
    ],
    theme: {
      extend: {
        keyframes: {
          shine: {
            '0%': { 'background-position': '100%' },
            '100%': { 'background-position': '-100%' },
          },
        },
        animation: {
          shine: 'shine 5s linear infinite',
        },
      },
    },
    plugins: [],
  };