import Vue from 'vue'
import App from './App.vue'
//引入重置样式表
import '../static/css/reset.css'
//引入路由
import router from './router'
//引入swiper轮播插件
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
Vue.use(VueAwesomeSwiper);

//引入mint-ui
import mintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(mintUI);

//注册store
import store from './store'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
