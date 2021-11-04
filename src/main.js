import Vue from 'vue'
import App from './App.vue'
import router from './router' // tambahkan ini
import vuetify from './plugins/vuetify'; // tambahkan ini
import {rtdbPlugin} from 'vuefire' // tambahkan ini

Vue.config.productionTip = false
Vue.use(rtdbPlugin)//tambahkan ini

new Vue({
  router,  // tambahkan ini
  vuetify,  // tambahkan ini
  render: h => h(App)
}).$mount('#app')
