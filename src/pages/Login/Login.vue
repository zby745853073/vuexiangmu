<template>
  <div class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <h2 class="login_logo">外卖</h2>
        <div class="login_header_title">
          <a href="javascript:;" :class="{on:flag}" @click="toggle(true)">短信登录</a>
          <a href="javascript:;" :class="{on:!flag}" @click="toggle(false)">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div :class="{on:flag}">
            <section class="login_message">
              <input type="tel" ref='tel' maxlength="11" placeholder="手机号" v-model="phone" />
              <button
                :disabled="!rightPhone"
                class="get_verification"
                :class="{right_phone:rightPhone}"
                @click="sendSMS"
                ref="send"
              >{{computeTime?`已发送${computeTime}秒`:'获取验证码'}}</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div :class="{on:!flag}">
            <section>
              <section class="login_message">
                <input type="text" maxlength="11" v-model="name" placeholder="手机/邮箱/用户名" />
              </section>
              <section class="login_verification">
                <input
                  :type="showPwd?'text':'password'"
                  v-model="pwd"
                  maxlength="8"
                  placeholder="密码"
                />
                <div class="switch_button">
                  <mt-switch v-model="showPwd"></mt-switch>
                </div>
              </section>
              <!-- <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" />
                <img class="get_verification" src="./images/captcha.svg" alt="captcha" />
              </section>-->
            </section>
          </div>
          <button type="button" class="login_submit" @click="login">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <span href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-fanhui"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { Toast } from "mint-ui";
import { reqPwdLogin } from "../../api";
export default {
  data() {
    return {
      showPwd: false,
      flag: false, //控制登录的切换
      name: "", //用户名
      pwd: "", //密码
      phone: "", //手机号
      computeTime: "" //存储倒计时值
    };
  },
  methods: {
    toggle(bool) {
      //tab切换 短信验证码 和 密码登录
      if( bool ){
        //短信登录
        if( this.name || this.pwd ) return;
      }else{
        //密码登录
        if( this.phone ) return;
      }
      this.flag = bool;
      
    },
    async login() {
      //密码登录
      let { name, pwd, phone } = this; //等价于 let {name,pwd} = {name:'',pwd:''}
      if (phone) {
        Toast("此功能暂未开放");
        return;
      }
      if (!name) {
        Toast("用户名不能为空");
        return;
      }
      if (!pwd) {
        Toast("密码不能为空");
        return;
      }
      let yanzheng = await reqPwdLogin(name, pwd);
      // console.log(yanzheng);
      let result = eval("(" + yanzheng + ")");
      if (result.code == 0) {
        //成功
        Toast({
          message: "登录成功",
          duration: 1000
        });
        let { id, name } = result.msg;
        //将user信息保存到vuex的state中
        this.$store.dispatch("recordUser", { id, name });
        //将user信息保存到localStorage里
        localStorage.setItem("userInfo", `{id:${id},name:'${name}'}`);
        //console.log(id, name);
        //去个人中心界面:
        this.$router.replace("/profile");
      } else {
        Toast(result.msg); //失败
      }
    },
    sendSMS() {
      //发送验证码
      this.computeTime = 10;
      this.$refs.send.disabled = true;
      this.$refs.send.classList.remove("right_phone");
      this.$refs.tel.disabled = true;
      let timer = setInterval(() => {
        this.computeTime--;
        if (this.computeTime <= 0) {
          clearInterval(timer);
          this.computeTime = "";
          this.$refs.tel.disabled = false;   
          this.$refs.send.disabled = false;
          this.$refs.send.classList.add('right_phone');
        }
      }, 1000);
    }
  },
  computed: {
    rightPhone() {
      //验证手机号
      return /^1[358]\d{9}/g.test(this.phone);
    }
  }
};
</script>

<style scoped lang='scss'>
@import "../../common/styles/mixins.scss";
.loginContainer {
  width: 100%;
  height: 100%;
  background: #fff;
  .loginInner {
    padding-top: 60px;
    width: 80%;
    margin: 0 auto;
    .login_header {
      .login_logo {
        font-size: 40px;
        font-weight: bold;
        color: #02a774;
        text-align: center;
      }
      .login_header_title {
        padding-top: 40px;
        text-align: center;
        a {
          color: #333;
          font-size: 14px;
          padding-bottom: 4px;
        }
        a.on {
          color: #02a774;
          font-weight: 700;
          border-bottom: 2px solid #02a774;
        }
      }
      .login_header_title > a:first-child {
        margin-right: 40px;
      }
    }
    .login_content {
      form > div {
        display: none;
        .login_message {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;
          .get_verification {
            position: absolute;
            top: 50%;
            right: 10px;
            transform: translateY(-50%);
            border: 0;
            color: #ccc;
            font-size: 14px;
            background: transparent;
          }
          .get_verification.right_phone {
            color: #000;
          }
        }
        input {
          width: 100%;
          height: 100%;
          padding-left: 10px;
          box-sizing: border-box;
          border: 1px solid #ddd;
          border-radius: 4px;
          outline: 0;
          font: 400 14px Arial;
        }
        .login_verification {
          position: relative;
          margin-top: 16px;
          height: 48px;
          font-size: 14px;
          background: #fff;
          .switch_button {
            width: 60px;
            height: 33px;
            position: absolute;
            top: 50%;
            right: 0px;
            transform: translateY(-50%);
          }
        }
        .login_hint {
          margin-top: 12px;
          color: #999;
          font-size: 14px;
          line-height: 20px;
        }
        .login_hint > a {
          color: #02a774;
        }
      }
      form > div.on {
        display: block;
      }
      form .login_submit {
        display: block;
        width: 100%;
        height: 42px;
        margin-top: 30px;
        border-radius: 4px;
        background: #4cd96f;
        color: #fff;
        text-align: center;
        font-size: 16px;
        line-height: 42px;
        border: 0;
      }
      .about_us {
        display: block;
        font-size: 12px;
        margin-top: 20px;
        text-align: center;
        color: #999;
      }
    }
    .go_back {
      position: absolute;
      top: 5px;
      left: 5px;
      width: 30px;
      height: 30px;
      .iconfont {
        font-size: 20px;
        color: #999;
      }
    }
  }
}
</style>