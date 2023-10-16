<template>
    <div class="modal-content">
        <b-icon icon="check-lg" size="4"></b-icon>
        <h3>Registration completed successfully!</h3>
        <Button @click="handleClose">close</Button>
    </div>
</template>
<script>
import Button from "../Button.vue";

export default {
    name: "RegistrationSuccessModalContent",
    data: function() {
        return {
        }
    },
    components: {
        Button
    },
    methods: {
        handleClose: function() {
            this.$emit('modalClose');
        }
    }
}
</script>
<style lang="scss" scoped>
    .modal-content {
        text-align: center;
        svg{
            filter: invert(20%) sepia(98%) saturate(4070%) hue-rotate(107deg) brightness(97%) contrast(102%);
            font-size: 5rem;
            margin: auto;
        }
        h3 {
            font-size: 1.5rem;
            font-weight: 500;
        }
        button {
            margin-right: 0;
            margin-left: auto;
            color: $secondary-color;
        }
    }
</style>