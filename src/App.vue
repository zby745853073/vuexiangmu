<template>
  <div id="app">
    <!-- 渲染路由组件 -->
    <router-view></router-view>
    <!-- 底部导航组件 -->
    <FooterGuide v-show="$route.meta.showFooter" />
  </div>
</template>

<script>
/* global BMap*/
import FooterGuide from "./components/FooterGuide/FooterGuide.vue";
import { mapActions } from "vuex";
import { Toast, Indicator } from "mint-ui";
export default {
  mounted() {
    Indicator.open({
      spinnerType: "fading-circle"
    });
    let geolocation = new BMap.Geolocation();
    geolocation.getCurrentPosition(
      position => {
        this._request(position.latitude, position.longitude);
      },
      err => {
        Toast(err.nf);
        this._request("39.91488908", "116.40387397");
      }
    );

    //页面初始化完毕获取localStorage内是否有userInfo
    let userInfo = localStorage.getItem("userInfo");
    //console.log(userInfo);
    if (userInfo) {
      let { id, name } = eval("(" + userInfo + ")");
      this.$store.dispatch("recordUser", { id, name });
    }
  },
  methods: {
    ...mapActions(["getAddress", "getCategorys", "getShops"]),
    _request(lat, lon) {
      //组件初始化 请求数据
      //console.log(err);
      Indicator.close();
      let latitude = lat; //纬度 37.2342
      let longitude = lon; //经度 113.22
      let geohash = latitude + "," + longitude;
      this.getAddress({ geohash }); // 获取地址
      this.getCategorys(); // 获取首页分类
      this.getShops({ longitude, latitude }); // 获取附近商家列表
    }
  },
  components: {
    FooterGuide
  }
};
</script>

<style scoped lang='scss'>
</style>
