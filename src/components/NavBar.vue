<template>
<nav class="nav container pt-5">
    <div class="nav_logo">
        <Logo imgWidth="5rem" fontSize="2.4rem" :fontWeight="400" />
    </div>
    <div class="nav_links">
        <a href="#">About Us</a>
        <Button :btnClasses="{ 'white-text': true, 'ml-2': true }" @click="handleLoginClick">Login</Button>
    </div>
</nav>
</template>
<script>
import Button from "./Button";
import Logo from "./Logo";

export default {
    name: "NavBar",
    components: {
        Button,
        Logo
    },
    methods: {
        handleLoginClick: function() {
            this.$emit('loginClick');
        }
    }
}
</script>
<style lang="scss">
    .nav {
        @include flex(space-between);
        &_logo {
            @include flex(space-around);
            h3 {
                @include flex(space-between);
            }
            img {
                width: 5rem;
            }
            span {
                text-shadow: 0px 0.2rem 0.2rem #00000040;
                font-size: 2.4rem;
                margin-left: 0.5rem;
            }
        }
        &_links {
            a {
                font-size: 1.25rem;
                text-decoration: none;
                padding: 0.625rem;
                font-weight: 600;
                color: $primary-color;
            }
        }
    }
</style>