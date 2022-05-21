<template>
  <v-container>
    <v-parallax dark :src="require('../assets/bg.jpg')">
      <v-row class="text-center">
        <v-col cols="12">
          <v-img contain :src="require('../assets/logo.png')" class="my-3" height="200" />
        </v-col>
        <v-col class="my-3 shadowed-text">
          <h1 class="display-2 font-weight-bold mb-3">2022 IONCamp</h1>
          <h2 class="subheading font-weight-regular">清大暑期程式競賽集訓營</h2>
          <p class="subheading font-weight-regular">{{ brief }}</p>
        </v-col>
      </v-row>
    </v-parallax>
    <v-row class="mt-3">
      <v-col>
        <v-alert prominent border="left" type="error">
          因為受到武漢肺炎疫情影響的緣故，非常遺憾的是 2022 年清大暑期程式競賽集訓營將以線上形式舉辦。
        </v-alert>
      </v-col>
    </v-row>
    <v-row class="text-center mt-3">
      <v-col cols="12" sm="4">
        <v-card elevation="2" color="accent">
          <v-card-title>時程</v-card-title>
          <v-card-text>
            <v-list dense rounded color="accent">
              <v-list-item-group>
                <v-list-item v-for="i in dates" :key="i.text">
                  {{ i.text }}日期：{{ i.date }}
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card elevation="2" outlined color="warning">
          <v-card-title>費用</v-card-title>
          <v-card-text>
            每人 <del>6000</del> <strong><em>{{ price }}</em></strong> 元整。<br /><del>（若不住宿，住宿費用將於報到時退還。 ）</del>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" sm="4">
        <v-card elevation="2" outlined color="success">
          <v-card-title>住宿</v-card-title>
          <v-card-text class="text-decoration-line-through">
            清華大學學生宿舍，須自行攜帶睡袋與盥洗用品。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "IndexPage",

  data: () => ({
    brief:
      "對於初學程式設計感到迷惘嗎？或是在挑戰 APCS 或大大小小的程式設計比賽感到挫折呢？讓 IONCamp 透過連續五天密集且扎實的培訓課程，帶領你突破目前的困境吧！",
    dates: [
      { text: "報名截止", date: "5/29" },
      { text: "錄取公告", date: "6/01" },
      { text: "營隊", date: "7/25~7/29" },
    ],
    price: "3500",
  }),
};
</script>

<style scoped>
.shadowed-text {
  text-shadow: 0 0 .69em black, 0 0 .69em black, 0 0 .87em black, 0 0 .87em black, 0 0 .92em black !important;
}
</style>
