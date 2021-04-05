<template>
  <form @submit.prevent="handleSubmit" @reset="handleReset" class="container is-max-desktop">
    <div class="columns">
      <div class="column">
        <b-field label="Imię i nazwisko" label-position="on-border">
          <b-input v-model="body.name" />
        </b-field>
      </div>

      <div class="column">
        <b-field label="E-mail" label-position="on-border">
          <b-input type="email" v-model="body.email" />
        </b-field>
      </div>
    </div>

    <b-field label="Treść wiadomości" label-position="on-border">
      <b-input maxlength="200" type="textarea" v-model="body.message"></b-input>
    </b-field>

    <div class="columns">
      <div class="column is-offset-7-desktop is-2-desktop">
        <b-button expanded type="is-primary" class="has-text-weight-bold" outlined native-type="reset">Wyczyść</b-button>
      </div>
      <div class="column is-3-desktop">
        <b-button :loading="loading" expanded type="is-primary" class="has-text-weight-bold" native-type="submit">Wyślij wiadomość</b-button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      successful: null,
      error: null,
      body: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      this.successful = null;
      this.error = null;

      try {
        // const response = await this.$axios.post("/api/contact", this.body);

        // if (response.statusText !== "OK") throw new Error();

        this.successful = true;
        this.loading = false;

        this.$toast({
          message: "Wiadomość została wysłana pomyślnie! :)",
          type: "is-success",
        });

        this.reset();
      } catch (e) {
        this.error = true;
        this.loading = false;

        this.$toast({
          message: "Ups! Wystąpił błąd z wysyłaniem wiadomości :( Spróbuj ponownie",
          type: "is-danger",
        });
      }
    },
    reset() {
      this.body = {
        name: "",
        email: "",
        message: "",
      };
    },
    handleReset() {
      this.successful = null;
      this.error = null;
      this.reset();
    },
  },
};
</script>

<style></style>
