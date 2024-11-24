/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // Custom CSS color variables
      colors: {
        'page-background': 'var(--page-background)',
        'page-foreground': 'var(--page-foreground)',
        'foreground-hover': 'var(--foreground-hover)',
        'nav-text': 'var(--nav-text)',
        'nav-active-text': 'var(--nav-active-text)',
        'nav-hover-text': 'var(--nav-hover-text)',
        'icon': 'var(--icon)',
        'header-text': 'var(--header-text)',
        'primary-text': 'var(--primary-text)',
        'secondary-text': 'var(--secondary-text)',
        'button-background': 'var(--button-background)',
        'button-background-hover': 'var(--button-background-hover)',
        'button-text': 'var(--button-text)',
        'button-text-hover': 'var(--button-text-hover)',
        'widget-background': 'var(--widget-background)',
        'page-divider': 'var(--page-divider)',
        'widget-stroke': 'var(--widget-stroke)'
        // 'widget-shadow': 'var(--widget-shadow)',
        // 'widget-border': 'var(--widget-border)',
      },
    },
  },
  plugins: [],
}

