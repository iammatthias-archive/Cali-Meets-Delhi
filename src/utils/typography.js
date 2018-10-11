import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  title: 'Cali Meets Delhi',
  baseFontSize: '18px',
  baseLineHeight: 1.618,
  headerFontFamily: ['Abril Fatface', 'sans-serif'],
  bodyFontFamily: ['Open Sans', 'sans-serif'],
  headerWeight: 400,

  googleFonts: [
    {
      name: 'Abril Fatface',
      styles: ['400'],
    },
    {
      name: 'Open Sans',
      styles: ['400'],
    },
  ],

  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.618,
      fontFamily: ['Abril Fatface', 'sans-serif'].join(','),
    },
    p: {
      lineHeight: 1.382,
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    a: {
      textDecoration: 'underline',
      fontFamily: ['Open Sans', 'sans-serif'].join(','),
    },
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${(16 / 16) * 100}%`,
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
