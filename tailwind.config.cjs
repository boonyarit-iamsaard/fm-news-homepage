// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          400: 'hsl(var(--color-primary-400) / <alpha-value>)',
        },
        secondary: {
          400: 'hsl(var(--color-secondary-400) / <alpha-value>)',
        },
        tertiary: {
          100: 'hsl(var(--color-tertiary-100) / <alpha-value>)',
          300: 'hsl(var(--color-tertiary-300) / <alpha-value>)',
          600: 'hsl(var(--color-tertiary-600) / <alpha-value>)',
          900: 'hsl(var(--color-tertiary-900) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        body: ['0.9375rem', '1.625rem'],
        'heading-xs': [
          '1.125rem',
          {
            lineHeight: '1.5rem',
            fontWeight: 800,
          },
        ],
        'heading-sm': [
          '1.25rem',
          {
            lineHeight: '1.5rem',
            fontWeight: 800,
          },
        ],
        'heading-md': [
          '2rem',
          {
            lineHeight: '1',
            fontWeight: 700,
          },
        ],
        'heading-lg': [
          '2.5rem',
          {
            lineHeight: '1',
            fontWeight: 700,
          },
        ],
        'heading-xl': [
          '3.5rem',
          {
            lineHeight: '1',
            fontWeight: 800,
          },
        ],
      },
    },
  },
  plugins: [],
};

module.exports = config;
