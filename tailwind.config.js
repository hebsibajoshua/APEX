/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        base: '#050505',
        primary: '#00E5C3',
        secondary: '#0EA5E9',
        muted: '#B0B0B0',
        glass: 'rgba(255,255,255,0.05)',
      },
      fontFamily: {
        display: ['Outfit', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(0,229,195,0.35)',
        glowBlue: '0 0 40px rgba(14,165,233,0.35)',
        glowSoft: '0 25px 80px -20px rgba(0,229,195,0.18)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '50%': { transform: 'translateY(-18px) translateX(8px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.4, transform: 'scale(1)' },
          '50%': { opacity: 0.85, transform: 'scale(1.06)' },
        },
      },
      animation: {
        float: 'float 9s ease-in-out infinite',
        floatSlow: 'float 15s ease-in-out infinite',
        pulseGlow: 'pulseGlow 3.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
