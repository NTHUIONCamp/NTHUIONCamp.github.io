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
        <p class="subheading font-weight-regular">{{ brief }}</p>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        <v-card elevation="2" color="accent">
          <v-card-title>時程</v-card-title>
          <v-card-text>
            <v-list dense color="accent">
              <v-list-item v-for="i in dates" :key="i">
                {{ i.text }}日期：{{ i.date }}
              </v-list-item>
            </v-list>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="2" outlined color="warning">
          <v-card-title>費用</v-card-title>
          <v-card-text>
            每人 {{ price }} 元整。<br />（若不住宿，住宿費用將於報到時退還。 ）
          </v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card elevation="2" outlined color="success">
          <v-card-title>住宿</v-card-title>
          <v-card-text>
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
      { text: "報名截止", date: "" },
      { text: "錄取公告", date: "" },
      { text: "營隊", date: "7/25~7/29" },
    ],
    price: "",
  }),
};
</script>
