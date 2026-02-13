import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--bg)',
        ink: 'var(--ink)',
        card: 'var(--card)',
        border: 'var(--border)',
        violet: 'var(--violet)',
        pink: 'var(--pink)',
        sunset: 'var(--sunset)',
        sky: 'var(--sky)',
      },
      boxShadow: {
        soft: '0 10px 30px rgba(27, 27, 31, 0.08)',
        lift: '0 18px 40px rgba(27, 27, 31, 0.12)',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateX(0px) translateY(0px)' },
          '50%': { transform: 'translateX(50px) translateY(-10px)' },
          '100%': { transform: 'translateX(0px) translateY(0px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        float: 'float 30s ease-in-out infinite',
        shimmer: 'shimmer 8s linear infinite',
      },
    },
  },
  plugins: [],
};

export default config;
