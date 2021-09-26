<template>
	<view class="content"></view>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	methods: {
		// 第二种调用actions方式，利用命名空间与动作名称的数组映射
		// ...mapActions(['indexModule/getPosts'])
		
		// 第三种调用actions方式，利用声明命名空间以及动作数组列表的方式映射
		// ...mapActions('indexModule',['getPosts'])
		
		// 第四种调用actions方式，利用声明命名空间以及对象别名的方式进行映射
		...mapActions('indexModule',{
			getIndexPosts:'getPosts'
		})
	},
	mounted() {
		// 第一种调用actions方式，直接利用store调用
		// this.$store.dispatch('indexModule/getPosts');
		
		// 第二种调用actions方式，利用命名空间与动作名称的数组映射，并且进行函数化调用
		// this['indexModule/getPosts']();
		
		// 第三种调用actions方式，利用声明命名空间以及动作数组列表的方式映射
		// this.getPosts();
		
		// 第四种调用actions方式，利用声明命名空间以及对象别名的方式进行映射
		this.getIndexPosts();
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
