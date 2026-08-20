/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        surface: 'var(--surface)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        primary: {
          DEFAULT: 'var(--primary)',
          dark: 'var(--primary-dark)',
          soft: 'var(--primary-soft)',
        },
        accent: {
          DEFAULT: 'var(--accent)',
          hover: '#C2913A',
        },
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        sm: 'var(--radius-sm)',
        md: 'var(--radius-md)',
        lg: 'var(--radius-lg)',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(23, 32, 25, 0.05)',
        'soft-lg': '0 10px 30px -4px rgba(23, 32, 25, 0.08)',
        'card': '0 2px 12px 0 rgba(23, 32, 25, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(46, 107, 72, 0.12)',
        'whatsapp': '0 8px 24px -2px rgba(37, 211, 102, 0.35)',
      },
    },
  },
  plugins: [],
};
