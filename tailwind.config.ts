import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'dark-blue': '#2924b1',
        'grey': '#D3DDE6',
        'dark-green': '#006633',
        'green': '#b0ff92'
      },
      keyframes: {
        popUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '100'  }
        },
        'pop-left-right': {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '50%': { transform: 'translateX(10%)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        'pop-right-left': {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '50%': { transform: 'translateX(-10%)', opacity: '1' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        pupSlideIn: 'popUp 1s ease-in-out forwards',
        'pop-left-right': 'pop-left-right 1s ease-in-out forwards',
        'pop-right-left': 'pop-right-left 1s ease-in-out forwards',
      },
      screens: {
        sw: "1440px",
        lsw: "1080px",
        msw: "720px",
        ssw: "640px",
        xsw: "480px"
    },
    },
  },
  plugins: [],
};
export default config;
