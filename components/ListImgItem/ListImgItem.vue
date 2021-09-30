<template>
	<view class="gg" :style="[{ width: width, height: height }]">
		<u-image :src="src" 
		:width="width" 
		:height="height" 
		:lazy-load="lazyLoad" 
		:border-radius="borderRadius" />
	</view>
</template>

<script>
export default {
	name: 'ListImgItem',
	props: {
		lazyLoad: {
			type: Boolean,
			default: true
		},
		borderRadius: {
			type: String,
			default: '10rpx'
		},
		src: {
			type: String,
			default: '',
			required: true
		},
		width: {
			type: String,
			default: '100%'
		},
		height: {
			type: String,
			default: '200rpx'
		}
	}
};
</script>

<style lang="scss"></style>
