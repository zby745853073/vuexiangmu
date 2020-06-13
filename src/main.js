import Vue from 'vue'
import App from './App.vue'
import Axios from 'axios'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import router from './router'

Vue.use(MintUI)
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		count:0
	},
	mutations: {
		increment(state) {
			state.count++
		},
		decrement(state){
			state.count--
		}
	},
	actions:{
		increment(context){
			context.commit('increment');
		},
		decrement(context){
			context.commit('increment');
		}
	}
})
import '../staic/reset.css'
import 'font-awesome/css/font-awesome.min.css'
Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: h => h(App),
}).$mount('#app')
