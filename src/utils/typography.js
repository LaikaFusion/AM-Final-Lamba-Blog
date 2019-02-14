import Typography from 'typography'

const typography = new Typography({
  googleFonts: [
    {
      name: 'Monoton',
      styles: ['400'],
    },
    {
      name: 'SourceSansPro',
      styles: ['400', '400i', '700', '700i'],
    },
  ],
  baseFontSize: '22px',

  headerFontFamily: ["Source Sans Pro", "sans-serif"],

  bodyFontFamily: ["Source Sans Pro", "sans-serif"],

  bodyWeight: 400,
  headerWeight: '700',
  boldWeight: 700,
  overrideStyles: ({ scale, rhythm }) => ({
    html: {
      '-webkit-font-smoothing': 'antialiased',
    },
    a: {
      color: 'inherit',
    },
    '.Mono':{
      fontFamily: "Monoton",
      fontWeight:400
    }
  }),
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
