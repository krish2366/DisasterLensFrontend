export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('assets/hero.webp')",
        'earth': "url('assets/earth.jpg')",
      },
    },
  },
  plugins: [],
};
