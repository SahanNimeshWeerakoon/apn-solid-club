import axios from 'axios';

export default {
    data: function() {
        return {
            baseUrl: "http://localhost:5000/"
        }
    },
    methods: {
        login: function(loginData) {
            return axios.post(`${this.baseUrl}login`, loginData);
        },
        register: function(registerData) {
            return axios.post(`${this.baseUrl}register`, registerData);
        },
        findTechRegister: function(registerData) {
            return axios.post(`${this.baseUrl}findTechRegister`, registerData);
        },
        technicianRegister: function(registerData) {
            return axios.post(`${this.baseUrl}technicianRegister`, registerData);
        }
    }
}