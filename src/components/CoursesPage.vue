<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="my-3">
        <h1 class="display-2 font-weight-bold">營隊課程</h1>
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col class="mb-3">
        <h2 class="subheading font-weight-regular">請點擊課程以查看詳細資訊。</h2>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-calendar ref="calendar" type="custom-daily" start="2022-07-25" end="2022-07-29" first-interval="8"
          interval-count="15" :events="events" :event-color="getEventColor" @click:event="showEvent"></v-calendar>
        <v-menu v-model="selectedOpen" :close-on-content-click="false" :activator="selectedElement" offset-x>
          <v-card :color="selectedEvent.color" min-width="350px" flat>
            <v-card-title>{{ selectedEvent.name }}</v-card-title>
            <v-card-text v-if="selectedEvent.details !== undefined">
              <v-list dense rounded color="accent">
                <v-list-item-group>
                  <v-list-item v-for="(detail, i) in selectedEvent.details" :key="i">
                    {{ detail }}
                  </v-list-item>
                </v-list-item-group>
              </v-list>
            </v-card-text>
            <v-card-actions>
              <v-btn text @click="selectedOpen = false">
                Close
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-menu>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "CoursesPage",

  data: () => ({
    events: [
      {
        name: "營長時間",
        start: "2022-07-25 09:00",
        end: "2022-07-25 09:30",
        color: "warning",
      },
      {
        name: "基本技巧",
        start: "2022-07-25 09:30",
        end: "2022-07-25 12:00",
        color: "accent",
        details: [
          "遞迴",
          "快速冪、GCD",
          "排序",
          "暴力枚舉",
          "二分搜、三分搜",
          "離散化",
        ],
      },
      {
        name: "基礎資料結構",
        start: "2022-07-25 13:30",
        end: "2022-07-25 17:30",
        color: "accent",
        details: [
          "STL: (unordered) set/map, deque, queue, stack, priority queue",
          "Disjoint Set",
          "Sparse Table",
          "BIT",
          "Segment Tree",
        ],
      },
      {
        name: "交流討論時間",
        start: "2022-07-25 19:00",
        end: "2022-07-25 22:00",
        color: "info",
      },
      {
        name: "進階資料結構",
        start: "2022-07-26 09:00",
        end: "2022-07-26 12:00",
        color: "accent",
        details: [
          "Segment Tree Adv.",
          "Treap",
          "Persistent DS",
          "2D Segment Tree",
        ],
      },
      {
        name: "基礎 DP",
        start: "2022-07-26 13:30",
        end: "2022-07-26 17:30",
        color: "accent",
        details: [
          "基本概念介紹",
          "最優子結構",
          "重複子問題",
          "經典問題",
        ],
      },
      {
        name: "上機練習",
        start: "2022-07-26 19:00",
        end: "2022-07-26 21:30",
        color: "success",
      },
      {
        name: "題解",
        start: "2022-07-26 21:30",
        end: "2022-07-26 22:00",
        color: "info",
      },
      {
        name: "進階 DP",
        start: "2022-07-27 09:00",
        end: "2022-07-27 12:00",
        color: "accent",
        details: [
          "滾動DP",
          "狀態壓縮",
          "單調隊列優化",
          "斜率優化",
        ],
      },
      {
        name: "基礎圖論",
        start: "2022-07-27 13:30",
        end: "2022-07-27 17:30",
        color: "accent",
        details: [
          "名詞介紹、圖的表示",
          "圖的遍歷",
          "最短路",
          "樹",
          "拓樸排序",
        ],
      },
      {
        name: "上機練習",
        start: "2022-07-27 19:00",
        end: "2022-07-27 21:30",
        color: "success",
      },
      {
        name: "題解",
        start: "2022-07-27 21:30",
        end: "2022-07-27 22:00",
        color: "info",
      },
      {
        name: "進階圖論",
        start: "2022-07-28 09:00",
        end: "2022-07-28 12:00",
        color: "accent",
        details: [
          "二分圖",
          "連通分量",
          "進階樹",
        ],
      },
      {
        name: "數論",
        start: "2022-07-28 13:30",
        end: "2022-07-28 17:30",
        color: "accent",
        details: [
          "篩法",
          "模運算",
          "模反元素",
          "費馬小定理",
          "歐拉函數",
          "中國剩餘定理",
        ],
      },
      {
        name: "上機練習",
        start: "2022-07-28 19:00",
        end: "2022-07-28 21:30",
        color: "success",
      },
      {
        name: "題解",
        start: "2022-07-28 21:30",
        end: "2022-07-28 22:00",
        color: "info",
      },
      {
        name: "其他解題技巧",
        start: "2022-07-29 09:00",
        end: "2022-07-29 12:00",
        color: "accent",
        details: [
          "中間相遇法",
          "啟發式合併",
          "均攤分析",
          "分塊",
          "莫隊",
          "經典問題選講",
        ],
      },
      {
        name: "比賽",
        start: "2022-07-29 13:30",
        end: "2022-07-29 17:30",
        color: "success",
      },
      {
        name: "頒獎暨結業",
        start: "2022-07-29 18:00",
        end: "2022-07-29 19:00",
        color: "error",
      },
    ],
    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
  }),

  methods: {
    getEventColor: event => event.color,
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event
        this.selectedElement = nativeEvent.target
        requestAnimationFrame(() => requestAnimationFrame(() => this.selectedOpen = true))
      }
      if (this.selectedOpen) {
        this.selectedOpen = false
        requestAnimationFrame(() => requestAnimationFrame(() => open()))
      } else {
        open()
      }
      nativeEvent.stopPropagation()
    },
  },
};
</script>

<style>
.v-event-summary {
  font-size: larger !important;
}
</style>
