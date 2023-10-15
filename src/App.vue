<template>
  <main class="app">
    <NavBar v-on:loginClick="toggleLogin" />
    <Banner />
    <Footer />
    <Modal :modalShow.sync="modalShow"/>
  </main>
</template>

<script>
// import Button from "./components/Button.vue";
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    // Button,
    NavBar,
    Banner,
    Footer,
    Modal
  },
  data: function() {
    return {
      modalShow: false
    }
  },
  methods: {
    toggleLogin: function() {
      this.modalShow = true;
    }
  }
};
</script>

<style lang="scss">
  .app {
    background-image: url("./assets/img/bg.png");
    background-size: cover;
  }
</style>
