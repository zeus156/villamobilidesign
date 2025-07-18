import type { Config } from "tailwindcss"

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#C8860D", // Bronze/Gold from logo
          foreground: "#000000", // Black
        },
        secondary: {
          DEFAULT: "#F5F5F5", // Light gray
          foreground: "#000000", // Black
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "#F8F8F8", // Very light gray
          foreground: "#6B7280", // Medium gray
        },
        accent: {
          DEFAULT: "#D4AF37", // Bright bronze/gold
          foreground: "#000000", // Black
        },
        popover: {
          DEFAULT: "#FFFFFF", // White
          foreground: "#000000", // Black
        },
        card: {
          DEFAULT: "#FFFFFF", // White
          foreground: "#000000", // Black
        },
        // Custom bronze palette matching the logo
        bronze: {
          50: "#FDF8F0",
          100: "#FAEBD7",
          200: "#F4D19B",
          300: "#E6B85C",
          400: "#D4A843",
          500: "#C8860D", // Main bronze from logo
          600: "#B8770B",
          700: "#9A6309",
          800: "#7C4F07",
          900: "#5D3B05",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config
