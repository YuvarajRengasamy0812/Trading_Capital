/** @type {import('tailwindcss').Config} */
const withOpacity = (colorVariable, rgbVariable) => {
  return ({ opacityValue }) => {
    if (opacityValue === undefined) {
      return `var(${colorVariable})`
    }

    return `rgb(var(${rgbVariable}) / ${opacityValue})`
  }
}

const borderWithOpacity = ({ opacityValue }) => {
  if (opacityValue === undefined) {
    return "var(--border)"
  }

  return `rgb(var(--text-rgb) / calc(${opacityValue} * 0.1))`
}

module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: borderWithOpacity,
        input: "var(--input)",
        ring: withOpacity("--ring", "--primary-rgb"),
        background: withOpacity("--background", "--background-rgb"),
        foreground: withOpacity("--foreground", "--text-rgb"),
        primary: {
          DEFAULT: withOpacity("--primary", "--primary-rgb"),
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: withOpacity("--secondary", "--secondary-rgb"),
          foreground: "var(--secondary-foreground)",
        },
        destructive: {
          DEFAULT: withOpacity("--destructive", "--destructive-rgb"),
          foreground: "var(--destructive-foreground)",
        },
        muted: {
          DEFAULT: withOpacity("--surface-soft", "--surface-soft-rgb"),
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: withOpacity("--accent", "--primary-rgb"),
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: withOpacity("--popover", "--surface-raised-rgb"),
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: withOpacity("--card", "--surface-raised-rgb"),
          foreground: "var(--card-foreground)",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        heading: "var(--heading)",
        body: "var(--body)",
        sans: "var(--body)",
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
