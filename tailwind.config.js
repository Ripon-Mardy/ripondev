/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        
      },
      backgroundColor : {
        'bg-color': '#182C61',
        'secondaryBgColor' : '#079992',
        'footerBackground' : '#34495e',
      },
      textColor: {
        'text-color' : '#079992',
        'paraColor' : '#535c68',
      },
      borderColor : {
        'borderColor' : '#0a3d62',
        'borderBgColor' : '#079992'
      }
    },
  },
  plugins: [],
}
