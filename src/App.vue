<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-btn text plain to="/">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />
        <v-app-bar-title class="text--white">2022 IONCamp</v-app-bar-title>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn text plain to="/courses">營隊課程</v-btn>
      <v-btn text plain to="/lecturers">師資團隊</v-btn>
      <v-btn text plain to="/travel">交通資訊</v-btn>
      <v-btn text plain to="/notices">注意事項</v-btn>
    </v-app-bar>

    <v-main><router-view></router-view></v-main>

    <v-footer dark padless>
      <v-row justify="center" no-gutters>
        <v-btn
          v-for="link in links"
          :key="link.url"
          :href="link.url"
          target="_blank"
          class="mx-4 my-2"
          icon
        >
          <v-icon size="24px">mdi-{{ link.type }}</v-icon>
        </v-btn>

        <v-col class="py-4 text-center" cols="12">營長 林禾堃</v-col>

        <v-divider></v-divider>

        <v-col class="py-4 text-center" cols="12">
          {{ new Date().getFullYear() }} —
          <strong>清大暑期程式競賽集訓營</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    links: [
      {
        type: "facebook",
        url: "https://www.facebook.com/nthuioncamp",
      },
      {
        type: "email",
        url: "mailto:nthu.ioncamp@gmail.com",
      },
      {
        type: "phone",
        url: "tel:+886-",
      },
    ],
  }),
};
</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}
</style>
