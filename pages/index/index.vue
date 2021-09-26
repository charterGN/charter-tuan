<template>
	<view class="content">
		<u-button type="primary">主要按钮</u-button>
		<view>时间为：{{$u.timeFormat(timestamp, 'yyyy年mm月dd日')}}</view>
		<view>时间为：{{time}}</view>
		<image class="logo" src="/static/logo.png"></image>
		<view class="text-area">
			<text class="title">{{ title }}</text>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello',
			time: null,
			timestamp: '1581170184'
		};
	},
	onLoad() {
		this.time = this.$u.timeFormat(this.timestamp, 'yyyy-mm-dd');
		
		this.$u.get('https://jsonplaceholder.typicode.com/posts/1').then(res=>{
			console.log(res)
		})
		
		this.$u.api.getPosts().then(res => {
			console.log(res);
		})
	},
	methods: {}
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
