/* 路由配置 */
import Vue from 'vue'
import VueRouter from 'vue-router'

//路由组件懒加载,开始访问页面时不加载,访问每一个组件时现加载
//外卖:
const Msite = () => import('../pages/Msite/Msite.vue')
//搜索:
const Search = () => import('../pages/Search/Search.vue')
//订单:
const Order = () => import('../pages/Order/Order.vue')
//我的:
const Profile = () => import('../pages/Profile/Profile.vue')
//登录:
const Login = () => import('../pages/Login/Login.vue')
//商家:
const Shop = () => import('../pages/Shop/Shop.vue')
const ShopGoods = () => import('../pages/Shop/ShopGoods/ShopGoods.vue')
const ShopRatings = () => import('../pages/Shop/ShopRatings/ShopRatings.vue')
const ShopInfo = () => import('../pages/Shop/ShopInfo/ShopInfo.vue')

Vue.use(VueRouter);


export default new VueRouter({
    routes: [
        { path: '/', redirect: '/msite' },
        { path: '/msite', component: Msite, meta: { showFooter: true } },
        { path: '/search', component: Search },
        { path: '/order', component: Order, meta: { showFooter: true } },
        { path: '/profile', component: Profile, meta: { showFooter: true } },
        { path: '/login', component: Login },
        {
            path : '/shop',
            component : Shop,
            children : [
                {
                    path:'/shop/goods',
                    component:ShopGoods
                },
                {
                    path:'/shop/ratings',
                    component:ShopRatings
                },
                {
                    path:'/shop/info',
                    component:ShopInfo
                },
                {
                    path : '',
                    redirect : '/shop/goods'
                }
            ]
        }
    ]
})

