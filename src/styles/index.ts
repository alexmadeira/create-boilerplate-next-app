import { createStitches, defaultThemeMap } from '@stitches/react'
import { colors } from './tokens/colors'
import { fontSizes } from './tokens/font-sizes'
import { lineHeights } from './tokens/lineHeights'
import { space } from './tokens/space'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    fontSizes,
    lineHeights,
    space,
  },
})
