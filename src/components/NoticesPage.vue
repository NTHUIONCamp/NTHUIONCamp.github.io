<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="my-3">
        <h1 class="display-2 font-weight-bold mb-3">注意事項</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-list rounded color="accent">
        <v-list-item-group>
          <v-list-item v-for="(notices, i) in notices" :key="i">
            {{ notices }}
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "NoticesPage",

  data: () => ({
    notices: [
      "本次營隊沒有提供參加證明，請務必確認可以接受再報名",
      "線上課程務必準時參加",
      "請準備一顆快樂的心",
      "有其他問題請私訊 Facebook 粉專",
    ],
  }),
};
</script>
