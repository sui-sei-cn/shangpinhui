import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Router from "vue-router";
import router from "./router";
import App from "./App.vue";

Vue.config.productionTip = false;

Vue.use(ElementUI);
Vue.use(Router);
new Vue({
  render: (h) => h(App),
  router
}).$mount("#app");
