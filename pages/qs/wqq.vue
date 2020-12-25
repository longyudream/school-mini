<template>
	<block>
		<view :id="item.id" class="test" v-for="(item,index) in orderList" :key="index" @click="orderDetail">
			<view class='cu-tag round bg-pink' style="float: left;">{{item.type}}</view>
			<view style="margin-top: 40rpx;">
				<view class="text padding-xs">
					<text class="text-blue ">去哪取: {{item.from}}</text>
				</view>
				<view class="text padding-xs">
					<text class=" text-red ">送去哪: {{item.to}}</text>
				</view>
				<view class="text padding-xs">
					<text class=" text-red ">价格: {{item.price}}</text>
				</view>
			</view>
		</view>

	</block>
</template>
116+1384.9+4410+1538+1621.57+198*146.5
<script>
	export default {
		data() {
			return {
				value: "测试",
				// 订单列表
				orderList: [{
					id: 1,
					type: '外卖',
					from: '菜鸟裹裹',
					to: 'B05宿舍口',
					price: 5,
				}, {
					id: 2,
					type: '食堂',
					from: '1号餐厅',
					to: 'B05宿舍口',
					price: 5,
				}, {
					id: 3,
					type: '其他',
					from: '5号教学楼',
					to: 'B05宿舍口',
					price: 5,
				}]
			};
		},
		onLoad: function(e) {

		},
		methods: {
			orderDetail(e) {
				// id即是订单id
				let orderId=e.currentTarget.id;
				console.log(orderId)
				// 跳转到相关页面
				uni.navigateTo({
					url: 'order_detail?orderId='+orderId,
				
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
			}

		}
	}
</script>

<style>
	.test {
		background-color: #ffffff;
		border: #DD514C;
		height: 100px;
		margin-top: 30rpx;
		margin-left: 150rpx;
		margin-right: 150rpx;
		border-radius: 20upx;
		text-align: center;
		overflow: hidden;

	}

	.text {
		font-size: 35rpx;
	}
</style>
