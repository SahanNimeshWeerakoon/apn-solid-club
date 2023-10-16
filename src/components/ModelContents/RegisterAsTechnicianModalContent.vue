<template>
    <div class="modal-content pb-2">
        <Button :btnClasses="{'mt-3': true, 'button--lg': true}" @click="handleSubmit('self')">Self Registration</Button>
        <Button :btnClasses="{'mt-3': true, 'button--lg': true}" @click="handleSubmit('callCenter')">Contact Call Center</Button>
    </div>
</template>
<script>
import Button from "../Button";

export default {
    name: "RegisterAsTechnicianModalContent",
    components: {
        Button
    },
    methods: {
        handleSubmit: function(type) {
            this.$emit('modalClose', type);
        }
    }
}
</script>
<style lang="scss" scoped>
.modal-content {
    @include flex();
    button {
        color: $secondary-color;
    }
}
</style>