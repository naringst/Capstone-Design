/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*", "./component/common/**/*", "./component/layout/**"],
  theme: {
    extend: {
      backgroundImage: {
        darkBlue: "url('../public/blueback.webp')",
      },
      plugins: [],
    },
  },
};
