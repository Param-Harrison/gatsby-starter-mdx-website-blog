import colorDefaults from './colors'
import fontDefaults from './fonts'
import mediaDefaults from './media'
import theme from '../theme'

/*
 * This file allows us to extend theme styles without requiring us to fully
 * eject the style declarations. By setting tokens internally and using the
 * `theme.js` file to override keys, we can choose to override as much or as
 * little as we want.
 *
 * For example, if we _only_ want to override the primary color, we could
 * create the following at `src/gatsby-site/theme.js`:
 *
 *    export default {
 *      colors: {
 *        primary: 'red'
 *      }
 *    };
 *
 * This would change the primary color to red without requiring us to redeclare
 * every color in the theme.
 *
 *  **Use rem in spacing (margin, padding, etc.) and font sizing. And I use em for layouts like menu
 */

// Override defaults with user theme tokens (if any are set).
export const colors = { ...colorDefaults, ...(theme.colors || {})}
export const fonts = { ...fontDefaults, ...(theme.fonts || {})}
export const media = { ...mediaDefaults, ...(theme.media || {})}
export default { colors, fonts, media }
