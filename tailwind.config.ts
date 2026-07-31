import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Space Grotesk", "Inter", "system-ui", "sans-serif"]
      },
      colors: {
        cosmic: {
          950: "#050010",
          900: "#090016",
          800: "#17042b",
          700: "#220742",
          600: "#3a1166",
          500: "#5f3fd6",
          400: "#7c5ce7",
          300: "#a78bfa",
          200: "#c4b5fd",
          100: "#ede9fe"
        },
        accent: {
          gold: "#f59e0b",
          rose: "#f43f5e",
          cyan: "#06b6d4",
          emerald: "#10b981"
        }
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "glow": "glow 2s ease-in-out infinite alternate",
        "shimmer": "shimmer 2.5s linear infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        "slide-up-delay": "slideUp 0.6s ease-out 0.2s forwards",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "spin-slow": "spin 20s linear infinite",
        "twinkle": "twinkle 3s ease-in-out infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" }
        },
        glow: {
          "0%": { boxShadow: "0 0 5px rgba(124, 92, 231, 0.3), 0 0 20px rgba(124, 92, 231, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(124, 92, 231, 0.6), 0 0 60px rgba(124, 92, 231, 0.2)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        },
        pulseGlow: {
          "0%, 100%": { boxShadow: "0 0 15px rgba(124, 92, 231, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(124, 92, 231, 0.6), 0 0 80px rgba(124, 92, 231, 0.2)" }
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" }
        }
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.4)",
        "glow-sm": "0 0 15px rgba(124, 92, 231, 0.3)",
        "glow-md": "0 0 30px rgba(124, 92, 231, 0.4)",
        "glow-lg": "0 0 60px rgba(124, 92, 231, 0.5)",
        "glow-gold": "0 0 30px rgba(245, 158, 11, 0.3)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)"
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, #090016 0%, #17042b 50%, #220742 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(124, 92, 231, 0.1) 0%, rgba(99, 102, 241, 0.05) 100%)",
        "gradient-text": "linear-gradient(135deg, #a78bfa, #818cf8, #c084fc)",
        "gradient-gold": "linear-gradient(135deg, #f59e0b, #d97706, #fbbf24)",
        "gradient-border": "linear-gradient(135deg, rgba(124, 92, 231, 0.5), rgba(99, 102, 241, 0.2))"
      }
    }
  },
  plugins: []
};

export default config;
