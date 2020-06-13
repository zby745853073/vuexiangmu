<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" v-for="(sc,idx) in starClasses" :key='idx' :class='sc'></span>
    <!-- <span class="star-item on"></span>
    <span class="star-item on"></span>
    <span class="star-item half"></span>
    <span class="star-item off"></span>-->
  </div>
</template>

<script>
const CLASS_ON = "on";
const CLASS_HALF = "half";
const CLASS_OFF = "off";
export default {
  props: {
    rating: Number,
    size: Number
  },
  computed: {
    starClasses() {
      //通过rating分数来设置星星的类
      let { rating } = this; //等价于 let {rating} = {rating:4.3,size:24}
      let scs = []; //存放class组 一共有五项
      let ratingInt = Math.floor(rating);
      // 3.6   3
      //添加n个 on 类
      for (let i = 0; i < ratingInt; i++) {
        scs.push(CLASS_ON);
      }
      //添加 0/1 个 half 类
      if (rating * 10 - ratingInt * 10 >= 5) {
        scs.push(CLASS_HALF);
      }
      //添加n个 off类
      while( scs.length < 5 ){
          scs.push(CLASS_OFF);
      }
      return scs;
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../common/styles/mixins.scss";
.star {
  float: left;
  font-size: 0;
  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }
  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./images/stars/star48_on");
      }
      &.half {
        @include bg-image("./images/stars/star48_half");
      }
      &.off {
        @include bg-image("./images/stars/star48_off");
      }
    }
  }
  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./images/stars/star36_on");
      }
      &.half {
        @include bg-image("./images/stars/star36_half");
      }
      &.off {
        @include bg-image("./images/stars/star36_off");
      }
    }
  }
  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      margin-right: 3px;
      background-size: 10px 10px;
      &:last-child {
        margin-right: 0;
      }
      &.on {
        @include bg-image("./images/stars/star24_on");
      }
      &.half {
        @include bg-image("./images/stars/star24_half");
      }
      &.off {
        @include bg-image("./images/stars/star24_off");
      }
    }
  }
}
</style>