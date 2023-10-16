<template>
    <div class="modal-content">
        <div class="form-floating">
            <input type="text" class="form-control" v-model="login.formData.mobile" id="floatingMobileNumber" placeholder="+94711234567">
            <label for="floatingMobileNumber">Mobile No.</label>
        </div>
        <b-input-group class="mt-3">
            <template #append>
                <b-input-group-text @click="toggleShowPassword">
                    <b-icon icon="eye-slash-fill" font-scale="1" v-if="login.showPassword"></b-icon>
                    <b-icon icon="eye-fill" font-scale="1" v-else></b-icon>
                </b-input-group-text>
            </template>
            <div class="form-floating password">
                <input :type="login.passwordInputType" v-model="login.formData.password" class="form-control" id="floatingPassword" placeholder="password@123">
                <label for="floatingPassword">Password</label>
            </div>
            <!--<b-form-input :type="login.passwordInputType"></b-form-input>-->
        </b-input-group>
        <div class="form-group mt-3 mb-3">
            <input type="checkbox" class="mr-1" v-model="login.formData.rememberMe" />
            <small class="remember">Remember Me</small>
        </div>
        <Button :btnClasses="{'button--full': true }" @click="handleSubmit('submit')">Submit</Button>
        <div class="mt-3 mb-3">
            <small>
                Forgot <a href="#">Password? </a>
            </small>
        </div>
        <Button :btnClasses="{'button--full': true }" @click="handleSubmit('register')">Register</Button>
        <div class="row mt-3">
            <div class="col-6"></div>
            <div class="col-6">
                <Button :btnClasses="{'form-control': true, 'login-with': true }">
                    Login with
                    <img src="https://seeklogo.com/images/M/microsoft-365-2022-logo-7B23759A49-seeklogo.com.png" style="width:25px;" class="">
                </Button>
            </div>
        </div>
    </div>
</template>
<script>
import Button from "../Button";

export default {
    name: "LoginModalContent",
    props: { type: String },
    data: function() {
        return {
            login: {
                showPassword: false,
                passwordInputType: "password",
                formData: {
                    mobile: "",
                    password: "",
                    rememberMe: false
                }
            }
        }
    },
    components: {
        Button
    },
    methods: {
        toggleShowPassword: function() {
            this.login.showPassword = !this.login.showPassword;
            this.login.passwordInputType = this.login.showPassword ? "text" : "password";
        },
        handleSubmit: function(type) {
            this.$emit('modalClose', { type, formData: this.login.formData });
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal-content {
        .form-floating {
            transform: scale(1);
            margin: 0;
            width: auto;
        }
        button {
            color: $secondary-color;
            &.form-control {
                color: $primary-color;
            }
        }
        .input-group-text {
            padding: 1.15rem 1rem !important;
            border-radius: 0 !important;
            &:hover {
                cursor: pointer;
            }
        }
        small, a {
            font-size: 0.8rem;
            display: inline-block;
            &.remember {
                padding-left: 0.5rem;
            }
        }
        a {
            color: $primary-color;
        }
        .login-with {
            @include flex();
            img {
                margin-left: 0.5rem;
            }
        }
    }
</style>