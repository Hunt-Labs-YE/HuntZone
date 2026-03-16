/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import colors from "vuetify/util/colors";
import { VTreeview, VTreeviewItem } from "vuetify/labs/VTreeview";

// Composables
import { createVuetify, type ThemeDefinition } from "vuetify";
import { convertCompilerOptionsFromJson } from "typescript";

const yetiDarkTheme: ThemeDefinition = {
  dark: true,
  colors: {
    primary: "#00A8FF",
    secondary: "#B026FF",
    background: "#000000",
    surface: "#0A0A0A",
    "surface-alt": "#0F0F12",
    success: colors.green.accent3,
    error: colors.red.accent3,
    warning: colors.yellow.accent3,
    "app-bar-color": "#000000"
  }
};

const yetiLightTheme: ThemeDefinition = {
  dark: false,
  colors: {
    background: "#F5F5F5",
    surface: "#FFFFFF",
    "surface-alt": "#F0F0F0",
    primary: "#00A8FF",
    "primary-darken-1": "#0091DB",
    secondary: "#B026FF",
    error: colors.red.lighten3,
    cancel: colors.red.darken1,
    "app-bar-color": "#00A8FF"
  }
};

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  defaults: {
    global: {
      ripple: false
    },
    components: {
      VTreeview,
      VTreeviewItem
    },
    VApp: {
      style: 'font-family: "Exo 2", sans-serif;'
    },
    VCombobox: {
      variant: "outlined"
    },
    VTextField: {
      variant: "outlined"
    },
    VAutocomplete: {
      variant: "outlined"
    },
    VTextarea: {
      variant: "outlined"
    },
    VBtn: {
      rounded: 1
    },
    VTab: {
      VChip: {
        rounded: 1
      }
    },
    VCard: {
      elevation: 0
    }
  },
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi
    }
  },
  blueprint: md3,
  theme: {
    defaultTheme: "yetiDarkTheme",
    themes: {
      yetiDarkTheme,
      yetiLightTheme
    }
  }
});
