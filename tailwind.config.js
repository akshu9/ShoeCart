/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeInRight: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 1s ease-out',
        fadeInRight: 'fadeInRight 1s ease-out',
        'fadeInUp delay-2s': 'fadeInUp 1s ease-out 0.2s',
        'fadeInUp delay-4s': 'fadeInUp 1s ease-out 0.4s',
      },
    },
  },
  
  plugins: [],
}

