import VueRouter from "vue-router";
import Home from '../components/pages/Home/Home.vue';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
  ]
})

export default router;