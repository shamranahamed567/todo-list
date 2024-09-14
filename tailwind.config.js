/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        "acc-created-border": "#2ECB715C",
        "acc-created-bg": "#F4FFF98C",
        "acc-created-text": "#0DA54E",
        "already-reg-bg": "#EF4444",
        "already-reg-bd": "#FFBDBD",
        "complete-badge": "#1FC16B",
        "complete-badge-bg": "#E0FAEC",
        "incompleted-badge-bg": "#FFEBEC",
        "incompleted-badge": "#FB3748",
      },
      gridTemplateRows: {
        view: "auto 1fr",
        "scroll-view": "auto auto 1fr",
      },
      gridTemplateColumns: {
        "header-view": "1fr 112px 1fr",
      },
      spacing: {
        8.5: "2.125rem",
        7.5: "1.875rem",
        todo: "calc(100% - 92px)",
        "wd-md": "45%",
      },
      screens: {
        ms: "820px",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
