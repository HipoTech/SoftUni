export default {
  state: {
    isLoggedIn: false,
    userName: null,
    isAdmin: false,
  },
  mutations: {
    logInUser(state, user) {
      state.isLoggedIn = true;
      state.userName = user.userName;
      state.isAdmin = user.isAdmin;
    },
    logOutUser(state) {
      state.isLoggedIn = false;
      state.userName = null;
      state.isAdmin = false;
    },
  },
  getters: {
    getUserState: state => {
      return state.isLoggedIn;
    }
  },
}