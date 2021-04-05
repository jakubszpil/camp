<template>
  <component :is="tagname" :class="`title is-${asVariant || variant}`" v-bind="$attrs">
    <slot />
  </component>
</template>

<script>
export default {
  props: {
    variant: {
      type: String,
      default: "1"
    },
    asVariant: {
      type: String,
      default: null
    },
    tag: {
      type: String,
      default: null
    }
  },
  computed: {
    tagname: function() {
      if (this.tag) return this.tag;
      else return `h${this.variant}`;
    }
  }
};
</script>

<style></style>
