import axios from 'axios';

export default {
    methods: {
        login: function(loginData) {
            return new Promise((res, rej) => {
                res(loginData);
            });
        },
        register: function(registerData) {
            return new Promise((res, rej) => {
                res(registerData);
            });
        }
    }
}