/** @type {import('tailwindcss').Config} */


module.exports = {
  content: [
    // './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    // './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    './components/**/*.{js,ts,jsx,tsx}'
  ],

  theme: {
    
    extend: {
      boxShadow: {
        '3': '12px 12px 2px 1px #D3D3D3',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        
        'roboto': ['var(--font-roboto)'],
        'fira-sans':['var(--font-fira)'],
        'inter':['Inter', 'sans-serif'],
        'nunito': ['var(--font-nunito)'],
        'sancoale': ['Sancoale', 'sans-serif'],
      },
      keyframes: {
        fadeOut: {
          '0%': { opacity: 1 },
          '90%': {opacity: 1},
          '100%': { opacity: 0 },
        },
        slideIn: {
          '0%': { transform: 'translateX(-100%)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        slideOut: {
          '0%': { transform: 'translateX(0)', opacity: 1 },
          '100%': { transform: 'translateX(-100%)', opacity: 0 },
        },
      },
      animation: {
        'bounce-slow': 'bounce 2s ease infinite',
        'fade-out': 'fadeOut 6s linear infinite',
        slideIn: 'slideIn 1s ease-in-out forwards',
        slideOut: 'slideOut 0.5s ease-in-out forwards',
      }
    },
  },
 
  plugins: [require("daisyui")],
}
