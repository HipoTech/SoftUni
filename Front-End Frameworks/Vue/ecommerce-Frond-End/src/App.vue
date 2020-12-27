<template>
  <div>
    <app-header />
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import AppHeader from "./components/core/Header/Header.vue";
import AppFooter from "./components/core/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>
<style lang="scss" src='./App.scss'></style>
