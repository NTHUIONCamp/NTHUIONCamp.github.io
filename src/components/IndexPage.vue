<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">2022 IONCamp</h1>
        <h2 class="subheading font-weight-regular">清大暑期程式競賽集訓營</h2>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",

  data: () => ({
  }),
};
</script>
