/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      colors: {
        // Extended black palette - different shades of black/gray
        'gray-black': {
          50: '#F6F6F6',   // Lightest gray
          100: '#E7E7E7',  // Very light gray
          200: '#D1D1D1',  // Light gray
          300: '#B0B0B0',  // Medium light gray
          400: '#888888',  // Medium gray
          500: '#6D6D6D',  // Medium dark gray
          600: '#5D5D5D',  // Dark gray
          700: '#4F4F4F',  // Darker gray
          800: '#454545',  // Very dark gray
          900: '#3D3D3D',  // Near black
          950: '#000000',  // Pure black
        },
        // Override Relume background colors
        'background-secondary': '#F6F6F6',  // Very light gray
      }
    }
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
  ],
};

