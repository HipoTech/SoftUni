import cookieParser from '../../shared/helpers/cookieParser';
import apiService from '../../shared/api/ApiService';

export default {
  name: "Header",

  computed: {
    isLoggedIn() { return this.$store.state.users.isLoggedIn },
    userName() { return this.$store.state.users.userName },
    isAdmin() { return this.$store.state.users.isAdmin },
  },

  created() {
    const user = cookieParser('ecom-user-info');
    if (user) {
      this.$store.commit('logInUser', user);
    } else {
      this.$store.commit('logOutUser');
    }
  },

  watch: {

  },

  methods: {
    logOut: function () {
      this.$store.commit('logOutUser');
      apiService.logOutUser();
    },
  }
};