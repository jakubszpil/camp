<template>
  <component :is="tag" :class="`title is-${asVariant || variant}`" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "1",
    },
    asVariant: {
      type: String,
      default: null,
    },
  },
  computed: {
    tag: function () {
      return `h${this.variant}`;
    },
  },
};
</script>

<style></style>
