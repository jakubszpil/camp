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
        <div class="column">
          <p>image</p>
          <base-heading variant="3" asVariant="4">Lorem, ipsum.</base-heading>
        </div>
        <div class="column">
          <p>image</p>
          <base-heading variant="3" asVariant="4">Lorem, ipsum.</base-heading>
        </div>
        <div class="column">
          <p>image</p>
          <base-heading variant="3" asVariant="4">Lorem, ipsum.</base-heading>
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
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem perferendis reiciendis quia harum officiis a, possimus, ratione quod
        rerum consequuntur vitae eum eius accusantium exercitationem in aut, delectus deleniti? Veritatis repellendus voluptatem ex voluptates
        omnis sit vel aliquam ipsa possimus?
      </p>
    </base-section>
    <base-section heading="Czego nauczamy?" class="has-text-centered" headingClass="has-text-info">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur voluptatem doloribus aspernatur quis corrupti quam neque ratione fugiat
        ab commodi.
      </p>

      <div class="container is-max-desktop my-6 has-text-left">
        <div class="columns">
          <div class="column" v-for="item in [1, 2]" :key="item">
            <div class="column"></div>
            <div class="column">
              <base-heading variant="4" asVariant="4">Lorem, ipsum dolor.</base-heading>
            </div>
          </div>
        </div>
        <div class="columns">
          <div class="column" v-for="item in [3, 4]" :key="item">
            <div class="column"></div>
            <div class="column">
              <base-heading variant="4" asVariant="4">Lorem, ipsum dolor.</base-heading>
            </div>
          </div>
        </div>
      </div>
    </base-section>
    <base-section heading="Nasza kadra" class="has-background-grey-lighter" headingClass="has-text-primary"></base-section>
    <base-section heading="Ile kosztuje?"></base-section>
    <base-section heading="Opinie"></base-section>
    <base-section heading="Harmonogram kolonii" class="has-background-grey-lighter" headingClass="has-text-primary">
      <div class="table-container">
        <table class="table is-striped has-text-centered is-bordered is-fullwidth">
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
      <the-contact />
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
        "19:30 - 22:00",
      ],
    };
  },
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
