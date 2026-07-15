import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
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
      fontFamily: {
        display: ["var(--font-display)", "ui-sans-serif", "system-ui"],
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        skill: {
          green: "#25E2C0",
          blue: "#6D62EA",
          red: "#EA495C",
          yellow: "#F2BD32",
        },
        lamp: "#00ccb1",
        // Warm, editorial palette
        ink: "#0b0b0d",
        panel: "#111114",
        cream: "#f4f3ee",
        mute: "#8a8a94",
        sand: "#e8c48a",
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
        "aurora-1": {
          "0%, 100%": { transform: "translate(-10%, -10%) scale(1)" },
          "50%": { transform: "translate(10%, 8%) scale(1.25)" },
        },
        "aurora-2": {
          "0%, 100%": { transform: "translate(8%, 6%) scale(1.1)" },
          "50%": { transform: "translate(-8%, -8%) scale(0.9)" },
        },
        "grain-shift": {
          "0%, 100%": { transform: "translate(0, 0)" },
          "10%": { transform: "translate(-5%, -10%)" },
          "30%": { transform: "translate(3%, -15%)" },
          "50%": { transform: "translate(12%, 9%)" },
          "70%": { transform: "translate(-9%, 4%)" },
          "90%": { transform: "translate(-1%, 7%)" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "aurora-1": "aurora-1 18s ease-in-out infinite",
        "aurora-2": "aurora-2 24s ease-in-out infinite",
        "grain-shift": "grain-shift 8s steps(6) infinite",
        marquee: "marquee 40s linear infinite",
      },
      backgroundImage: {
        "card-gradient":
          "linear-gradient(180deg, rgba(39,39,39,1) 0%, rgba(39,39,39,0.6) 100%);",
        "button-gradient":
          "linear-gradient(72deg, rgba(63,251,164,1) 0%, rgba(70,104,252,1) 100%)",
      },
      boxShadow: {
        lamp: "0px 0px 9px 1px #00ccb1",
        "skill-blue": "0px 0px 9px 1px #6D62EA",
        "skill-yellow": "0px 0px 9px 1px #F2BD32",
        "skill-red": "0px 0px 9px 1px #EA495C",
        glow: "0 0 60px -12px rgba(0,204,177,0.5)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
