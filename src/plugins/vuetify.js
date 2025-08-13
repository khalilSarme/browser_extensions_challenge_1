/**
 * plugins/vuetify.js
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

const LigthTheme = {
  dark: false,
  colors: {
    primary: "hsl(227, 75%, 14%)",
    secondary: "hsl(227, 75%, 14%)",
    error: "hsl(3, 77%, 44%)",
    blue: "#f0f0f0",
  }
}

const DarkTheme = {
  dark: true,
  colors: {
    primary: "#FEFEFE",
    secondary: "#D7D7D7",
    error: "hsl(3, 86%, 64%)",
    blue: "hsl(226, 25%, 17%)",
  }
}

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    defaultTheme: 'customDark',
    themes: {
      customLight: LigthTheme,
      customDark: DarkTheme
    }
  },
})
