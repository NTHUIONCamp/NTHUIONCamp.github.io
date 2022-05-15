<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="my-3">
        <h1 class="display-2 font-weight-bold mb-3">師資團隊</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col v-for="(lecturer, i) in lecturers" :key="i" cols="12">
        <v-lazy
          v-model="isActive"
          transition="fade-transition"
          :options="{ threshold: 0.5 }"
        >
          <v-card :color="colors[i]">
            <v-row>
              <v-col class="shrink">
                <v-avatar v-if="lecturer.photo" class="ml-3" size="64">
                  <v-img :src="require('../assets/' + lecturer.photo)" />
                </v-avatar>
              </v-col>
              <v-col class="pa-0">
                <v-card-title>{{ lecturer.name }}</v-card-title>
                <v-card-subtitle v-if="lecturer.id">
                  {{ lecturer.id }}
                </v-card-subtitle>
              </v-col>
            </v-row>
            <v-card-text>
              <v-list :color="colors[i]">
                <v-list-item-group>
                  <v-list-item
                    v-for="(experience, j) in lecturer.experiences"
                    :key="j"
                  >
                    {{ experience }}
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
          </v-card>
        </v-lazy>
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
        name: "黃兆源",
        id: "日月卦長",
        photo: "jinkela.png",
        experiences: [
          "IONCAMP 第一屆營長",
          "清大競技程式設計開課老師",
          "Synopsys Zebu Team 顧問",
          "2016 ACM-ICPC Manila🎖Sinag Award",
        ],
      },
      {
        name: "郭軒語",
        id: "HNO2",
        photo: "hno2.jpg",
        experiences: [
          "2021 ICPC Asia Taipei Regional🥇Golden Award",
          "110 全國大專電腦軟體設計競賽🥈第四名",
          "2020 ICPC Asia Taipei-Hsinchu Regional🥇Golden Award",
          "2018 ~ 2020 TOI 1!",
          "108 全國資訊學科能力競賽🥈二等獎",
        ],
      },
      {
        name: "李旺陽",
        photo: "",
        experiences: [
          "2015~ 清華大學競技程式設計助教",
          "2015~2022 新竹資訊之芽講師 (C 語法 / Python / 算法)",
          "2019 ICPC Asia Taipei-Hsinchu Regional🥈Sliver Award",
          "2017 ICPC Taiwan Online Programming Contest 第五名",
          "清大資工程式大帝程式設計競賽🥇金牌獎",
          "2017 兩岸清華程式競賽 第三名",
          "2016 ACM-ICPC Manila🎖Sinag Award",
          "TOI 2!",
          "2015 成大暑期高中生程式設計邀請賽 第一名",
        ],
      },
      {
        name: "蔣立元",
        photo: "",
        id: "jeeeerrrpop",
        experiences: [
          "2021 ICPC Asia Taipei Regional🥇Gold Award",
          "109 全國大專電腦軟體設計競賽 第五名",
          "2019 ICPC Asia Taipei-Hsinchu Regional🥇Gold Award",
          "TOI 1!",
          "107 全國高中資訊能力競賽🥈二等獎",
          "107 北市資訊能力競賽🥇一等獎",
        ],
      },
      {
        name: "何凱鈞",
        photo: "",
        id: "Jeffrey",
        experiences: [
          "109 全國大專電腦軟體設計競賽🥇第二名",
          "2019 ICPC Asia Taipei-Hsinchu Regional 6th",
          "2019 ICPC Asia Kuala Lumpur Regional 7th",
          "2018 ICPC Asia Singapore Regional 11th",
          "TOI 1!",
        ],
      },
      {
        name: "李昕威",
        photo: "",
        id: "PolarisChiba",
        experiences: [
          "2021 ICPC Asia Taipei Regional🥈Sliver Award",
          "2020 ICPC Asia Taipei-Hsinchu Regional🥈Sliver Award",
          "TOI 1!",
          "全國高中資訊能力競賽🥈二等獎",
          "北市資訊能力競賽🥈二等獎",
        ],
      },
    ],
    colors: ["error", "primary", "accent", "success", "warning", "info"],
    isActive: false,
  }),
};
</script>
