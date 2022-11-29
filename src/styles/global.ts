import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },
  body: {
    '-webkit-font-smootgng': 'antialiased',
    background: '$gray900',
    color: '$white',
    fontFamily: 'Roboto',
  },
  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
    fontSize: '$text',
  },
})
