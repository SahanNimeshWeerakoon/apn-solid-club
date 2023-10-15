<template>
<footer class="footer white-text pt-5 pb-5">
    <div class="container">
        <div class="row">
            <div class="col-md-4 footer_logo">
                <Logo imgWidth="3rem" fontSize="3.25rem" :fontWeight="900" color="#FFFFFF" />
                <p class="white-text">Empowering Every Home with Hassle-Free Solutions</p>
                <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="at" font-scale="1" varient="primary"></b-icon> info@sharecolombo.com </a>
                <a class="footer_contacts" href="tel:+94112345678"> <b-icon icon="telephone-fill" font-scale="1"></b-icon> +94 11 2345678 </a>
                <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="geo-alt-fill" font-scale="1"></b-icon> # 752/5, Dr. Danister De Silva Mawatha, Colombo 09. </a>
            </div>
            <div class="col-md-8">
                <div class="footer_pagelinks pb-5">
                    <div>
                        <h3>About Us</h3>
                        <a href="#">Who we are</a>
                        <a href="#">What we do</a>
                    </div>
                    <div>
                        <h3>Services</h3>
                        <a href="#">We give Technicians</a>
                        <a href="#">We give products</a>
                    </div>
                    <div>
                        <h3>Support</h3>
                        <a href="#">FAQs</a>
                        <a href="#">Help</a>
                    </div>
                </div>
                <div class="footer_social pt-5">
                    <div class="footer_followus">
                        <h3>Follow Us</h3>
                        <div>
                            <a href="#"><b-icon class="text-danger" icon="facebook" font-scale="1"></b-icon></a>
                            <a href="#"><b-icon icon="twitter" font-scale="1"></b-icon></a>
                            <a href="#"><b-icon icon="google" font-scale="1"></b-icon></a>
                            <a href="#"><b-icon icon="instagram" font-scale="1"></b-icon></a>
                            <a href="#"><b-icon icon="linkedin" font-scale="1"></b-icon></a>
                            <a href="#"><b-icon icon="github" font-scale="1"></b-icon></a>
                        </div>
                    </div>
                    <div>
                        <a href="#">Privacy Policy</a>
                    </div>
                    <div>
                        <a href="#">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
</template>
<script>
import Logo from './Logo.vue';

export default {
    name: "Footer",
    components: {
        Logo
    }
}
</script>
<style lang="scss">
.footer {
    background: $primary-color;
    svg {
        filter: invert(100%) sepia(0%) saturate(2%) hue-rotate(309deg) brightness(117%) contrast(101%);
    }
    a {
        color: $secondary-color;
        display: block;
        text-decoration: none;
    }
    h3 {
        color: $secondary-color;
    }
    &_logo {
        img {
            margin-right: 1rem;
        }
    }
    &_pagelinks, &_social {
        @include flex(space-around, flex-start);
    }
    &_pagelinks {
        border-bottom: 1px solid $secondary-color;
        
    }
    &_followus {
        a {
            display: inline;
        }
        div {
            @include flex(space-around);
        }
    }
}
</style>