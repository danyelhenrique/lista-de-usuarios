import Vue from "vue";
import vuetify from "./plugins/vuetify";

import store from "./store";

import App from "./App.vue";

import router from "./router";

import "./assets/sass/overrrides.scss";

Vue.config.productionTip = false;

new Vue({
  vuetify,
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
