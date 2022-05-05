<template>
  <v-container>
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">交通資訊</h1>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-3">
      <v-simple-table>
        <thead>
          <tr>
            <th colspan="4">國立清華大學校本部地址：新竹市光復路二段 101 號</th>
          </tr>
          <tr>
            <th headers="a">交通工具</th>
            <th colspan="2" headers="a" id="a2">說明</th>
            <th headers="a" id="a3">參考網站</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th headers="a1" id="b1">高鐵</th>
            <td colspan="2" headers="a2" id="b2">
              請於高鐵新竹站下車，下車後可轉搭其他交通工具，轉乘資訊請見臺灣高鐵網站。
            </td>
            <td headers="a3" id="b3">
              <a href="http://www.thsrc.com.tw/" target="_blank">
                臺灣高鐵網站
              </a>
            </td>
          </tr>
          <tr>
            <th headers="b1" id="c1">
              <p>火車</p>
            </th>
            <td colspan="2" headers="b2" id="c2">
              西部幹線新竹站下車，下車後需轉搭其他交通工具。
            </td>
            <td headers="b3" id="c3">
              <a href="http://www.railway.gov.tw/tw/" target="_blank">
                臺灣鐵路管理局
              </a>
            </td>
          </tr>
          <tr>
            <th headers="c1" id="d1">
              <p>市區公車</p>
            </th>
            <td colspan="2" headers="c2" id="d2">
              <v-chip-group>
                <v-chip>藍線 1 區</v-chip>
                <v-chip>5608</v-chip>
                <v-chip>182</v-chip>
                <v-chip>1</v-chip>
                <v-chip>2</v-chip>
                <v-chip>83</v-chip>
                <v-chip>31</v-chip>
              </v-chip-group>
            </td>
            <td headers="c3" id="d3">
              <a href="http://www.hcbus.com.tw/" target="_blank">新竹客運</a>
            </td>
          </tr>
          <tr>
            <th headers="d1" id="e1">
              <p>計程車</p>
            </th>
            <td colspan="2" headers="d2" id="e2">
              <p>
                火車站 → 清華大學校本部門口，車資約 200~250 元<br />
                （若未跳錶，上車前請先與司機議價）
              </p>
            </td>
            <td headers="d3" id="e3">
              <p style="display: none !important">&nbsp;</p>
            </td>
          </tr>
          <tr>
            <th headers="e1" id="f1" rowspan="8">國道客運</th>
            <td headers="e2" id="f2" rowspan="8">
              下交流道後之下車站（於交流道口或清華大學門口），請先洽詢各客運公司。
            </td>
            <td headers="e2" id="f3" rowspan="7" class="text-center">
              <p>台北</p>
              <p>｜</p>
              <p>新竹</p>
            </td>
            <td headers="e3" id="f4">
              <a href="http://www.yalanbus.com.tw/" target="_blank">
                亞聯客運（行駛北二高路線）
              </a>
            </td>
          </tr>
          <tr>
            <td headers="f4" id="f5">
              <a href="http://www.hcbus.com.tw/" target="_blank">
                新竹三重客運聯營
              </a>
            </td>
          </tr>
          <tr>
            <td headers="f5" id="f6">
              <a href="http://www.kingbus.com.tw/" target="_blank">國光客運</a>
            </td>
          </tr>
          <tr>
            <td headers="f6" id="f7">
              <a href="http://www.freego.com.tw/" target="_blank">飛狗巴士</a>
            </td>
          </tr>
          <tr>
            <td headers="f7" id="f8">
              <a href="http://www.howtai.com.tw/" target="_blank">豪泰客運</a>
            </td>
          </tr>
          <tr>
            <td headers="f8" id="f9">
              <a href="http://www.ubus.com.tw/" target="_blank">統聯客運</a>
            </td>
          </tr>
          <tr>
            <td headers="f9" id="f10">
              <a href="http://www.aloha168.com.tw/" target="_blank">
                阿羅哈客運
              </a>
            </td>
          </tr>
          <tr>
            <td headers="f3" id="f12" class="text-center">
              <p>新竹</p>
              <p>｜</p>
              <p>台中</p>
            </td>
            <td headers="f10" id="f11">
              <a href="http://www.hcbus.com.tw/" target="_blank">
                新竹台中客運聯營
              </a>
            </td>
          </tr>
        </tbody>
      </v-simple-table>
    </v-row>
    <v-row justify="center" class="my-3">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14487.921946438228!2d120.9966699!3d24.7961217!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x112b5d5bda760413!2z5ZyL56uL5riF6I-v5aSn5a24!5e0!3m2!1szh-TW!2stw!4v1651776056959!5m2!1szh-TW!2stw"
        width="600"
        height="450"
        style="border: 0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      />
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "TravelPage",

  data: () => ({}),
};
</script>
