<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import checkUserAuthentication from "./components/shared/helpers/checkUserAuthentication";

import AppHeader from "./components/core/Header/Header.vue";
import AppFooter from "./components/core/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },

  created() {
    const loopCicle = 60 * 1000;
    const checkUserAuthenticationLoop = () => {
      checkUserAuthentication();
      setTimeout(() => {
        checkUserAuthenticationLoop();
      }, loopCicle);
    };
    checkUserAuthenticationLoop();
  },
};
</script>
<style lang="scss" src='./App.scss'></style>