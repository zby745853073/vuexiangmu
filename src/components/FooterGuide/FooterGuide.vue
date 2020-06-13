<template>
  <footer class="footer_guide border-1px">
    <a href="javascript:;" class="guide_item" :class="{on:$route.path == '/msite'}" @click.prevent="goTo('/msite')">
      <span class="item_icon">
        <i class="iconfont icon-waimaidingdan0101"></i>
      </span>
      <span>外卖</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path == '/search'}" @click.prevent="goTo('/search')">
      <span class="item_icon">
        <i class="iconfont icon-sousuo"></i>
      </span>
      <span>搜索</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path == '/order'}"  @click.prevent="goTo('/order')">
      <span class="item_icon">
        <i class="iconfont icon-order_icon"></i>
      </span>
      <span>订单</span>
    </a>
    <a href="javascript:;" class="guide_item" :class="{on:$route.path == '/profile'}"  @click.prevent="goTo('/profile')">
      <span class="item_icon">
        <i class="iconfont icon-wode"></i>
      </span>
      <span>我的</span>
    </a>
  </footer>
</template>

<script>
export default {
  methods:{
    goTo (path){
      //跟push类似 唯一不同的是 它不会向history添加记录
      this.$router.replace(path);
    }
  }
};
</script>

<style lang='scss'>
@import"../../common/styles/mixins.scss";
 .footer_guide {
    @include top-border-1px(#e4e4e4);
    position: fixed;
    z-index: 100;
    left : 0;
    right:0;
    bottom:0;
    background-color:#fff;
    width:100%;
    height:50px;
    display:flex;
    .guide_item {
        display:flex;
        flex:1;
        text-align:center;
        flex-direction: column;
        align-items:center;
        margin:5px;
        color:#999999;      
        &.on {
            color:#02a774;
            pointer-events:none;/* 禁止点击 */
        }
        span {
            font-size:12px;
            margin-top:2px;
            margin-bottom:2px;
            .iconfont {
                font-size:22px;
            }
        }
    }
}
</style>