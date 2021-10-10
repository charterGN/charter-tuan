<template>
	<view class="gg">
		<u-navbar :is-back="true" :border-bottom="false" class="navbar"></u-navbar>

		<scroll-view scroll-y class="gg-sv">
			<view class="gg-content">
				<!-- 商品轮播图 -->
				<u-swiper :list="swiperList" :height="500" mode="number" indicator-pos="bottomRight"></u-swiper>

				<!-- 商品缩略图及属性还有价格购买数量的显示 -->
				<view class="u-flex u-type-info-light u-p-20 gg-content-price">
					<view class="u-p-r-20"><ListImgItem src="https://cdn.uviewui.com/uview/swiper/1.jpg" width="120rpx" height="120rpx"></ListImgItem></view>
					<!-- 区别秒杀商品与一般商品的价格体系 -->
					<!-- 秒杀商品显示 -->
					<!-- 
					<block>
						<view>
							<view class="gg-content-price-current u-flex">
								<view>秒杀价格：￥18.88</view>
								<view class="u-p-l-20">市场价格：￥19.88</view>
							</view>
							<view class="gg-content-price-limit">
								<view>
									限购：2 件 销售：1 件 库存：100 件
								</view>
								<view>
									秒杀场次：08:00 倒计时：
									<u-count-down ref="seckillCountDown" :timestamp="86400"></u-count-down>
								</view>
							</view>
						</view>
					</block>
					-->
					<!-- 普通商品显示 -->
					<block>
						<view>
							<view class="gg-content-price-current u-flex">
								<view>当前价格：￥18.88</view>
								<view class="u-p-l-20">市场价格：￥19.88</view>
							</view>
							<view class="gg-content-price-limit"><view>限购数量：2 件</view></view>
						</view>
					</block>
				</view>

				<!-- 商品名称 -->
				<view class="u-m-20 u-p-20 gg-content-container"><view class="u-flex">商品名称</view></view>

				<!-- 属性列表 -->
				<view class="u-m-20 u-p-20 gg-content-container">
					<view class="u-p-t-5">品牌：硅谷牌</view>
					<view class="u-p-t-5">规格：50g</view>
					<view class="u-p-t-5">产地：上海</view>
				</view>

				<!-- 活动规则 -->
				<view class="u-m-20 u-p-20 gg-content-container">
					<view class="u-p-t-5">满29.00减5.00</view>
					<view class="u-p-t-5">满10.00减1.00</view>
				</view>

				<!-- 售后与提货地址 -->
				<view class="u-m-20 u-p-20 gg-content-container">
					<view class="u-flex">
						<view class="u-font-sm u-m-r-20 u-type-info">售后无忧</view>
						<view class="u-font-sm u-m-r-20 u-flex-1">
							支持保价
							<text class="u-type-error">・</text>
							极速退款
							<text class="u-type-error">・</text>
							7天无理由退货
						</view>
						<u-icon name="arrow-right" size="24" class="u-m-r-20 u-type-info"></u-icon>
					</view>

					<view class="u-flex u-m-t-20">
						<view class="u-font-sm u-m-r-20 u-type-info">提货信息</view>
						<view class="u-font-sm u-m-r-20 u-flex-1">
							<view>
								现在下单，
								<text class="u-type-error">明天16:00可提货</text>
							</view>
							<view>提货点：请设置提货点</view>
						</view>
						<u-icon name="arrow-right" size="24" class="u-m-r-20 u-type-info"></u-icon>
					</view>
				</view>

				<!-- 商品详情图片清单 -->
				<view class="u-m-20 u-p-20 gg-content-container">
					<image src="https://cdn.uviewui.com/uview/swiper/1.jpg"></image>
					<image src="https://cdn.uviewui.com/uview/swiper/2.jpg"></image>
					<image src="https://cdn.uviewui.com/uview/swiper/3.jpg"></image>
				</view>
				<u-gap height="30"></u-gap>
			</view>
		</scroll-view>

		<view class="gg-navigation">
			<view class="navigation">
				<view class="left">
					<view class="item" @click="gotoHome">
						<u-icon name="home-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">首页</view>
					</view>
					<view class="item car">
						<u-badge class="car-num" :count="1" type="error" :offset="[-3, -6]"></u-badge>
						<u-icon name="shopping-cart-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">购物车</view>
					</view>

					<view class="item car">
						<u-badge class="car-num" :count="2" type="error" :offset="[-3, -6]"></u-badge>
						<u-icon name="gift-fill" :size="40" :color="$u.color['contentColor']"></u-icon>
						<view class="text u-line-1">优惠券</view>
					</view>
				</view>
				<!-- 即将秒杀与加入购物车的显示 -->
				<view class="right u-p-r-10 u-flex">
					<!-- 即将开抢 -->
					<!-- <block>
						<view class="u-m-r-20 u-line-1  u-flex-1 u-text-center">场次: 08:00</view>
						<view class="buy-disabled btn u-line-1">即将开抢</view>
					</block> -->
					<!-- 加入购物车 -->
					<block>
						<view class="u-m-r-20 u-line-1  u-flex-1"><AddToCart></AddToCart></view>
						<view class="buy btn u-line-1">立即购买</view>
					</block>
				</view>
				<!-- 秒杀结束显示 -->
				<!--  
				<view class="right u-p-r-10 u-flex">
					<view class="u-m-r-20 u-line-1 u-flex-1"></view>
					<view class="buy-disabled btn u-line-1">秒杀结束</view>
				</view>
				-->
			</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			swiperList: [
				{
					image: 'https://cdn.uviewui.com/uview/swiper/1.jpg',
					title: '昨夜星辰昨夜风，画楼西畔桂堂东'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/2.jpg',
					title: '身无彩凤双飞翼，心有灵犀一点通'
				},
				{
					image: 'https://cdn.uviewui.com/uview/swiper/3.jpg',
					title: '谁念西风独自凉，萧萧黄叶闭疏窗，沉思往事立残阳'
				}
			]
		};
	},
	onLoad(options) {
		console.log(options);
	}
};
</script>

<style lang="scss">
.gg {
	height: 100%;

	&-sv {
		height: calc(100vh - 116rpx - 102rpx);
	}

	&-content {
		background-color: $u-bg-color;

		&-price {
			background: linear-gradient(to right, rgb(255, 180, 61), rgb(255, 101, 0));
		}

		&-container {
			z-index: 9999;
			background-color: #fff;
			border-radius: 25rpx;
		}
	}

	&-navigation {
		position: fixed;
		bottom: 0;
		width: 100%;
		.navigation {
			display: flex;
			border: solid 2rpx #f2f2f2;
			background-color: #ffffff;
			padding: 16rpx 0;
			justify-content: space-around;
			.left {
				display: flex;
				font-size: 20rpx;
				.item {
					margin: 0 30rpx;
					&.car {
						text-align: center;
						position: relative;
						.car-num {
							position: absolute;
							top: -10rpx;
							right: -10rpx;
						}
					}
				}
			}
			.right {
				width: 375rpx;
				display: flex;
				font-size: 28rpx;
				align-items: center;
				.btn {
					line-height: 50rpx;
					padding: 0 30rpx;
					border-radius: 36rpx;
					color: #ffffff;
				}
				.buy {
					background-color: #ff7900;
				}
				.buy-disabled {
					background-color: $u-type-info;
				}
			}
		}
	}
}
</style>
