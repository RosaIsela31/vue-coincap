import Vue from "vue";
import App from "./App.vue";
import "@/assets/css/tailwind.css";
import Chartick from "vue-chartkick";
import Chart from "chart.js";
import { VueSpinners } from "@saeris/vue-spinners";

import router from "@/router";
import { dollarFilter, percetFilter } from "@/filters";

Vue.use(Chartick.use(Chart));
Vue.use(VueSpinners);
Vue.filter("dollar", dollarFilter);
Vue.filter("percent", percetFilter);

Vue.config.productionTip = false;

new Vue({
  router: router,
  render: (h) => h(App),
}).$mount("#app");
