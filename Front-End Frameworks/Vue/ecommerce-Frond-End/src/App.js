import checkUserAuthentication from "./components/shared/helpers/checkUserAuthentication";
import AppHeader from "./components/core/Header/Header.vue";
import AppFooter from "./components/core/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  watch: {
    $route() {
      checkUserAuthentication();
    }
  }
}