<template>
	<view class="content">
		{{initData}}
	</view>
</template>

<script>
import { mapState } from 'vuex';
export default {
	computed: {
		// 第二种state获取方式，利用对象，进行函数化返回状态值
		// ...mapState({
		// 	initData: state => state.indexModule.initData
		// })
		
		// 第三方state获取方式，利用命名空间与状态数组列表进行映射
		...mapState('indexModule',['initData'])
	},
	mounted() {
		// 第一种state获取方式，直接利用store调用
		// console.log(this.$store.state.indexModule.initData);
	}
};
</script>

<style>
.content {
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}

.logo {
	height: 200rpx;
	width: 200rpx;
	margin-top: 200rpx;
	margin-left: auto;
	margin-right: auto;
	margin-bottom: 50rpx;
}

.text-area {
	display: flex;
	justify-content: center;
}

.title {
	font-size: 36rpx;
	color: #8f8f94;
}
</style>
