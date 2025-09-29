import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", "ui-sans-serif", "system-ui"],
        mono: ["var(--font-geist-mono)", "ui-monospace", "SFMono-Regular"],
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        muted: "var(--muted)",
        card: "var(--card)",
        accent: "var(--accent)",
        border: "var(--border)",
        ring: "var(--ring)",
        highlight: "var(--highlight)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(99,102,241,0.35)",
        'inner-lg': 'inset 0 10px 30px rgba(0,0,0,0.35)'
      },
      backgroundImage: {
        'radial-fade':
          'radial-gradient(80% 50% at 50% 0%, rgba(120,119,198,0.25) 0%, rgba(0,0,0,0) 80%)',
        'grid':
          'linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)'
      },
    },
  },
  plugins: [],
};
export default config;
