import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import store from './components/shared/store';

import App from './App.vue';
import router from './router';


Vue.config.productionTip = false

Vue.use(Vuelidate);
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router,
  store: store,
})
  .$mount('#app')
