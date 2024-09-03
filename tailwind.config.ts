import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      marshland: {
        '50': '#f2fbf9',
        '100': '#d3f4ee',
        '200': '#a8e7dc',
        '300': '#74d4c7',
        '400': '#47baae',
        '500': '#2e9e95',
        '600': '#227f79',
        '700': '#1f6662',
        '800': '#1d5250',
        '900': '#1c4543',
        '950': '#040f0f',
      },
    },
  },
  plugins: [],
}
export default config
