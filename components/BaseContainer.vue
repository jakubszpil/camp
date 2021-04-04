<template>
  <component class="container is-max-fullhd px-3" :is="tag">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    tag: {
      type: String,
      default: "div"
    }
  }
};
</script>

<style></style>
