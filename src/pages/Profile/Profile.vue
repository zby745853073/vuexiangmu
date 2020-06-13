<template>
	<section class="profile">
	    <HeaderTop title="我的"></HeaderTop>
	    <section class="profile-number">
	      <a href="javascript:" class="profile-link">
	        <div class="profile_image">
	          <i class="iconfont icon-wode"></i>
	        </div>
	        <div class="user-info">
	          <p class="user-info-top">登录/注册</p>
	          <p>
	            <span class="user-icon">
	              <i class="iconfont icon-calculator icon-mobile"></i>
	            </span>
	            <span class="icon-mobile-number">暂无绑定手机号</span>
	          </p>
	        </div>
	        <span class="arrow">
	          <i class="iconfont icon-youjiantou"></i>
	        </span>
	      </a>
	    </section>
	    <section class="profile_info_data border-1px">
	      <ul class="info_data_list">
	        <a href="javascript:" class="info_data_link">
	          <span class="info_data_top">
	            <span>0.00</span>元
	          </span>
	          <span class="info_data_bottom">我的余额</span>
	        </a>
	        <a href="javascript:" class="info_data_link">
	          <span class="info_data_top">
	            <span>0</span>个
	          </span>
	          <span class="info_data_bottom">我的优惠</span>
	        </a>
	        <a href="javascript:" class="info_data_link">
	          <span class="info_data_top">
	            <span>0</span>分
	          </span>
	          <span class="info_data_bottom">我的积分</span>
	        </a>
	      </ul>
	    </section>
	    <section class="profile_my_order border-1px">
	      <!-- 我的订单 -->
	      <a href="javascript:" class="my_order">
	        <span>
	          <i class="iconfont icon-order_icon"></i>
	        </span>
	        <div class="my_order_div">
	          <span>我的订单</span>
	          <span class="my_order_icon">
	            <i class="iconfont icon-youjiantou"></i>
	          </span>
	        </div>
	      </a>
	      <!-- 积分商城 -->
	      <a href="javascript:" class="my_order">
	        <span>
	          <i class="iconfont icon-shoucangshangpin"></i>
	        </span>
	        <div class="my_order_div">
	          <span>积分商城</span>
	          <span class="my_order_icon">
	            <i class="iconfont icon-youjiantou"></i>
	          </span>
	        </div>
	      </a>
	      <!-- 硅谷外卖会员卡 -->
	      <a href="javascript:" class="my_order">
	        <span>
	          <i class="iconfont icon-huiyuan"></i>
	        </span>
	        <div class="my_order_div">
	          <span>硅谷外卖会员卡</span>
	          <span class="my_order_icon">
	            <i class="iconfont icon-youjiantou"></i>
	          </span>
	        </div>
	      </a>
	    </section>
	    <section class="profile_my_order border-1px">
	      <!-- 服务中心 -->
	      <a href="javascript:" class="my_order">
	        <span>
	          <i class="iconfont icon-tuihuanhuo"></i>
	        </span>
	        <div class="my_order_div">
	          <span>服务中心</span>
	          <span class="my_order_icon">
	            <i class="iconfont icon-youjiantou"></i>
	          </span>
	        </div>
	      </a>
	    </section>
	  </section>

</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	@import "../../../common/style/minxins.scss";
	.profile {
	  width: 100%;
	  .header {
	    background-color: #02a774;
	    position: fixed;
	    z-index: 100;
	    left: 0;
	    top: 0;
	    width: 100%;
	    height: 45px;
	    .header_title {
	      position: absolute;
	      top: 50%;
	      left: 50%;
	      transform: translate(-50%, -50%);
	      width: 30%;
	      color: #fff;
	      font-size: 22px;
	      text-align: center;
	    }
	  }
	  .profile-number {
	    margin-top: 45.5px;
	    .profile-link {
	      *zoom: 1;
	      position: relative;
	      display: block;
	      background: #02a774;
	      padding: 20px 10px;
	      @include clearFix();
	      .profile_image {
	        float: left;
	        width: 60px;
	        height: 60px;
	        border-radius: 50%;
	        overflow: hidden;
	        vertical-align: top;
	        .icon-wode {
	          background: #e4e4e4;
	          font-size: 60px;
	        }
	      }
	      .user-info {
	        float: left;
	        margin-top: 8px;
	        margin-left: 15px;
	        p.user-info-top {
	          padding-bottom: 8px;
	        }
	        p {
	          font-weight: 700;
	          font-size: 18px;
	          color: #fff;
	          .user-icon {
	            display: inline-block;
	            margin-left: -15px;
	            margin-right: 5px;
	            width: 20px;
	            height: 20px;
	            .icon-mobile {
	              font-size: 20px;
	            }
	          }
	          .icon-mobile-number {
	            font-size: 14px;
	            color: #fff;
	          }
	        }
	      }
	      .arrow {
	        width: 12px;
	        height: 12px;
	        position: absolute;
	        right: 15px;
	        top: 40%;
	        @include clearFix();
	        .icon-youjiantou {
	          color: #fff;
	          font-size: 20px;
	        }
	      }
	    }
	  }
	  .profile_info_data {
	    position: relative;
	    width: 100%;
	    background: #fff;
	    overflow: hidden;
	    &::before {
	      content: "";
	      position: absolute;
	      z-index: 200;
	      left: 0;
	      bottom: 0;
	      width: 100%;
	      height: 1px;
	      background-color: #e4e4e4;
	      transform: scaleY(0.5);
	    }
	    @include clearFix();
	    .info_data_list {
	      *zoom: 1;
	      .info_data_link {
	        float: left;
	        width: 33%;
	        text-align: center;
	        border-right: 1px solid #f1f1f1;
	        .info_data_top {
	          display: block;
	          width: 100%;
	          font-size: 14px;
	          color: #333;
	          padding: 15px 5px 10px;
	          span {
	            display: inline-block;
	            font-size: 30px;
	            color: #f90;
	            font-weight: 700;
	            line-height: 30px;
	          }
	        }
	        .info_data_bottom {
	          display: inline-block;
	          font-size: 14px;
	          color: #666;
	          font-weight: 400;
	          padding-bottom: 10px;
	        }
	      }
	    }
	    .info_data_link:nth-of-type(3) .info_data_top span {
	      color: #6ac20b;
	    }
	    .info_data_link:nth-of-type(2) .info_data_top span {
	      color: #ff5f3e;
	    }
	  }
	  .profile_my_order {
	    position: relative;
	    margin-top: 10px;
	    background: #fff;
	    &::before {
	      content: "";
	      position: absolute;
	      z-index: 200;
	      left: 0;
	      top: 0;
	      width: 100%;
	      height: 1px;
	      background-color: #e4e4e4;
	    }
	    .my_order {
	      display: flex;
	      align-items: center;
	      padding-left: 15px;
	      span {
	        .icon-order_icon {
	          color: #02a774;
	        }
	        .icon-shoucangshangpin {
	          color: #ff5f3e;
	        }
	        .icon-huiyuan {
	          color: #f90;
	        }
	        .icon-tuihuanhuo {
	          color: #02a774;
	        }
	        .iconfont {
	          margin-left: -10px;
	          font-size: 20px;
	        }
	      }
	      .my_order_div {
	        width: 100%;
	        border-bottom: 1px solid #f1f1f1;
	        padding: 18px 10px 18px 0;
	        font-size: 16px;
	        color: #333;
	        display: flex;
	        justify-content: space-between;
	        span {
	          display: block;
	        }
	        .my_order_icon {
	          width: 10px;
	          height: 10px;
	          .icon-youjiantou {
	            color: #bbb;
	            font-size: 20px;
	          }
	        }
	      }
	    }
	    .my_order > span {
	      display: flex;
	      align-items: center;
	      width: 20px;
	      height: 20px;
	    }
	  }
}
</style>
