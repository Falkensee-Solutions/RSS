import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rss: {
          yellow: "#F6C343",
          "yellow-dark": "#E5B12F",
          ink: "#171717",
          warm: "#FAF8F2",
          sand: "#F3EBDD",
          border: "#E7DDCB",
          muted: "#66645F",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        form: "880px",
      },
      borderRadius: {
        card: "1.5rem",
      },
    },
  },
  plugins: [],
};

export default config;
