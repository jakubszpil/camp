<template>
  <div class="layout">
    <the-navbar class="layout__navbar" />
    <nuxt class="layout__content" />
    <the-footer class="layout__footer" />
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.layout {
  &__content {
    min-height: 100vh;
  }
}

.page-enter-active,
.page-leave-active {
  transition: opacity 0.2s, transform 0.2s;
}
.page-enter,
.page-leave-to {
  opacity: 0;
  transform-origin: center center;
  transform: scale(0.98);
}
</style>
