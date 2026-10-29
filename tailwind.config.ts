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
          950: "#07271a",
          900: "#0b3d24",
          800: "#0e4d2e",
          700: "#14663c",
          600: "#17884a",
          500: "#2fa05c",
          400: "#5cb85f",
          300: "#9ad1a8",
          200: "#c4e6cb",
          100: "#e7f2e7"
        },
        accent: {
          gold: "#e8930c",
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
          "0%": { boxShadow: "0 0 5px rgba(23, 136, 74, 0.3), 0 0 20px rgba(23, 136, 74, 0.1)" },
          "100%": { boxShadow: "0 0 20px rgba(23, 136, 74, 0.6), 0 0 60px rgba(23, 136, 74, 0.2)" }
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
          "0%, 100%": { boxShadow: "0 0 15px rgba(23, 136, 74, 0.3)" },
          "50%": { boxShadow: "0 0 40px rgba(23, 136, 74, 0.6), 0 0 80px rgba(23, 136, 74, 0.2)" }
        },
        twinkle: {
          "0%, 100%": { opacity: "0.3", transform: "scale(0.8)" },
          "50%": { opacity: "1", transform: "scale(1.2)" }
        }
      },
      boxShadow: {
        "glass": "0 8px 32px rgba(0, 0, 0, 0.3)",
        "glass-lg": "0 16px 48px rgba(0, 0, 0, 0.4)",
        "glow-sm": "0 0 15px rgba(23, 136, 74, 0.3)",
        "glow-md": "0 0 30px rgba(23, 136, 74, 0.4)",
        "glow-lg": "0 0 60px rgba(23, 136, 74, 0.5)",
        "glow-gold": "0 0 30px rgba(23, 136, 74, 0.3)",
        "glow-cyan": "0 0 30px rgba(6, 182, 212, 0.3)"
      },
      backgroundImage: {
        "gradient-cosmic": "linear-gradient(135deg, #07271a 0%, #0b3d24 50%, #14663c 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(23, 136, 74, 0.08) 0%, rgba(23, 136, 74, 0.03) 100%)",
        "gradient-text": "linear-gradient(135deg, #a78bfa, #818cf8, #c084fc)",
        "gradient-gold": "linear-gradient(135deg, #1b9a50, #17884a, #57b06e)",
        "gradient-border": "linear-gradient(135deg, rgba(23, 136, 74, 0.5), rgba(99, 102, 241, 0.2))"
      }
    }
  },
  plugins: []
};

export default config;
