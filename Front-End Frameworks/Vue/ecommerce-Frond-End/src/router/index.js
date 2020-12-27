import VueRouter from 'vue-router'
// import VueRouter, { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: "/",
    component: () => import('../components/pages/Home/Home.vue'),
  },
  {
    path: "/home",
    name: "Home",
    component: () => import('../components/pages/Home/Home.vue'),
  },
  {
    path: "/login-register",
    name: "LoginOrRegister",
    component: () => import('../components/pages/LoginOrRegister/LoginOrRegister.vue'),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "PageNotFound",
    component: () => import('../components/pages/PageNotFound/PageNotFound.vue'),
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
