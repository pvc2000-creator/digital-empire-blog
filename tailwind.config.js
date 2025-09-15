/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/content/**/*.{md,mdx}",
    "./src/**/*.{md,mdx}"
  ],
  theme: {
    extend: {
      container: { center: true, padding: "1rem" }
    }
  },
  plugins: [require("@tailwindcss/typography")],
};
