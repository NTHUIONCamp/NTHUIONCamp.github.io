<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="my-3">
        <h1 class="display-2 font-weight-bold mb-3">師資團隊</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(lecturer, i) in lecturers" :key="i" cols="12">
        <v-card :color="colors[i]">
          <v-card-title>
            <v-avatar size="56"><img :src="lecturer.photo" /></v-avatar>
            <p class="ml-3">{{ lecturer.name }}</p>
          </v-card-title>
          <v-card-text>
            <v-list :color="colors[i]">
              <v-list-item v-for="(experience, j) in lecturer.experiences" :key="j">{{ experience }}</v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "LecturersPage",

  data: () => ({
    lecturers: [
      {
        name: "",
        photo: "",
        experiences: [
          "",
        ],
      },
      {
        name: "",
        photo: "",
        experiences: [
          "",
        ],
      },
      {
        name: "",
        photo: "",
        experiences: [
          "",
        ],
      },
      {
        name: "",
        photo: "",
        experiences: [
          "",
        ],
      },
      {
        name: "",
        photo: "",
        experiences: [
          "",
        ],
      },
    ],
    colors: [
      "error",
      "accent",
      "success",
      "warning",
      "info",
    ],
  }),
};
</script>
