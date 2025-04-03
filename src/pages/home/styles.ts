import { Heading, styled, Text } from '@ignite-ui/react'

export const Container = styled('main', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$20',
  padding: '$10 $2',
  height: '100vh',
  width: '100vw',

  '@media (min-width: 768px)': {
    padding: '0',
    maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
    flexDirection: 'row',
    marginLeft: 'auto',
  },
})

export const Hero = styled('section', {
  maxWidth: 480,
  textAlign: 'center',

  [`${Heading}`]: {
    fontSize: '$4xl',

    '@media (min-width: 768px)': { fontSize: '$6xl' },
  },

  [`${Text}`]: {
    marginTop: '$2',
    color: '$gray200',
    fontSize: '$lg',
  },

  '@media (min-width: 768px)': {
    padding: '0 $10',
    textAlign: 'left',
  },
})

export const Preview = styled('div', {
  '& img': {
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    '@media (min-width: 768px)': {
      width: 'auto',
    },
  },

  '@media (min-width: 768px)': {
    paddingRight: '$8',
    overflow: 'hidden',
  },
})
