
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RECEIVE_CLEARINFO
} from  './mutation-types'
export default {
    [RECEIVE_ADDRESS](state,{address}){
        //接收地址
        state.address = address;
    },
    [RECEIVE_CATEGORYS](state,{categorys}){
        //接收首页分类列表
        state.categorys = categorys;
    },
    [RECEIVE_SHOPS](state,{shops,longitude, latitude}){
        //接收附近商家
        state.shops = shops;
        state.latitude = latitude;
        state.longitude = longitude;
    },
    [RECEIVE_USER_INFO](state,userInfo){
        //登录成功存储用户信息 {id:1,name:xxx} 
        state.userInfo = userInfo;
    },
    [RECEIVE_CLEARINFO](state){
        //退出清空用户信息
        state.userInfo = {};
    }
}