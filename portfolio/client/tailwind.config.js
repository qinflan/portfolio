/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom CSS color variables
      colors: {
        // Dark Theme
        'background-color': 'var(--background-color)',
        'foreground-color': 'var(--foreground-color)',
        'foreground-hover-color': 'var(--foreground-hover-color)',
        'primary-text-color': 'var(--primary-text-color)',
        'secondary-text-color': 'var(--secondary-text-color)',
        'icon-color': 'var(--icon-color)',
        'icon-active-color': 'var(--icon-active-color)',
        'logo-color': 'var(--logo-color)',
        'shadow-color': 'var(--shadow-color)',
        'border-color': 'var(--border-color)',
        'button': 'var(--button-color)',
        'button-hover': 'var(--button-color-hover)',
        'button-text': 'var(--button-text-color)',
        'button-hover-text': 'var(--button-text-color-hover)',
        'widget-background': 'var(--widget-background-color)',
      },
    },
  },
  plugins: [],
}

