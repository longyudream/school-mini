<template>
	<view style="margin-top: 100rpx;">
		<view class="text-center bottom-2">
			<button id="bwq" class="bg-cyan cu-btn shadow round" @tap="changePage" :disabled="disabled_bwq">
				<text class="cuIcon-emojifill">帮我取</text>
			</button>
		</view>

		<view class="text-center bottom-2">
			<button id="wqq" class="bg-blue cu-btn   shadow round" @tap="changePage" :disabled="disabled_wqq">
				<text class="cuIcon-emojifill">我去取</text>
			</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 帮我取
				disabled_bwq: false,
				// 我去取
				disabled_wqq: false,

			}
		},
		onLoad: function(option) {
			// 获取参数
			console.log(option.canshu);
		},
		methods: {
			changePage(e) {
				var type = e.currentTarget.id;
				console.log(type)
				// 跳转到相关页面
				uni.navigateTo({
					url: '../' + type+'?canshu=' + "测试参数传递",

					// 执行成功
					success: (res) => {
						console.log("执行成功" + res)
					},
					// 执行失败
					fail: (e) => {
						console.log(e)
						console.log("执行失败")
					},
					// 成功或者失败都会执行
					complete: (res) => {}
				});
			},
		}
	}
</script>

<style>
	page {
		color: #fbbd08;
		background-color: #fef2ced2;
	}

	.bottom-2>button {
		margin: 80rpx;
		font-size: 40rpx;
		width: 250rpx;
		height: 250rpx;
	}
</style>
