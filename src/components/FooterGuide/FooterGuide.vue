<template>
	<footer class="footer_guide border-1px">
		<a href="javascript:;" class="guide_item on">
			<router-link exact :to="{path:'/msite'}" ><span>外卖</span></router-link>
		</a>
		<a href="javascript:;" class="guide_item">
			<router-link  :to="{path:'/search'}" ><span>搜索</span></router-link>
		</a>
		<a href="javascript:;" class="guide_item">
			<router-link  :to="{path:'/order'}" ><span>订单</span></router-link>
			<!-- <span>订单</span> -->
		</a>
		<a href="javascript:;" class="guide_item">
			<router-link  :to="{path:'/profile'}" ><span>我的</span></router-link>
			<!-- <span>我的</span> -->
		</a>
	</footer>

</template>

<script>
</script>

<style scoped lang="scss">
	@import "../../../common/style/minxins.scss";

	.footer_guide {
		@include top-border-1px(#e4e4e4);
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #fff;
		width: 100%;
		height: 50px;
		display: flex;

		.guide_item {
			display: flex;
			flex: 1;
			text-align: center;
			flex-direction: column;
			align-items: center;
			margin: 5px;
			color: #999999;

			&.on {
				color: #02a774;
			}

			span {
				font-size: 12px;
				margin-top: 2px;
				margin-bottom: 2px;

				.iconfont {
					font-size: 22px;
				}
			}
		}
	}
</style>
