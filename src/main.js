import Vue from "vue";
import axios from "axios";
//import VueAxios from "vue-axios";
import App from "./App.vue";
import Vuex from "vuex";
import router from "./router";
import store from "./store";
import "./assets/scss/index.scss";
import VueObserveVisibility from 'vue-observe-visibility'

Vue.use(VueObserveVisibility)
Vue.use(axios);
Vue.use(Vuex);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
