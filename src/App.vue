<template>
  <main class="app">
    <NavBar v-on:loginClick="toggleLogin" />
    <Banner @clickRegisterTech="toggleRegisterTechModal" @clickFindTech="toggleFindTechModal" />
    <Footer />
    <Modal :modalShow.sync="modal.show" :title="modal.title">
      <LoginModalContent v-if="modal.type === 'login'" @modalClose="handleLoginClose" />
      <RegisterModalContent v-if="modal.type === 'register'" @modalClose="handleRegisterClose" />
      <FindTechModalContent v-if="modal.type === 'register'" @modalClose="handleRegisterClose" />
      <RegisterTechModalContent v-if="modal.type === 'register'" @modalClose="handleRegisterClose" />
    </Modal>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import LoginModalContent from "./components/ModelContents/LoginModalContent.vue";
import RegisterModalContent from "./components/ModelContents/RegisterModalContent.vue";
import FindTechModalContent from "./components/ModelContents/FindTechModalContent.vue";
import RegisterTechModalContent from "./components/ModelContents/RegisterTechModalContent.vue";
import apiMixin from './mixins/apiCalls';

export default {
  name: "App",
  mixins: [apiMixin],
  components: {
    NavBar,
    Banner,
    Footer,
    Modal,
    LoginModalContent,
    RegisterModalContent,
    FindTechModalContent,
    RegisterTechModalContent
  },
  data: function() {
    return {
      modal: {
        show: false,
        title: "",
        type: ""
      }
    }
  },
  methods: {
    toggleLogin: function() {
      this.modal.show = true;
      this.modal.title = "Please Login";
      this.modal.type = "login"
    },
    handleLoginClose: async function(e) {
      if(e.type == 'register') {
        this.setModalData(true, "Customer Registration", "register");
      } else {
        let result = await this.login(e.formData);
      }
    },
    handleRegisterClose: async function(e) {
      let result = await this.register(e.formData);
      this.setModalData(false, "", "");
    },
    toggleRegisterTechModal: function() {
      this.setModalData(true, "", "registerTech");
    },
    toggleFindTechModal: function() {
      this.setModalData(true, "Find a Technician", "findTech");
    },
    setModalData: function(show, title, type) {
      this.modal.show = show;
      this.modal.title = title;
      this.modal.type = type;
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
