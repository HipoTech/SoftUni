import Vuex, { createNamespacedHelpers } from "vuex";


import users from "./users";
// import app from "../.././../main";

// app.use(Vuex);

export default new Vuex.Store({
  modules: {
    users,
  }
});

export const usersHepers = createNamespacedHelpers(users);