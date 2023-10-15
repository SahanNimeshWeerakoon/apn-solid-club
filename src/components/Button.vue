<template>
<button class="button" :class="{...btnClasses}" @click="$emit('click')">
    <slot></slot>
</button>
</template>
<script>
export default {
    name: "Button",
    props: {
        btnClasses: { type: Object, default: () => ({}) }
    }
}
</script>
<style lang="scss">
  .button {
    background: $primary-color;
    color: #FFFFFF;
    width: 7.5rem;
    height: 2.5rem;
    border: none;
    border-radius: 1.25rem;
    font-size: 1rem;
    &--lg {
      width: 12.5rem;
      height: 5rem;
      font-size: 1.25rem;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>