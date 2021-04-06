<template>
  <main>
    <the-hero />
    <base-section heading="O obozie">
      <p class="mb-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ducimus unde magnam enim praesentium, totam neque provident quis,
        doloremque cumque libero voluptatibus, a ex adipisci. Culpa ipsam accusamus commodi maxime?
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum rem, repellendus commodi labore aspernatur incidunt harum. Voluptatibus
        adipisci corrupti rem facilis doloremque excepturi quae molestiae placeat temporibus. Officia, esse repellat quibusdam quidem earum, nam
        nobis perferendis voluptatibus quasi distinctio quae numquam quis aperiam et tempora dolores est quia expedita a suscipit deserunt
        facere deleniti atque. Facere quasi optio officiis, recusandae voluptatibus qui numquam adipisci laborum cumque quas eos laboriosam
        exercitationem ullam sequi esse, eaque natus id quisquam ut tempore deserunt pariatur labore. Maxime magni atque beatae dolor ex magnam,
        eius necessitatibus omnis dignissimos aliquid dicta reiciendis, iusto molestias minima saepe!
      </p>
    </base-section>
    <carosuel>
      <div class="imgc imgc__light">1</div>
      <div class="imgc">2</div>
      <div class="imgc imgc__light">3</div>
      <div class="imgc">4</div>
    </carosuel>
    <base-section heading="Dla kogo?" class="has-background-primary" text="white">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam provident officia repudiandae obcaecati aut expedita
            consequuntur quidem molestias. Placeat, adipisci. Ipsum odio eos blanditiis? Dignissimos officiis facere nulla repudiandae.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore voluptatum iste.</p>
        </div>
      </div>
    </base-section>
    <base-section heading="Dlaczego?">
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, numquam placeat quis corporis earum molestias tenetur explicabo ullam
        cum illum laudantium, voluptatibus ea modi perferendis suscipit error quam. Repudiandae, libero.
      </p>
      <div class="columns has-text-centered is-4 my-6">
        <div class="column py-6" v-for="item in [1, 2, 3]" :key="item">
          <p>
            <b-icon custom-size="icon-size" icon="account-supervisor" />
          </p>
          <base-heading variant="3" asVariant="4">Lorem ipsum dolor sit amet consectetur.</base-heading>
        </div>
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Saepe, numquam placeat quis corporis earum molestias tenetur explicabo ullam
        cum illum laudantium, voluptatibus ea modi perferendis suscipit error quam. Repudiandae, libero.
      </p>
    </base-section>
    <base-section heading="Gdzie?" class="has-background-primary" text="white">
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <p class="mb-3">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, aperiam provident officia repudiandae obcaecati aut expedita
            consequuntur quidem molestias. Placeat, adipisci. Ipsum odio eos blanditiis? Dignissimos officiis facere nulla repudiandae.
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel tempore voluptatum iste.</p>
        </div>
      </div></base-section
    >
    <base-section heading="Kiedy?" class="has-background-info has-text-centered" text="white">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aut doloribus aperiam rem voluptatum id dolore minima recusandae
        delectus vel consequuntur officia velit quas quibusdam hic cumque in eius aliquam, at autem corporis natus qui. Atque corrupti magni quo
        sunt in laborum minima, minus doloremque expedita et, alias sapiente! Quibusdam labore rerum, numquam laboriosam enim, tempore, magnam
        libero vitae porro eaque animi asperiores veritatis sunt tempora modi similique maiores. Ullam animi, placeat veritatis totam omnis
        tempora delectus? Labore, minus voluptate! Veritatis natus ea cupiditate laborum, voluptate odit consequatur fuga obcaecati voluptatibus
        architecto sed, impedit dolor nam magni! Facere, nam animi.
      </p>
      <b-button tag="nuxt-link" to="/zapisy" type="is-white" class="has-text-primary has-text-weight-bold mt-6 is-medium"
        >Zapisz się już teraz!</b-button
      >
    </base-section>
    <base-section heading="Czego nauczamy?" class="has-text-centered" headingClass="has-text-info">
      <p class="has-text-weight-bold">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione consequuntur aliquam voluptate perferendis. Dicta modi cupiditate
        commodi, quis reiciendis, nemo cumque aspernatur totam eveniet est accusamus corporis illum odit pariatur harum ex blanditiis voluptates
        aliquam qui inventore ut iste! Saepe!
      </p>

      <div class="container is-max-desktop my-6">
        <div class="columns px-0 mx-0">
          <div class="column columns is-mobile" v-for="parentItem in [2, 4]" :key="parentItem">
            <div class="column" v-for="item in [2, 3]" :key="item">
              <b-icon custom-size="icon-size is-size-1-mobile" icon="account-supervisor" size="is-large" />
              <base-heading variant="4" asVariant="4">Lorem, ipsum dolor.</base-heading>
            </div>
          </div>
        </div>
      </div>
    </base-section>
    <base-section heading="Nasza kadra" class="has-background-grey-lighter" headingClass="has-text-primary"></base-section>
    <base-section heading="Ile kosztuje?"></base-section>
    <base-section heading="Opinie">
      <opinions />
    </base-section>
    <base-section heading="Harmonogram kolonii" class="has-background-grey-lighter" headingClass="has-text-primary">
      <div class="table-container">
        <table class="table has-text-centered is-bordered is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Godzina</th>
              <th>Niedziela</th>
              <th>Poniedziałek</th>
              <th>Wtorek</th>
              <th>Środa</th>
              <th>Czwartek</th>
              <th>Piątek</th>
              <th>Sobota</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>Godzina</th>
              <th>Niedziela</th>
              <th>Poniedziałek</th>
              <th>Wtorek</th>
              <th>Środa</th>
              <th>Czwartek</th>
              <th>Piątek</th>
              <th>Sobota</th>
            </tr>
          </tfoot>
          <tbody>
            <tr v-for="(hour, key) in hours" :key="key">
              <td>{{ hour }}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    </base-section>
    <base-section heading="Kontakt">
      <the-contact-form />
    </base-section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      hours: [
        "8:00 - 8:30",
        "8:45 - 9:30",
        "10:00 - 13:30",
        "13:30 - 14:30",
        "15:00 - 16:30",
        "16:30 - 16:45",
        "16:45 - 19:00",
        "19:00 - 19:30",
        "19:30 - 22:00"
      ]
    };
  }
};
</script>

<style scoped>
.imgc {
  width: 400px;
  height: 400px;
  background: grey;
}
.imgc__light {
  background: lightblue;
}
.table * {
  font-size: 0.8rem !important;
}
</style>
