import VueRouter from 'vue-router'
import store from '../components/shared/store';

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
    path: "/create-brand",
    name: "CreateBrandPage",
    component: () => import('../components/pages/CreateBrandPage/CreateBrandPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
  },
  {
    path: "/create-category",
    name: "CreateCategoryPage",
    component: () => import('../components/pages/CreateCategoryPage/CreateCategoryPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
  },
  {
    path: "/create-product",
    name: "CreateProductPage",
    component: () => import('../components/pages/CreateProductPage/CreateProductPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
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
    path: "/product/:id",
    name: "ProductDetails",
    component: () => import('../components/core/ProductDetails/ProductDetails.vue'),
  },
  {
    path: "/edit-product/:id",
    name: "EditProductPage",
    component: () => import('../components/pages/EditProductPage/EditProductPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
  },
  {
    path: "/edit-brand/:id",
    name: "EditBrandPage",
    component: () => import('../components/pages/EditBrandPage/EditBrandPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
  },
  {
    path: "/edit-category/:id",
    name: "EditCategoryPage",
    component: () => import('../components/pages/EditCategoryPage/EditCategoryPage.vue'),
    beforeEnter(to, from, next) { protect(next) },
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
]

const protect = (next) => {
  if (store.state.users.isLoggedIn) {
    next();
  } else {
    router.push({ name: 'LoginOrRegister' });
  }
};

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router