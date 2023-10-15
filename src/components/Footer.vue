<template>
<footer class="footer white-text">
    <div class="container">
        <div class="row">
            <div class="col-md-4">
                <Logo imgWidth="3rem" fontSize="3.25rem" :fontWeight="900" color="#FFFFFF" />
                <p>Empowering Every Home with Hassle-Free Solutions</p>
                <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="at" font-scale="4"></b-icon> info@sharecolombo.com </a>
                <a class="footer_contacts" href="tel:+94112345678"> <b-icon icon="telephone-fill" font-scale="4"></b-icon> +94 11 2345678 </a>
                <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="geo-alt-fill" font-scale="4"></b-icon> # 752/5, Dr. Danister De Silva Mawatha, Colombo 09. </a>
            </div>
            <div class="col-md-8">
                <div class="footer_pagelinks">
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
                <div class="footer_social">
                    <div>
                        <h3>Follow Us</h3>
                        <div>
                            <a href="#"><b-icon icon="facebook" font-scale="1"></b-icon></a>
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
    a {
        color: $secondary-color;
    }
}
</style>