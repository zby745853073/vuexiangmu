/*
    ajax请求封装
    返回值 : Promise对象
*/
import axios from 'axios'

export default function ajax(url, data = {}, type = 'GET') {
    return new Promise((resolve,reject)=>{
        //异步处理
        let promise;
        let dataStr = ''; 
        Object.keys(data).forEach(key => {
                dataStr += key + '=' + data[key] + '&';
        });
        if( dataStr ){
            dataStr = dataStr.substring(0,dataStr.length-1);  
        }
        if( type == 'GET' ){  
            url = url + '?' + dataStr;                
            //1.发送请求  axios.get('http://localhost/login_pwd.php?name=xxx&pwd=xxx')
            promise = axios.get(url);   
            //2. axios.get('http://localhost/login_pwd.php',{params:{name:xxx,pwd:xxx}})
            //promise = axios.get(url,{params:data})     
        }else{
            //发送请求  axios.post('http://localhost/login_pwd.php','name=xxx&pwd=xxx')
            promise = axios.post(url,dataStr);
        }
        promise.then(response => {
            // console.log(response);
            resolve(response.data);
        }).catch(err => {
            reject(err);
        })
    })
}

