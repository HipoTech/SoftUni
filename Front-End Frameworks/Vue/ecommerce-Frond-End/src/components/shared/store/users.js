const users = {
  state: {
    isLoggedIn: false,
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
  users,
}