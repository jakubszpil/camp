<template>
  <section>
    <b-carousel class="container is-max-desktop" :pause-hover="false" :arrow="false" :arrow-hover="false" :indicator="false" :interval="3000">
      <b-carousel-item v-for="(item, key) in items" :key="key">
        <section class="hero opinion p-2">
          <div class="opinion-body ">
            <p class="p-6 has-text-centered">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam numquam natus blanditiis voluptates sit vel optio. Exercitationem
              eaque ipsum optio accusantium tempora quia delectus cumque quas animi, officiis cupiditate deserunt.
            </p>
          </div>
          <div class="opinion-footer mt-6 has-text-centered">
            <p>Name</p>
            <p class="has-text-weight-bold">{{ item.text }}</p>
          </div>
        </section>
      </b-carousel-item>
    </b-carousel>
  </section>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { text: "Opinia 1", color: "primary" },
        { text: "Opinia 2", color: "info" },
        { text: "Opinia 3", color: "success" },
        { text: "Opinia 4", color: "warning" },
        { text: "Opinia 5", color: "danger" }
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/main.scss";
.opinion {
  &-body {
    border-top: 2px $primary solid;
    border-bottom: 2px $primary solid;
    position: relative;

    &::before,
    &::after {
      display: block;
      content: '"';
      color: $primary;
      font-size: 4rem;
      line-height: 3rem;
      font-style: italic;
      position: absolute;
      padding: 0 !important;
      margin: 0 !important;
    }

    &::before {
      top: 0;
      left: 0;
    }
    &::after {
      right: 0;
      bottom: 0;
      transform: rotate(180deg);
    }
  }
}
</style>
