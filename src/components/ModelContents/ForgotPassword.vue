<template>
    <div class="modal-content">
        <div class="form-floating">
            <input type="text" class="form-control" v-model="forgotPw.formData.mobile" id="floatingMobileNumber" placeholder="+94711234567">
            <label for="floatingMobileNumber">Mobile No.</label>
        </div>
        <Button :btnClasses="{'button--full': true, 'mt-3': true }" @click="handleSubmit('submit')">Submit</Button>
        <Button :btnClasses="{'button--full': true, 'mt-3': true }" @click="handleSubmit('login')">Login</Button>
    </div>
</template>
<script>
import Button from "../Button";

export default {
    name: "ForgotPassword",
    props: { type: String },
    data: function() {
        return {
            forgotPw: {
                showPassword: false,
                passwordInputType: "password",
                formData: {
                    mobile: ""
                }
            }
        }
    },
    components: {
        Button
    },
    methods: {
        handleSubmit: function(type) {
            this.$emit('modalClose', { type, formData: this.forgotPw.formData });
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