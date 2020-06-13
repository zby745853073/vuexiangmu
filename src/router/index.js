// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Msite from '../pages/Msite/Msite.vue';
import Search from '../pages/Search/Search.vue';
import Order from '../pages/Order/Order.vue';
import Profile from '../pages/Profile/Profile.vue';


Vue.use(VueRouter)

export default new VueRouter({
	mode: "history",
	linkActiveClass: "active",
	routes: [{
			path: "/",
			redirect:"/msite",
		},
		{
			path: "/msite",
			name: "Msite",
			component: Msite
		},
		{
			path: "/search",
			name: "Search",
			component: Search
		},
		{
			path: "/order",
			name: "Order",
			component: Order
		},
		{
			path: "/profile",
			name: "Profile",
			component: Profile
		}
	]
})
// Vue.config.productionTip = false

/* eslint-disable no-new */
