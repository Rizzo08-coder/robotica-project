const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    flowbite.content()
  ],
  theme: {
    extend: {
      colors: {
        // cyan is used in all components as the default "primary" color
        // here we are actually overriding it to some purple color
        // so practically, the cyan means primary
        cyan: {
          50: "#1976d2",
          100: "#1976d2",
          200: "#1976d2",
          300: "#1976d2",
          400: "#1976d2",
          500: "#1976d2",
          600: "#1976d2",
          700: "#1976d2",
          800: "#1976d2",
          900: "#1976d2",
        },
      },
    },
  },
  plugins: [
    flowbite.plugin()
  ],
}

