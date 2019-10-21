const defaultFonts = [
  '-apple-system',
  'BlinkMacSystemFont',
  'Segoe UI',
  'Roboto',
  'Helvetica',
  'Arial',
  'sans-serif',
  'Apple Color Emoji',
  'Segoe UI Emoji',
  'Segoe UI Symbol',
]

export default {
  baseMd: '16px',
  default: defaultFonts.join(', '),
  heading: ['montserrat', ...defaultFonts].join(', '),
  small: '80%',
}

