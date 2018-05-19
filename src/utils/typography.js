import Typography from 'typography'
import { MOBILE_MEDIA_QUERY } from 'typography-breakpoint-constants'

const typography = new Typography({
  title: 'Cali Meets Delhi',
  baseFontSize: '16px',
  scaleRatio: 3,
  baseLineHeight: 1.618,
  headerFontFamily: ['Dancing Script', 'sans-serif'],
  bodyFontFamily: ['IBM Plex Sans', 'sans-serif'],
  headerWeight: 400,

  googleFonts: [
    {
      name: 'Dancing Script',
      styles: ['400'],
    },
    {
      name: 'IBM Plex Sans',
      styles: ['400', '700'],
    },
  ],

  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => ({
    'h1,h2,h3,h4,h5,h6': {
      lineHeight: 1.1,
      fontFamily: ['Dancing Script', 'sans-serif'].join(','),
    },
    a: {
      color: '#001f3f',
      textDecoration: 'underline',
      fontFamily: ['Dancing Script', 'sans-serif'].join(','),
    },
    'a:hover,a:active': {
      color: '#FE5F55',
    },
    blockquote: {
      fontStyle: 'italic',
      paddingLeft: rhythm(13 / 16),
      marginLeft: 0,
    },
    'blockquote > :last-child': {
      marginBottom: 0,
    },
    'blockquote cite': {
      ...adjustFontSizeTo(options.baseFontSize),
      color: options.bodyColor,
      fontWeight: options.bodyWeight,
    },
    'blockquote cite:before': {
      content: '"— "',
    },
    [MOBILE_MEDIA_QUERY]: {
      html: {
        fontSize: `${16 / 16 * 100}%`,
      },
      blockquote: {
        marginLeft: rhythm(-3 / 4),
        marginRight: 0,
        paddingLeft: rhythm(9 / 16),
      },
    },
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
