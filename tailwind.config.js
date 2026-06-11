/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-cairo)', 'var(--font-plus-jakarta)', 'sans-serif'],
        arabic: ['var(--font-cairo)', 'sans-serif'],
        latin: ['var(--font-plus-jakarta)', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#EEF4FF',
          100: '#D9E8FF',
          200: '#B8D1FF',
          300: '#85AEFD',
          400: '#4F81F8',
          500: '#1B4FD8',
          600: '#1540BC',
          700: '#1233A0',
          800: '#0E2880',
          900: '#0A1D60',
        },
        secondary: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          200: '#B9F9CE',
          300: '#86EFAD',
          400: '#4ADE80',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
          800: '#166534',
          900: '#14532D',
        },
        neutral: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #1B4FD8 0%, #22C55E 100%)',
        'gradient-hero': 'linear-gradient(135deg, #0A1D60 0%, #1B4FD8 50%, #1a6b3a 100%)',
        'gradient-subtle': 'linear-gradient(180deg, #F8FAFC 0%, #EEF4FF 100%)',
        'gradient-card': 'linear-gradient(135deg, rgba(27,79,216,0.05) 0%, rgba(34,197,94,0.05) 100%)',
      },
      borderRadius: {
        '2xl': '16px',
        '3xl': '24px',
        '4xl': '32px',
      },
      boxShadow: {
        'soft': '0 4px 24px rgba(0,0,0,0.06)',
        'medium': '0 8px 40px rgba(0,0,0,0.1)',
        'strong': '0 16px 64px rgba(0,0,0,0.15)',
        'primary': '0 8px 32px rgba(27,79,216,0.25)',
        'secondary': '0 8px 32px rgba(34,197,94,0.25)',
        'glow': '0 0 60px rgba(27,79,216,0.15)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'slide-up': 'slideUp 0.6s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
