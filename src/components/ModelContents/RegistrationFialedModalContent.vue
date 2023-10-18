<template>
    <div class="modal-content">
        <b-icon icon="emoji-dizzy-fill" size="4"></b-icon>
        <h3 class="pt-4 pb-4">Sorry your registration Failed!</h3>
        <Button @click="handleClose">close</Button>
    </div>
</template>
<script>
import Button from "../Button.vue";

export default {
    name: "RegistrationFialedModalContent",
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
            filter: invert(26%) sepia(100%) saturate(7499%) hue-rotate(3deg) brightness(90%) contrast(90%);
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
        }
    }
</style>