import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader
import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from "./router"
import request from "./network/http"

import "./global.css";
// import './registerServiceWorker'


Vue.config.productionTip = false;
Vue.prototype.$request = request;
Vue.use(vuetify);
new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
