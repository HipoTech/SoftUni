import Vue from 'vue';
import Vuex from "vuex";


import users from "./users";
// import products from "./products";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    users
  }
})
export default store;