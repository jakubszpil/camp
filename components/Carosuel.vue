<template>
  <VueSlickCarousel v-bind="settings" class="carosuel">
    <slot />
  </VueSlickCarousel>
</template>

<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

export default {
  name: "Carosuel",
  data() {
    return {
      settings: {
        dots: false,
        infinite: true,
        speed: 400,
        slidesToShow: this.$slots.default.filter(item => item.tag).length - 1,
        slidesToScroll: 1,
        arrows: false,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        pauseOnHover: false,
        responsive: [
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      }
    };
  },
  components: { VueSlickCarousel }
};
</script>

<style>
.carousel {
  overflow-x: hidden;
}
.slick-list,
.slick-track {
  overflow: hidden;
}
</style>
