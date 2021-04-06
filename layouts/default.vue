<template>
  <div class="layout">
    <the-navbar class="layout__navbar" />
    <b-loading :is-full-page="false" :active="isLoading"></b-loading>
    <transition name="fade">
      <div v-if="!isLoading" class="layout__container">
        <nuxt class="layout__content" />
        <the-footer class="layout__footer" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLoading: true
    };
  },
  mounted() {
    setTimeout(() => {
      this.isLoading = false;
    }, 50);
  }
};
</script>

<style lang="scss">
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.layout {
  &__container {
    /* animation: fadeIn 0.2s 0.6s both; */
  }
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

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
