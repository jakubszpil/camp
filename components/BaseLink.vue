<template>
  <component :is="tag" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    external: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tag() {
      return this.external ? "a" : "nuxt-link";
    }
  }
};
</script>

<style></style>
