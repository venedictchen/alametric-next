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
        title: ['"Concert One"', 'cursive'],
        body: ['"Catamaran"', 'sans-serif'],
      },
      colors: {
        'purple-primary': '#6739ba',
        'purple-100': '#c3b5dc',
        'purple-200': '#bf83ff',
        'purple-300': '#6f44be',
        'emerald': '#c9f2e9',
        'white-100': '#ffffff',
        'black-100': '#0a0a0a',
        'grey-100': '#615f70',
        'grey-150': '#a8a7b2',
        'grey-200': '#747383',
        'yellow-100': '#fcff5a',
        'warning-200': '#ffd54b',
        'danger-100': '#ffccd5',
        'danger-200': '#660012',
      },
    },
  },
  plugins: [],
};

export default config;
