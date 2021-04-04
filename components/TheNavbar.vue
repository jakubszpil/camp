<template>
  <b-navbar wrapper-class="container is-max-fullhd" fixed-top shadow centered spaced close-on-click>
    <template #brand>
      <b-navbar-item tag="nuxt-link" to="/">
        <base-heading variant="1" asVariant="5">esportscamp</base-heading>
      </b-navbar-item>
    </template>
    <template #start>
      <b-navbar-item tag="nuxt-link" to="/szkolenia-indywidualne" class="has-text-primary has-text-weight-bold"
        >Szkolenia indywidualne</b-navbar-item
      >
    </template>
    <template #end>
      <b-navbar-dropdown collapsible label="Obóz">
        <b-navbar-item tag="nuxt-link" to="/#o-obozie">O obozie</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/#dla-kogo">Dla kogo?</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/#dlaczego">Dlaczego?</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/#kiedy">Kiedy?</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/#czego-nauczamy">Czego nauczamy?</b-navbar-item>
        <b-navbar-item tag="nuxt-link" to="/#harmonogram-kolonii">Harmonogram</b-navbar-item>
      </b-navbar-dropdown>
      <b-navbar-item tag="nuxt-link" to="/#dla-kogo">Oferta</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/#kontakt">Kontakt</b-navbar-item>
      <b-navbar-item tag="nuxt-link" to="/zapisy">
        <base-button class="is-primary px-3">Zapisz się już teraz!</base-button>
      </b-navbar-item>

      <b-navbar-item tag="nuxt-link" to="/faq">
        <base-button class="is-primary px-3 is-outlined">FAQ</base-button>
      </b-navbar-item>
      <b-navbar-item tag="div" class="is-flex">
        <b-button tag="a" type="is-text" href="#" target="_blank" class="mr-2">
          <b-icon icon="facebook" type="is-gray" />
        </b-button>
        <b-button tag="a" type="is-text" href="#" target="_blank">
          <b-icon icon="instagram" type="is-gray" />
        </b-button>
      </b-navbar-item>
    </template>
  </b-navbar>
</template>

<script>
export default {
  watch: {
    $route: {
      handler: async function(to, from) {
        if (to && from) {
          if (from?.path == to?.path) document.documentElement.classList.add("has-smooth-scrolling");
          else {
            await document.documentElement.classList.remove("has-smooth-scrolling");
            setTimeout(() => {
              document.documentElement.classList.add("has-smooth-scrolling");
            }, 250);
          }
        }
      },
      immediate: false
    }
  }
};
</script>

<style>
.has-smooth-scrolling {
  scroll-behavior: smooth !important;
}
</style>
