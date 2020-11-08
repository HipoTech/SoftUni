<template>
  <Header />
  <Home />
  <Footer />
</template>

<script>
import Header from "./components/shared/Header/Header.vue";
import Home from "./components/pages/Home/Home.vue";
import Footer from "./components/shared/Footer/Footer.vue";

export default {
  name: "App",
  components: {
    Header,
    Home,
    Footer,
  },
};
</script>

<style lang="scss" src="./App.scss"/>
