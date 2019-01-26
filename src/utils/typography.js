import Typography from 'typography'

const typography = new Typography({
  title: 'Cali Meets Delhi',
  baseFontSize: '18px',
  baseLineHeight: 1.618,
  headerFontFamily: ['Abril Fatface', 'serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  headerWeight: 400,

  googleFonts: [
    {
      name: 'Abril Fatface',
      styles: ['400'],
    },
    {
      name: 'Merriweather',
      styles: ['300'],
    },
  ],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
