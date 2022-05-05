<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
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
      "須自行攜帶睡袋、盥洗用具與 4 天份衣物，其他有需要可以自行攜帶",
      "須攜帶健保卡，有任何特殊狀況或疾病請告知，並記得攜帶相關藥品",
      "請攜帶口罩、一顆快樂的心",
      "有其他問題請私訊 Facebook 粉專",
    ],
  }),
};
</script>
