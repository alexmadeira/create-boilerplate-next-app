import { styled } from '..'

export const Container = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  height: '100%',
  minHeight: '100vh',
})

export const Header = styled('header', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  h1: {
    fontSize: '$xl',
    fontWeight: 700,
    textAlign: 'center',
  },
  p: {
    fontSize: '$subTitle',
    fontWeight: 300,
  },
})

export const LogosContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  marginTop: '$9',
  gap: '$10',
  img: {
    objectFit: 'contain',
    width: 150,
  },
})

export const TextStart = styled('p', {
  marginTop: '$9',
  fontSize: '$text',
})

export const PackagesBox = styled('div', {
  marginTop: '$9',
  display: 'flex',
  div: {
    flex: '1',
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '$4',
    position: 'relative',
    padding: '0 $5',
    '&:first-child': {
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      '&:after': {
        content: '',
        position: 'absolute',
        height: '70%',
        width: 2,
        right: 0,
        background: '$white',
      },
    },
  },
  img: {
    transition: 'all 100ms linear',
    objectFit: 'contain',
    width: '$7',
    height: '$7',
  },
  a: {
    '&:hover': {
      img: {
        transform: 'rotate(20deg) scale(1.05)',
      },
    },
  },
})

export const Footer = styled('footer', {
  width: '100%',
  maxWidth: 1200,
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '$14',
  div: {
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
    gap: '$4',
    '&:last-child': {
      alignItems: 'flex-end',
    },
  },
  a: {
    color: '$white',
    textDecoration: 'none',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: '$2',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
})
