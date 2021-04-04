<template>
  <section class="section px-0 is-medium" :id="id">
    <base-container tag="header" v-if="heading" class="mb-6 mt-2">
      <base-heading variant="2" asVariant="3" class="has-text-centered py-5" :class="[textColor, headingClass]">{{ heading }}</base-heading>
    </base-container>
    <base-container :class="[textColor, wrapperClass]">
      <slot />
    </base-container>
  </section>
</template>

<script>
export default {
  props: {
    wrapperClass: {
      type: String,
      default: null
    },
    headingClass: {
      type: String,
      default: null
    },
    heading: {
      type: String,
      default: null
    },
    text: {
      type: String,
      defaut: "black"
    }
  },
  computed: {
    id: function() {
      return this.heading
        .replace(/[^\w\s]/gi, "")
        .split(" ")
        .join("-")
        .toLowerCase();
    },
    textColor: function() {
      return `has-text-${this.text}`;
    }
  }
};
</script>

<style></style>
