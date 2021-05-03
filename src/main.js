import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import {Tabs, Tab} from 'vue-tabs-component';
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios)
 
Vue.component('tabs', Tabs);
Vue.component('tab', Tab);
 
Vue.use(VueCarousel);

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App)
}).$mount('#app')
