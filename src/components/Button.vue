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
    &--full {
      width: 100%;
      border-radius: 0.5rem;
    }
    &--tinyRadius {
      border-radius: 0.5rem;
    }
    &--position-right {
      margin-left: auto;
      margin-right: 0;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>