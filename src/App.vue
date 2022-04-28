<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-app-bar-title>2022 IONCamp</v-app-bar-title>
      </div>
    </v-app-bar>

    <v-main>
      <IndexPage />
    </v-main>
  </v-app>
</template>

<script>
import IndexPage from "./components/IndexPage";

export default {
  name: "App",

  components: {
    IndexPage,
  },

  data: () => ({
    //
  }),
};
</script>
