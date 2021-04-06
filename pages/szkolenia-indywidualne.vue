<template>
  <main>
    <base-section heading="Szkolenia indywidualne" class="has-text-centered">
      <base-heading variant="4" class="has-text-primary">Zapraszamy do udziału w szkoleniach indywidualnych on-line z</base-heading>
      <div class="columns is-mobile games">
        <base-text class="column">game</base-text>
        <base-text class="column">game</base-text>
      </div>
      <div class="columns pt-3 pb-6 container is-max-desktop grid-container">
        <div class="column columns is-mobile" v-for="parentItem in [2, 4]" :key="parentItem">
          <div class="column" v-for="item in [2, 3]" :key="item">
            <b-icon
              class="is-inline"
              custom-size="icon-size"
              :type="colors[(Number(parentItem) + Number(item)) % 4]"
              :icon="icons[(Number(parentItem) + Number(item)) % 4]"
            ></b-icon>
            <base-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nesciunt!</base-text>
          </div>
        </div>
      </div>
      <div>
        <base-text class=" pt-3 pb-6">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, aperiam? Illo nulla tempora deserunt quidem porro ipsa odio sed culpa
          explicabo earum reiciendis molestias voluptas, itaque maiores? Vitae, culpa facilis.</base-text
        >
        <base-text class="mt-4"
          >Więcej informacji i złoszenia: <br />
          Mail: Lorem, ipsum dolor. <br />
          Tel.: +48 111 111 111</base-text
        >
      </div>
    </base-section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      colors: ["is-primary", "is-info", "is-success", "is-dark"],
      icons: ["lightbulb-on-outline", "notebook-outline", "finance", "account-supervisor"]
    };
  }
};
</script>

<style>
.icon-size {
  font-size: 6rem !important;
}

.games {
  max-width: 60ch;
  margin: 0 auto;
}

.grid-container {
  margin: 0 auto;
}
</style>
