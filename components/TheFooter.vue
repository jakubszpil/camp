<template>
  <footer class="footer section is-small px-0 has-background-light has-text-centered-mobile">
    <base-container class="is-max-fullhd">
      <div class="columns">
        <div class="column px-3">{{ new Date().getFullYear() }} &copy; Wszelkie prawa zastrzeżone</div>
        <div class="column px-3 has-text-centered-mobile has-text-right">
          <b-button class="p-2" type="is-ghost" tag="nuxt-link" to="/regulamin">Regulamin</b-button>
          <b-button class="p-2" type="is-ghost" tag="nuxt-link" to="/faq">Faq</b-button>
        </div>
      </div>
    </base-container>
  </footer>
</template>

<script>
export default {};
</script>

<style></style>
