<template>
    <div class="model-content pt-3">
        <P>
            <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="at" font-scale="1" varient="primary"></b-icon> info@sharecolombo.com </a>
        </P>
        <P>
            <a class="footer_contacts" href="tel:+94112345678"> <b-icon icon="telephone-fill" font-scale="1"></b-icon> +94 11 2345678 </a>
        </P>
        <P>
            <a class="footer_contacts" href="mailto:info@sharecolombo.com"> <b-icon icon="geo-alt-fill" font-scale="1"></b-icon> # 752/5, Dr. Danister De Silva Mawatha, Colombo 09. </a>
        </P>
    </div>
</template>
<script>
export default {
    name: "CallCenterModalContent"
}
</script>
<style lang="scss" scoped>
    a {
        text-decoration: none;
        color: $primary-color;
        font-size: 0.8rem;
        @include flex(flex-start);
        svg {
            margin-right: 0.5rem;
        }
    }
</style>