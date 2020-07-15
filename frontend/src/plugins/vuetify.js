import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

const themes = {
  light: {
    primary: "#F5F5F5",
    secondary: "#D81B60",
    accent: "#82B1FF",
    error: "#FF5252",
    info: "#2196F3",
    success: "#4CAF50",
    warning: "#FFC107",
  },
};

export default new Vuetify({
  theme: {
    themes,
  },
});
