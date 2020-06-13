<template>
	<section class="msite">
		<HeaderTop title="昌平区北七家宏福科技园(337省道北)">
			<span slot="search" class="header_search">
				<i class="iconfont icon-sousuo"></i>
			</span>
			<span slot="login" class="header_login">
				<span class="header_login_text">登录|注册</span>
			</span>
		</HeaderTop>
		<!--首页导航-->
		<nav class="msite_nav">
			<swiper ref="mySwiper" :options="swiperOptions">
				<swiper-slide>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/1.jpg" />
						</div>
						<span>甜品饮品</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/2.jpg" />
						</div>
						<span>商超便利</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/3.jpg" />
						</div>
						<span>美食</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/4.jpg" />
						</div>
						<span>简餐</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/5.jpg" />
						</div>
						<span>新店特惠</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/6.jpg" />
						</div>
						<span>准时达</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/7.jpg" />
						</div>
						<span>预订早餐</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/8.jpg" />
						</div>
						<span>土豪推荐</span>
					</a>
				</swiper-slide>
				<swiper-slide>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/9.jpg" />
						</div>
						<span>甜品饮品</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/10.jpg" />
						</div>
						<span>商超便利</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/11.jpg" />
						</div>
						<span>美食</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/12.jpg" />
						</div>
						<span>简餐</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/13.jpg" />
						</div>
						<span>新店特惠</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/14.jpg" />
						</div>
						<span>准时达</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/1.jpg" />
						</div>
						<span>预订早餐</span>
					</a>
					<a href="javascript:" class="link_to_food">
						<div class="food_container">
							<img src="./images/nav/2.jpg" />
						</div>
						<span>土豪推荐</span>
					</a>
				</swiper-slide>
				<div class="swiper-pagination" slot="pagination"></div>
			</swiper>
		</nav>
		<!--首页附近商家-->
		<div class="msite_shop_list">
			<div class="shop_header">
				<i class="iconfont icon-mendian"></i>
				<span class="shop_header_title">附近商家</span>
			</div>
			<div class="shop_container">
				<ul class="shop_list">
					<li class="shop_li border-1px">
						<a>
							<div class="shop_left">
								<img class="shop_img" src="./images/shop/1.jpg" />
							</div>
							<div class="shop_right">
								<section class="shop_detail_header">
									<h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
									<ul class="shop_detail_ul">
										<li class="supports">保</li>
										<li class="supports">准</li>
										<li class="supports">票</li>
									</ul>
								</section>
								<section class="shop_rating_order">
									<section class="shop_rating_order_left">
										<div class="star star-24">
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item half"></span>
											<span class="star-item off"></span>
										</div>
										<div class="rating_section">3.6</div>
										<div class="order_section">月售106单</div>
									</section>
									<section class="shop_rating_order_right">
										<span class="delivery_style delivery_right">硅谷专送</span>
									</section>
								</section>
								<section class="shop_distance">
									<p class="shop_delivery_msg">
										<span>¥20起送</span>
										<span class="segmentation">/</span>
										<span>配送费约¥5</span>
									</p>
								</section>
							</div>
						</a>
					</li>
					<li class="shop_li border-1px">
						<a>
							<div class="shop_left">
								<img class="shop_img" src="./images/shop/2.jpg" />
							</div>
							<div class="shop_right">
								<section class="shop_detail_header">
									<h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
									<ul class="shop_detail_ul">
										<li class="supports">保</li>
										<li class="supports">准</li>
										<li class="supports">票</li>
									</ul>
								</section>
								<section class="shop_rating_order">
									<section class="shop_rating_order_left">
										<div class="star star-24">
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item off"></span>
										</div>
										<div class="rating_section">4.1</div>
										<div class="order_section">月售106单</div>
									</section>
									<section class="shop_rating_order_right">
										<span class="delivery_style delivery_right">硅谷专送</span>
									</section>
								</section>
								<section class="shop_distance">
									<p class="shop_delivery_msg">
										<span>¥20起送</span>
										<span class="segmentation">/</span>
										<span>配送费约¥5</span>
									</p>
								</section>
							</div>
						</a>
					</li>
					<li class="shop_li border-1px">
						<a>
							<div class="shop_left">
								<img class="shop_img" src="./images/shop/3.jpg" />
							</div>
							<div class="shop_right">
								<section class="shop_detail_header">
									<h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
									<ul class="shop_detail_ul">
										<li class="supports">保</li>
										<li class="supports">准</li>
										<li class="supports">票</li>
									</ul>
								</section>
								<section class="shop_rating_order">
									<section class="shop_rating_order_left">
										<div class="star star-24">
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item off"></span>
											<span class="star-item off"></span>
										</div>
										<div class="rating_section">3.2</div>
										<div class="order_section">月售106单</div>
									</section>
									<section class="shop_rating_order_right">
										<span class="delivery_style delivery_right">硅谷专送</span>
									</section>
								</section>
								<section class="shop_distance">
									<p class="shop_delivery_msg">
										<span>¥20起送</span>
										<span class="segmentation">/</span>
										<span>配送费约¥5</span>
									</p>
								</section>
							</div>
						</a>
					</li>
					<li class="shop_li border-1px">
						<a>
							<div class="shop_left">
								<img class="shop_img" src="./images/shop/4.jpg" />
							</div>
							<div class="shop_right">
								<section class="shop_detail_header">
									<h4 class="shop_title ellipsis">锄禾日当午，汗滴禾下土</h4>
									<ul class="shop_detail_ul">
										<li class="supports">保</li>
										<li class="supports">准</li>
										<li class="supports">票</li>
									</ul>
								</section>
								<section class="shop_rating_order">
									<section class="shop_rating_order_left">
										<div class="star star-24">
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item on"></span>
											<span class="star-item half"></span>
											<span class="star-item off"></span>
										</div>
										<div class="rating_section">3.6</div>
										<div class="order_section">月售106单</div>
									</section>
									<section class="shop_rating_order_right">
										<span class="delivery_style delivery_right">硅谷专送</span>
									</section>
								</section>
								<section class="shop_distance">
									<p class="shop_delivery_msg">
										<span>¥20起送</span>
										<span class="segmentation">/</span>
										<span>配送费约¥5</span>
									</p>
								</section>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	</section>

</template>

<script>
	export default {

	}
</script>

<style scoped lang="scss">
	@import "../../../common/style/minxins.scss";

	.msite {
		width: 100%;
	}

	/* 首页导航slider CSS */
	.msite_nav {
		position: relative;
		margin-top: 45px;
		height: 200px;
		background: #fff;

		.swiper-container {
			width: 100%;
			height: 100%;

			.swiper-wrapper {
				width: 100%;
				height: 100%;

				.swiper-slide {
					display: flex;
					justify-content: center;
					align-items: flex-start;
					flex-wrap: wrap;

					.link_to_food {
						width: 25%;

						.food_container {
							display: block;
							width: 100%;
							text-align: center;
							padding-bottom: 10px;
							font-size: 0;

							img {
								display: inline-block;
								width: 50px;
								height: 50px;
							}
						}

						span {
							display: block;
							width: 100%;
							text-align: center;
							font-size: 13px;
							color: #666;
						}
					}
				}
			}
		}
	}

	/* 首页导航slider CSS --end */

	/* 首页附近商家CSS */
	.msite_shop_list {
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

		.shop_header {
			padding: 10px 10px 0;

			.shop_header_title {
				color: #999;
				font-size: 14px;
				line-height: 20px;
				margin-left: 5px;
			}
		}

		.shop_container {
			margin-bottom: 50px;

			.shop_li {
				position: relative;
				width: 100%;

				&::before {
					content: "";
					position: absolute;
					z-index: 200;
					left: 0;
					bottom: 0;
					width: 100%;
					height: 1px;
					background-color: #f1f1f1;
					transform: scaleY(0.5);
				}

				a {
					display: block;
					box-sizing: border-box;
					padding: 15px 8px;
					width: 100%;
					@include clearFix();

					.shop_left {
						float: left;
						box-sizing: border-box;
						width: 23%;
						height: 75px;
						padding-right: 10px;

						.shop_img {
							display: block;
							width: 100%;
							height: 100%;
						}
					}

					.shop_right {
						float: right;
						width: 77%;
						@include clearFix();

						.shop_detail_header {
							*zoom: 1;
							width: 100%;
							@include clearFix();

							.shop_title {
								float: left;
								width: 140px;
								color: #333;
								font-size: 16px;
								line-height: 16px;
								font-weight: 700;

								&::before {
									content: "品牌";
									display: inline-block;
									font-size: 11px;
									line-height: 11px;
									color: #333;
									background-color: #ffd930;
									padding: 2px 2px;
									border-radius: 2px;
									margin-right: 5px;
								}
							}

							.shop_detail_ul {
								float: right;
								margin-top: 3px;

								.supports {
									float: left;
									font-size: 10px;
									color: #999;
									border: 1px solid #f1f1f1;
									padding: 0 2px;
									border-radius: 2px;
								}
							}
						}

						.shop_rating_order {
							*zoom: 1;
							width: 100%;
							margin-top: 18px;
							margin-bottom: 8px;
							@include clearFix();

							.shop_rating_order_left {
								float: left;
								color: #ff9a0d;

								.star {
									float: left;
									font-size: 0;

									.star-item {
										width: 10px;
										height: 10px;
										margin-right: 3px;
										background-size: 10px 10px;
										display: inline-block;
										background-repeat: no-repeat;
									}

									.star-item.on {
										background-image: url(./images/stars/star24_on@2x.png);
									}

									.star-item.half {
										background-image: url("./images/stars/star24_half@2x.png");
									}

									.star-item.off {
										background-image: url(./images/stars/star24_off@2x.png);
									}
								}

								.rating_section {
									float: left;
									font-size: 10px;
									color: #ff6000;
									margin-left: 4px;
								}

								.order_section {
									float: left;
									font-size: 10px;
									color: #666;
									transform: scale(0.8);
								}
							}

							.shop_rating_order_right {
								float: right;
								font-size: 0;

								.delivery_right {
									color: #02a774;
									border: 1px solid #02a774;
								}

								.delivery_style {
									transform-origin: 35px 0;
									transform: scale(0.7);
									display: inline-block;
									font-size: 12px;
									padding: 1px;
									border-radius: 2px;
								}
							}
						}

						.shop_distance {
							width: 100%;
							font-size: 12px;

							.shop_delivery_msg {
								float: left;
								transform-origin: 0;
								transform: scale(0.9);
								color: #666;

								.segmentation {
									color: #ccc;
								}
							}
						}
					}
				}
			}
		}
	}

	/* 首页附近商家CSS --end */
</style>
