<template>
  <Header />
  <router-view />
  <Footer />
</template>

<script>
import Header from "./components/shared/Header/Header.vue";
import Footer from "./components/shared/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang="scss" src='./App.scss'></style>
