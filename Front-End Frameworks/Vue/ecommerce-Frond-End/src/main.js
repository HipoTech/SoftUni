import Vue from 'vue';
import Vuelidate from 'vuelidate';
import VueRouter from 'vue-router';
import store from './components/shared/store';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false


Vue.use(Vuelidate);
Vue.use(VueRouter)


new Vue({
  render: h => h(App),
  router,
  vuetify,
  store: store
})
  .$mount('#app')
