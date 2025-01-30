import { defineConfig, defineKeyframes } from "@pandacss/dev";

const keyframes = defineKeyframes({
  rotation: {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" },
  },
  fadeIn: { "0%": { opacity: 0 }, to: { opacity: 1 } },
  fadeInDown: {
    "0%": {
      opacity: 0,
      transform: "translate3d(0, -5%, 0)",
    },
    to: { opacity: 1, transform: "translateZ(0)" },
  },
  fadeInUp: {
    "0%": {
      opacity: 0,
      transform: "translate3d(0, 5%, 0)",
    },
    to: { opacity: 1, transform: "translateZ(0)" },
  },
  fadeInTopRight: {
    "0%": {
      opacity: 0,
      transform: "translate3d(5%, 0, 0)",
    },
    to: { opacity: 1, transform: "translateZ(0)" },
  },
  backOutLeft: {
    "0%": { opacity: 1 },
    "20%": {
      transform: "translateX(0)",
      opacity: 0.7,
    },
    to: {
      transform: "translateX(-2000px)",
      opacity: 0,
      display: "none",
    },
  },
  backOutRight: {
    "0%": { opacity: 1 },
    "20%": {
      transform: "translateX(0)",
      opacity: 0.7,
    },
    to: {
      transform: "translateX(2000px)",
      opacity: 0,
      display: "none",
    },
  },
  backInRight: {
    "0%": {
      transform: "translateX(2000px)",
      opacity: 0,
    },
    "80%": {
      transform: "translateX(0)",
      opacity: 0.7,
    },
    to: { opacity: 1 },
  },
  backInLeft: {
    "0%": {
      transform: "translateX(-2000px)",
      opacity: 0,
    },
    "80%": {
      transform: "translateX(0)",
      opacity: 0.7,
    },
    to: { opacity: 1 },
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: false,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      keyframes,
      tokens: {
        colors: {
          light: { value: "#fff" },
          dark: { value: "#000" },
          input: { value: "hsl(0, 0%, 52%)" },
        },
        fonts: {
          body: { value: "Nunito Sans, sans-serif" },
          emoji: { value: "Noto Color Emoji, sans-serif" },
        },
      },
    },
    semanticTokens: {
      colors: {
        text: {
          value: {
            _light: "hsl(200, 15%, 8%)",
            _dark: "hsl(0, 0%, 100%)",
          },
        },
        background: {
          value: {
            _light: "hsl(0, 0%, 98%)",
            _dark: "hsl(207, 26%, 17%)",
          },
        },
        element: {
          value: {
            _light: "hsl(0, 0%, 100%)",
            _dark: "hsl(209, 23%, 22%)",
          },
        },
      },
    },
  },

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
  },

  globalCss: {
    html: {
      fontFamily: "{fonts.body}",
      scrollbarGutter: "stable",
    },
    body: {
      bg: { base: "hsl(0, 0%, 98%)", _dark: "hsl(207, 26%, 17%)" },
      color: "{colors.text}",
      margin: 0,
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
