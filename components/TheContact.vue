<template>
  <form @submit="handleSubmit" @reset="handleReset" class="container is-max-desktop">
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
      succesful: null,
      body: {
        name: "",
        email: "",
        message: "",
      },
    };
  },

  methods: {
    handleSubmit(evt) {
      evt.preventDefault();
      this.loading = true;

      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleReset() {
      this.body = {
        name: "",
        email: "",
        message: "",
      };
    },
  },
};
</script>

<style></style>
