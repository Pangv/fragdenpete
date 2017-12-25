// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import VueFire from "vuefire";
import App from "./App";
import router from "./router";

import $ from "jquery";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap/dist/css/bootstrap.css";

Vue.config.productionTip = false;
Vue.use(VueFire);

/* eslint-disable no-new */
const vm = new Vue({
  el: "#app",
  router,
  template: "<App/>",
  components: { App }
});

Vue.prototype.$instance = vm;

console.log(vm);
