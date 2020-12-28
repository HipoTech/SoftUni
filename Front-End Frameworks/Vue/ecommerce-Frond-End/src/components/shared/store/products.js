const products = {
  state: {
    count: 0,
  },
  mutations: {
    logOutUser() {
      this.isLoggedIn = false;
    },
    logInUser() {
      this.isLoggedIn = true;
    },
  },
  getters: {
    getUserLoginSatate() {
      return this.isLoggedIn;
    }
  },
}

export default {
  products,
}