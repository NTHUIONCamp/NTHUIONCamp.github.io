<template>
  <v-app>
    <v-app-bar app dark color="primary">
      <v-btn text plain to="/">
        <v-img
          contain
          class="shrink mr-2 shadowed-img"
          transition="scale-transition"
          width="40"
          :src="require('./assets/logo.png')"
        />
        <v-app-bar-title class="text--white">2022 IONCamp</v-app-bar-title>
      </v-btn>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn text plain v-for="(menu, i) in menus" :to="menu.to" :href="menu.href" :target="menu.href ? '_blank' : ''" :key="i">
          {{ menu.text }}
        </v-btn>
      </v-toolbar-items>
      <v-menu v-if="$vuetify.breakpoint.smAndDown" color="primary">
        <template v-slot:activator="{ on }">
          <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
        </template>
        <v-list color="primary">
          <v-list-item v-for="(menu, i) in menus" :key="i">
            <v-btn text plain :to="menu.to">
              {{ menu.text }}
            </v-btn>
          </v-list-item>
        </v-list>
      </v-menu>
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
    menus: [
      { to: "courses", text: "營隊課程" },
      { to: "lecturers", text: "師資團隊" },
      { to: "travel", text: "交通資訊" },
      { to: "notices", text: "注意事項" },
      { href: "https://forms.gle/2CX5dtniiNvneAsJ9", text: "報名表單" },
    ],
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
        url: "tel:+886-902202710",
      },
    ],
  }),
};
</script>

<style scoped>
.v-btn {
  text-transform: unset !important;
}
.shadowed-img {
  -webkit-filter: drop-shadow(0 0 .69em black)  !important;
  filter: drop-shadow(0 0 .69em black)  !important;
}
</style>
