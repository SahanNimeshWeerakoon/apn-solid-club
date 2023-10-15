<template>
    <div class="Modal">
        <b-modal v-model="modal.isVisible" @hidden="handleModalHide">
            <p class="my-4">Hello from modal!</p>
        </b-modal>
    </div>
</template>
<script>
export default {
    name: "Modal",
    data: function() {
        return {
            modal: {
                isVisible: false
            }
        }
    },
    props: {
        modalShow: { type: Boolean, default: false }
    },
    methods: {
        handleModalHide: function() {
            this.$emit('update:modalShow', false);
        }
    },
    watch: {
        modalShow: function(val) {
            this.modal.isVisible = val;
        }
    }
}
</script>
<style lang="scss"></style>