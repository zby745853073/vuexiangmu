<template>
  <section class="msite">
    <!-- 首页头部 -->
    <HeaderTop :title="address.name">
      <template v-slot:search>
        <router-link class="header_search" to="/search">
          <i class="iconfont icon-sousuo" style="font-size:25px"></i>
        </router-link>
      </template>
      <template v-slot:login>
        <router-link :to="userInfo.id ? '#': '/login'" class="header_login">
          <span v-if='!userInfo.id'>登录|注册</span>
          <i v-else class='iconfont icon-lianxikefu'></i>
        </router-link>
      </template>
    </HeaderTop>
    <!--首页导航-->
    <nav class="msite_nav">
      <swiper ref="mySwiper" :options="swiperOptions" v-if='categorys.length'>
        <swiper-slide v-for='(categorys,index) in categorysArr' :key='index'>
          <a href="javascript:;" v-for='(category,idx) in categorys' :key='idx' class="link_to_food">
            <div class="food_container">
              <img :src="require('./images/category/'+category.image_url)" />
            </div>
            <span>{{category.title}}</span>
          </a>
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      <img v-else src="./images/msite_back.svg" alt="">
    </nav>
    <!--首页附近商家-->
    <ShopList />
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import ShopList from "../../components/ShopList/ShopList.vue";
import { mapState } from "vuex";
export default {
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        },
        loop: true,
        autoplay:true
      },
    };
  },
  computed: {
    ...mapState(["address", "categorys","userInfo"]),
    categorysArr() {
      //this.categorys
      //根据 categorys 一维数组 生成 二维数组 小数组中的元素最大是8个
      let { categorys } = this; //等价于 let categorys = this.categorys
      //console.log(categorys);
      //准备二维数组
      let arr = [];
      let minArr = [];
      categorys.forEach(item => {
        if( minArr.length == 8 ){
          //如果数组的length已经为8 清空
          arr.push(minArr);
          minArr = [];
        }
        minArr.push(item);
      });
      if( minArr.length > 0 ){
        arr.push(minArr);
        minArr = [];
      }
      return arr;
    }
  },
  components: {
    HeaderTop,
    ShopList
  }
};
</script>

<style scoped lang='scss'>
@import "../../common/styles/mixins.scss";
.msite {
  width: 100%;
}
/* 首页导航slider CSS */
.msite_nav {
  position: relative;
  margin-top: 45px;
  height: 200px;
  background: #fff;
  .swiper-container {
    width: 100%;
    height: 100%;
    .swiper-wrapper {
      width: 100%;
      height: 100%;
      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        .link_to_food {
          width: 25%;
          .food_container {
            display: block;
            width: 100%;
            text-align: center;
            padding-bottom: 10px;
            font-size: 0;
            img {
              display: inline-block;
              width: 50px;
              height: 50px;
            }
          }
          span {
            display: block;
            width: 100%;
            text-align: center;
            font-size: 13px;
            color: #666;
          }
        }
      }
    }
  }
}
/* 首页导航slider CSS --end */
</style>