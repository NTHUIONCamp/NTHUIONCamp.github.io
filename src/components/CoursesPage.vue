<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">營隊課程</h1>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12">
        <v-calendar
          ref="calendar"
          type="custom-daily"
          start="2022-07-25"
          end="2022-07-29"
          first-interval="8"
          interval-count="15"
          :events="events"
          :event-color="getEventColor"
        ></v-calendar>
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
      },
      {
        name: "基礎資料結構",
        start: "2022-07-25 13:30",
        end: "2022-07-25 17:30",
        color: "accent",
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
      },
      {
        name: "基礎 DP",
        start: "2022-07-26 13:30",
        end: "2022-07-26 17:30",
        color: "accent",
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
      },
      {
        name: "基礎圖論",
        start: "2022-07-27 13:30",
        end: "2022-07-27 17:30",
        color: "accent",
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
      },
      {
        name: "數論",
        start: "2022-07-28 13:30",
        end: "2022-07-28 17:30",
        color: "accent",
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
  }),

  methods: {
    getEventColor: event => event.color,
  },
};
</script>

<style>
.v-event-summary {
  font-size: larger !important;
}
</style>
