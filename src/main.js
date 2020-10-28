import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { VueSvgIcon } from '@yzfe/vue-svgicon'
import '@yzfe/svgicon/lib/svgicon.css'
Vue.component('icon', VueSvgIcon)

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
