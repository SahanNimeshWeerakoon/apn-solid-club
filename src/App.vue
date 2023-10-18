<template>
  <main class="app">
    <NavBar v-on:loginClick="toggleLogin" />
    <Banner @clickRegisterTech="toggleRegisterTechModal" @clickFindTech="toggleFindTechModal" />
    <Footer />
    <Modal :modalShow.sync="modal.show" :title="modal.title" :size="modal.size">
      <LoginModalContent v-if="modal.type === 'login'" @modalClose="handleLoginClose" />
      <ForgotPassword v-if="modal.type === 'forgotPassword'" @modalClose="handleForgotPasswordClose" />
      <!-- Normal Registration -->
      <RegisterModalContent v-if="modal.type === 'register'" @modalClose="handleRegisterClose" />
      <!-- Register customer to find Technicial -->
      <RegisterModalContent v-if="modal.type === 'findTechRegister'" @modalClose="handleFindTechRegisterClose" />
      <!-- Find a Technician first modal view -->
      <FindTechModalContent v-if="modal.type === 'findTech'" @modalClose="handleFindTechClose" />
      <!-- find a Tehnician - create Job -->
      <FindTechCreateModalContent v-if="modal.type === 'findTechCreate'" @modalClose="handleFindTechCreateClose" />
      <!-- Find a Technician - Register a customer -->
      <RegisterAsTechnicianModalContent v-if="modal.type === 'registerAsTech'" @modalClose="handleRegisterAsTechnicianClose" />
      <!-- Modal after successfull Registration -->
      <RegistrationSuccessModalContent v-if="modal.type === 'registerSuccess'" @modalClose="modalClose" />
      <RegistrationFialedModalContent v-if="modal.type === 'registerFailed'" @modalClose="modalClose" />
      <TechnicianRegisterModalContent v-if="modal.type === 'technicianRegister'" @modalClose="handleTechnicianRegisterClose" />
      <CallCenterModalContent v-if="modal.type === 'callCenter'" @modalClose="modalClose" />
    </Modal>
  </main>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import Banner from "./components/Banner.vue";
import Footer from "./components/Footer.vue";
import Modal from "./components/Modal.vue";
import LoginModalContent from "./components/ModelContents/LoginModalContent.vue";
import ForgotPassword from "./components/ModelContents/ForgotPassword.vue";
import RegisterModalContent from "./components/ModelContents/RegisterModalContent.vue";
import FindTechModalContent from "./components/ModelContents/FindTechModalContent.vue";
import FindTechCreateModalContent from "./components/ModelContents/FindTechCreateModalContent.vue";
import RegisterAsTechnicianModalContent from "./components/ModelContents/RegisterAsTechnicianModalContent.vue";
import RegistrationSuccessModalContent from "./components/ModelContents/RegistrationSuccessModalContent.vue";
import RegistrationFialedModalContent from "./components/ModelContents/RegistrationFialedModalContent.vue";
import TechnicianRegisterModalContent from "./components/ModelContents/TechnicianRegisterModalContent.vue";
import CallCenterModalContent from "./components/ModelContents/CallCenterModalContent.vue";
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
    ForgotPassword,
    RegisterModalContent,
    FindTechModalContent,
    FindTechCreateModalContent,
    RegisterAsTechnicianModalContent,
    RegistrationSuccessModalContent,
    RegistrationFialedModalContent,
    TechnicianRegisterModalContent,
    CallCenterModalContent
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
      this.setModalData(true, "Please Login", "login", "md");
    },
    handleLoginClose: async function(e) {
      if(e.type == 'register') {
        this.setModalData(true, "Customer Registration", "register", "md");
      } else if(e.type == 'forgotPassword') {
        this.setModalData(true, "Please login", "forgotPassword", "md");
      } else {
        let result = await this.login(e.formData);
      }
    },
    handleForgotPasswordClose: async function(e) {
      if(e.type=='submit') {
        let result = await this.forgotPassword(e.formData);
      } else if(e.type=='login') {
        this.setModalData(true, "Please Login", "login", "md");
      }
    },
    handleRegisterClose: async function(e) {
      let result = await this.register(e.formData);
      this.setModalData(true, "Customer Registration", "registerSuccess", "md");
    },
    handleFindTechRegisterClose: async function(e) {
      let { data } = await this.findTechRegister(e.formData);
      if(data.status) {
        this.setModalData(true, "Customer Registration", "registerSuccess", "md");
      } else {
        this.setModalData(true, "Customer Registration", "registerFailed", "md");
      }
      // this.modalClose();
    },
    handleTechnicianRegisterClose: async function(e) {
      let result = await this.technicianRegister(e.formData);
      this.modalClose();
    },
    handleFindTechClose: function(e) {
      this.setModalData(true, "Find a Technician - Create Job", "findTechCreate", "xl");
    },
    handleFindTechCreateClose: function(e) {
      this.setModalData(true, "Find a Technician - Register Customer", "findTechRegister", "md");
    },
    toggleRegisterTechModal: function() {
      this.setModalData(true, "", "registerAsTech", "md");
    },
    toggleFindTechModal: function() {
      this.setModalData(true, "Find a Technician", "findTech", "md");
    },
    handleRegisterAsTechnicianClose: function(e) {
      if(e === 'self') {
        this.setModalData(true, "Technician Registration", "technicianRegister", "md");
      } else if( e === 'callCenter') {
        this.setModalData(true, "Solid Club Call Center", "callCenter", "md");
      }
    },
    modalClose: function() {
      this.setModalData(false, "", "", "md");
    },
    setModalData: function(show, title, type, size) {
      this.modal.show = show;
      this.modal.title = title;
      this.modal.type = type;
      this.modal.size = size;
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
