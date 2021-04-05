<template>
  <form @submit.prevent="handleSubmit" @reset="handleReset" class="container is-max-desktop">
    <b-field label="Wybierz turnus*">
      <b-select expanded v-model="body.stay">
        <option v-for="(stay, key) in stays" :value="stay" :key="key">{{ stay }}</option>
      </b-select>
    </b-field>
    <hr />
    <p class="has-text-primary has-text-weight-bold mt-6 subtitle is-spaced">Informacje o uczestniku</p>
    <div class="columns">
      <div class="column">
        <b-field label="Imię i nazwisko*">
          <b-input v-model="body.name" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Data urodzenia*">
          <b-datepicker
            v-model="body.birthday"
            :show-week-number="false"
            :locale="'pl-PL'"
            placeholder="Kliknij by wybrać datę urodzenia"
            icon="calendar-today"
            trap-focus
          >
          </b-datepicker>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Szkoła*">
          <b-input v-model="body.school" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Numer telefonu">
          <b-input v-model="body.phoneNumber" />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Discord">
          <b-input v-model="body.discord" />
        </b-field>
      </div>
      <div class="column"></div>
    </div>
    <hr />
    <p class="has-text-primary has-text-weight-bold mt-6 subtitle is-spaced">Informacje o opiekunie/rodzicu</p>
    <div class="columns">
      <div class="column">
        <b-field label="Imię i nazwisko opiekuna/rodzica*">
          <b-input v-model="body.guardianName" />
        </b-field>
      </div>
      <div class="column">
        <b-field label="Numer telefonu*">
          <b-input v-model="body.guardianPhoneNumber" />
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="E-mail*">
          <b-input type="email" v-model="body.guardianEmail" />
        </b-field>
      </div>
      <div class="column"></div>
    </div>
    <hr />
    <p class="has-text-primary has-text-weight-bold mt-6 subtitle is-spaced">Dodatkowe informacje</p>
    <div class="columns">
      <div class="column">
        <b-field label="Informacje o diecie">
          <b-input v-model="body.dietInformation" type="textarea" maxlength="100" size="is-small"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field label="Informacje o zdrowiu">
          <b-input v-model="body.healthInformation" type="textarea" maxlength="100" size="is-small"></b-input>
        </b-field>
      </div>
    </div>
    <div class="columns is-align-items-flex-end">
      <div class="column">
        <b-field label="Imię i nazwisko kolegi/koleżanki">
          <b-input v-model="body.colleague" />
        </b-field>
      </div>
      <div class="column"></div>
    </div>
    <hr />
    <p class="has-text-primary has-text-weight-bold mt-6 subtitle is-spaced">Postanowienia prawne</p>
    <div class="columns">
      <div class="column">
        <b-field>
          <b-checkbox v-model="body.accept" class="mr-0">Akceptuję</b-checkbox>
          <b-button tag="nuxt-link" class="px-1" type="is-text" to="/regulamin">Regulamin*</b-button>
        </b-field>
      </div>
    </div>
    <div class="columns">
      <div class="column">
        <b-field>
          <b-checkbox v-model="body.consent">Wyrażam zgodzę na ....*</b-checkbox>
        </b-field>
      </div>
    </div>

    <div class="columns">
      <div class="column is-offset-6-desktop">
        <b-button expanded type="is-primary" class="has-text-weight-bold" outlined native-type="reset">Wyczyść</b-button>
      </div>
      <div class="column">
        <b-button :loading="loading" expanded type="is-primary" class="has-text-weight-bold" native-type="submit">Wyślij zgłoszenie</b-button>
      </div>
    </div>

    <p>* - Pole wymagane</p>
  </form>
</template>

<script>
const stays = ["Turnus #1", "Turnus #2", "Turnus #3", "Turnus #4"];

export default {
  data() {
    return {
      loading: false,
      successful: null,
      error: null,
      stays,
      body: {
        stay: stays[0],
        name: "",
        birthday: undefined,
        school: "",
        phoneNumber: "",
        discord: "",
        guardianName: "",
        guardianPhoneNumber: "",
        guardianEmail: "",
        dietInformation: "",
        healthInformation: "",
        colleague: "",
        accept: false,
        consent: false,
      },
    };
  },

  methods: {
    async handleSubmit() {
      this.loading = true;
      this.successful = null;
      this.error = null;

      try {
        // const response = await this.$axios.post("/api/signup", this.body);

        // if (response.statusText !== "OK") throw new Error();

        this.successful = true;
        this.loading = false;
        this.reset();

        this.$toast({
          message: "Zgłoszenie zostało wysłane!",
          type: "is-success",
        });
      } catch (e) {
        this.error = true;
        this.loading = false;

        this.$toast({
          message: "Wystąpił błąd z wysyłaniem zgłoszenia :( Spróbuj ponownie",
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
