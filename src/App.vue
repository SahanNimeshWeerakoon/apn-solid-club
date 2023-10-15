<template>
<!-- 
<Button :btnClasses="{'btn--lg': true}">test</Button>
-->
<main class="app">
  <NavBar />
  <Banner />
  <Footer />
</main>
</template>

<script>
// import Button from "./components/Button.vue";
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    // Button,
    NavBar,
    Banner,
    Footer
  },
};
</script>

<style lang="scss">
  .app {
    background-image: url("./assets/img/bg.png");
    background-size: cover;
  }
</style>
