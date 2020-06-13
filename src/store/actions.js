
import {
    RECEIVE_ADDRESS,
    RECEIVE_CATEGORYS,
    RECEIVE_SHOPS,
    RECEIVE_USER_INFO,
    RECEIVE_CLEARINFO
} from  './mutation-types'
import {
    reqAddress,
    reqCategorys,
    reqShops
} from '../api'

export default {
    //异步获取地址
    async getAddress({commit},{geohash}){
        
        let result = await reqAddress(geohash);
        //console.log(result);
        commit(RECEIVE_ADDRESS,{address:eval("("+result+")").data});
    },
    //异步获取分类列表
    async getCategorys({commit}){
        let result = await reqCategorys();
        //console.log(result); //eval("("+result+")").data
        commit(RECEIVE_CATEGORYS,{categorys:eval("("+result+")").data});
    },
    //异步获取附近商家列表
    async getShops({commit},{longitude, latitude}){
        let result = await reqShops(longitude, latitude);
        //console.log(result);
        commit(RECEIVE_SHOPS,{
            shops:eval('('+result+')').data,
            longitude, 
            latitude
        });
    },
    //同步记录用户信息
    recordUser ({commit},{id,name}){
        commit(RECEIVE_USER_INFO,{id,name});
    },
    //退出清空userInfo信息
    clearInfo ({commit}){
        commit(RECEIVE_CLEARINFO);
    }
}