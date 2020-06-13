/*
    包含n个接口请求函数的模块
    函数返回值 : promise对象
*/
import ajax from './ajax.js'

let BASE_URL = 'http://localhost/shop_server/'; //接口路径
let _index_category = BASE_URL + 'index_category.php';//获取食品分类列表
let _position = BASE_URL + 'position.php'; //根据经纬度获取地理位置
let _login_pwd = BASE_URL + 'login_pwd.php';//密码登录
let _search_shops = BASE_URL + 'search_shops.php';//搜索商家
let _goods = BASE_URL + 'goods.php'; //某一个商家信息
let _shops = BASE_URL + 'shops.php'; //获取附近商家

//1.获取食品分类列表
export const reqCategorys = () => ajax(_index_category);
//2.根据经纬度获取地理位置
export const reqAddress = (geohash) => ajax(_position, { geohash });
//3.根据经纬度获取附近商铺列表
export const reqShops = (longitude, latitude) => ajax(_shops, { longitude, latitude });
//4.密码登录
/*
    function (name,pwd){ 
         return ajax(_login_pwd,{name:name,pwd:pwd}) 
    }
*/
export const reqPwdLogin = (name, pwd) => ajax(_login_pwd, { name, pwd });
//import {reqCategorys,reqAddress} from './api/'
//5.根据关键词搜索商铺列表
export const reqSearchShop = (keyword) => ajax(_search_shops,{keyword});
//6.获取单个商家详情
export const reqShopInfo = () => ajax(_goods);

