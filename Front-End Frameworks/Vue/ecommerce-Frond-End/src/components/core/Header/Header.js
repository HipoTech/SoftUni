// import { mapGetters } from 'vuex'

import cookieParser from '../../shared/helpers/cookieParser';
import apiService from '../../shared/api/ApiService';
// import { usersHepers } from '../../shared/store';

export default {
  name: "Header",
  data: function () {
    return {
      isLoggedIn: false,
      user: ''
    }
  },
  computed: {
    checkIsLoggedIn() {
      const userData = cookieParser('ecom-user-info');
      if (userData) {
        this.isLoggedIn = true;
        this.user = userData;
      } else {
        this.isLoggedIn = false;
      }
    },
    // ...usersHepers.mapGetters([
    //   'getUserLoginSatate',
    // ])
  },
  watch: {
    isLoggedIn: function () {
      console.log('i have watched this');
      return this.user
    }
  },
  created: function () {
    this.checkIsLoggedIn;
  },
  methods: {

    logOut() {
      this.checkIsLoggedIn;
      apiService.logOutUser();
    },
    login() {
      this.checkIsLoggedIn;
    }
  }
};