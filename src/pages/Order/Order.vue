<template>
  <section class="order">
    <HeaderTop title="订单" />
    <section class="order_no_login">
      <img src="./images/person.png" />
      <h3 v-if='!userInfo.id'>登录后查看外卖订单</h3>
      <button v-if='!userInfo.id' @click='$router.push("/login")'>立即登陆</button>
      <h3 v-if='userInfo.id'>暂无订单</h3>
    </section>
  </section>
</template>

<script>
import HeaderTop from "../../components/HeaderTop/HeaderTop.vue";
import {mapState} from 'vuex'
export default {
  computed:{
    ...mapState(['userInfo'])
  },
  components: {
    HeaderTop
  }
};
</script>

<style scoped lang='scss'>
.order_no_login {
  padding-top: 140px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
  img {
    display: block;
    width: 100%;
    height: 30%;
  }
  h3 {
    padding: 10px 0;
    font-size: 17px;
    color: #6a6a6a;
  }
  button {
    display: inline-block;
    background: #02a774;
    font-size: 14px;
    color: #fff;
    border: 0;
    outline: none;
    border-radius: 5px;
    padding: 10px 20px;
  }
}
</style>