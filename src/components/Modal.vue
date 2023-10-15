<template>
    <div class="modal">
        <b-modal v-model="modal.isVisible" @hidden="handleModalHide" hide-footer>
            <template #modal-title>
            {{ title }}
            </template>
            <slot></slot>
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
        title: { type: String, default: "" },
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
<style lang="scss">
// modal related styling in src/assets/scss/_common.scss
</style>