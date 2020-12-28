import VueRouter from 'vue-router'

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
    path: "/shop",
    name: "Shop",
    component: () => import('../components/pages/Shop/Shop.vue'),
  },
  {
    path: "/brands",
    name: "Brands",
    component: () => import('../components/pages/Brands/Brands.vue'),
  },
  {
    path: "/categories",
    name: "Categories",
    component: () => import('../components/pages/Categories/Categories.vue'),
  },
  {
    path: "/category/:id",
    name: "ProductsByCategory",
    component: () => import('../components/pages/ProductsByCategory/ProductsByCategory.vue'),
  },
  {
    path: "/brand/:id",
    name: "ProductsByBrand",
    component: () => import('../components/pages/ProductsByBrand/ProductsByBrand.vue'),
  },
  {
    path: "/login-register",
    name: "LoginOrRegister",
    component: () => import('../components/pages/LoginOrRegister/LoginOrRegister.vue'),
  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    component: () => import('../components/core/ProductDetails/ProductDetails.vue'),
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
