import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    '-webkit-font-smootgng': 'antialiased',
    background: '$alexcardosomadeira',
    color: 'Aqua',
    fontFamily: 'Roboto',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },
})
