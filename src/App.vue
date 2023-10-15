<template>
<!-- 
<Button :btnClasses="{'btn--lg': true}">test</Button>
-->
<div class="app">
  <NavBar />
  <Banner />
  <Footer />
</div>
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

</style>
