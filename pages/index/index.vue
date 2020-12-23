<template>

	<view>
		<!-- 轮播图 -->

		<swiper class="card-swiper" :class="dotStyle?'square-dot':'round-dot'" :indicator-dots="true" :circular="true"
		 :autoplay="autoplay" :interval="interval" :duration="duration" @change="cardSwiper" indicator-color="#8799a3"
		 indicator-active-color="#0081ff">
			<swiper-item v-for="(item,index) in swiperList" :key="index" :class="cardCur==index?'cur':''">
				<view class="swiper-item">
					<image :src="item.url" mode="aspectFill" v-if="item.type=='image'"></image>
					<video :src="item.url" autoplay loop muted :show-play-btn="false" :controls="false" objectFit="cover" v-if="item.type=='video'"></video>
				</view>
			</swiper-item>
		</swiper>

		<!-- 按钮 -->
		<view class="grid col-2 padding-sm" id="botton">
			<view class="text-center flex flex-wrap justify-around" style="height: 170rpx;">
				<button id="qs" class="cu-btn bg-red round lg animation-reverse shadow" :class="[animation=='qs'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_qs">
					<text class="cuIcon-emojifill">取送</text>
				</button>
			</view>
			<view class="text-center flex flex-wrap justify-around" style="height: 170rpx;">
				<button id="swk" class="cu-btn bg-yellow round lg animation-reverse shadow" :class="[animation=='swk'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_swk">
					<text class="cuIcon-emojifill">刷网课</text>
				</button>
			</view>
			<view class="text-center flex flex-wrap justify-around" style="height: 170rpx;">
				<button id="bbq" class="cu-btn bg-green round lg animation-reverse shadow" :class="[animation=='bbq'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_bbq">
					<text class="cuIcon-emojifill">表白墙</text>
				</button>
			</view>
			<view class="text-center flex flex-wrap justify-around ">
				<button id="tzsc" class="cu-btn bg-orange round lg animation-reverse shadow" :class="[animation=='tzsc'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_tzsc">
					<text class="cuIcon-emojifill">跳蚤市场</text>
				</button>
			</view>
			<view class="text-center flex flex-wrap justify-around" style="height: 170rpx;">
				<button id="yqw" class="cu-btn bg-brown round lg animation-reverse shadow" :class="[animation=='yqw'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_yqw">
					<text class="cuIcon-emojifill">一起玩</text>
				</button>
			</view>
			<view class="text-center flex flex-wrap justify-around" style="height: 170rpx;">
				<button id="zj" class="cu-btn bg-pink round lg animation-reverse shadow" :class="[animation=='zj'?'animation-scale-down':'']"
				 @tap="Toggle" style="width: 250rpx; height: 130rpx;" :disabled="disabled_zj">
					<text class="cuIcon-emojifill">租借</text>
				</button>
			</view>
		</view>

		<!-- 导航栏 -->
		<view>
			<tabbar></tabbar>
		</view>


	</view>
</template>
<script>
	export default {
		data() {
			return {

				//  是否有指示点
				indicatorDots: true,
				// 是否自动播放
				autoplay: true,
				// 自动播放间隔时长(ms)
				interval: 2000,
				// 幻灯片切换时长(ms)
				duration: 500,
				// 轮播图片列表
				swiperList: [{
					id: 0,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg'
				}, {
					id: 1,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big37006.jpg',
				}, {
					id: 2,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big39000.jpg'
				}, {
					id: 3,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big10001.jpg'
				}, {
					id: 4,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big25011.jpg'
				}, {
					id: 5,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big21016.jpg'
				}, {
					id: 6,
					type: 'image',
					url: 'https://ossweb-img.qq.com/images/lol/web201310/skin/big99008.jpg'
				}],

				// 轮播
				cardCur: 0,
				// 轮播
				dotStyle: false,
				// 轮播
				towerStart: 0,
				// 轮播
				direction: '',

				// 按钮是否可用
				// 取送
				disabled_qs: false,
				// 刷网课
				disabled_swk: true,
				// 表白墙
				disabled_bbq: false,
				// 跳蚤市场
				disabled_tzsc: false,
				// 一起玩
				disabled_yqw: false,
				// 租借
				disabled_zj: false,
				// 按钮动画
				animation: '',

			};
		},
		onLoad() {
			// 初始化towerSwiper 传已有的数组名即可
			this.TowerSwiper('swiperList');


		},
		methods: {
			// 轮播
			DotStyle(e) {
				this.dotStyle = e.detail.value
			},
			// 轮播:cardSwiper
			cardSwiper(e) {
				this.cardCur = e.detail.current
			},
			// 轮播:初始化towerSwiper
			TowerSwiper(name) {
				let list = this[name];
				for (let i = 0; i < list.length; i++) {
					list[i].zIndex = parseInt(list.length / 2) + 1 - Math.abs(i - parseInt(list.length / 2))
					list[i].mLeft = i - parseInt(list.length / 2)
				}
				this.swiperList = list
			},

			// 轮播:towerSwiper触摸开始
			TowerStart(e) {
				this.towerStart = e.touches[0].pageX
			},

			// 轮播:towerSwiper计算方向
			TowerMove(e) {
				this.direction = e.touches[0].pageX - this.towerStart > 0 ? 'right' : 'left'
			},

			// 轮播:towerSwiper计算滚动
			TowerEnd(e) {
				let direction = this.direction;
				let list = this.swiperList;
				if (direction == 'right') {
					let mLeft = list[0].mLeft;
					let zIndex = list[0].zIndex;
					for (let i = 1; i < this.swiperList.length; i++) {
						this.swiperList[i - 1].mLeft = this.swiperList[i].mLeft
						this.swiperList[i - 1].zIndex = this.swiperList[i].zIndex
					}
					this.swiperList[list.length - 1].mLeft = mLeft;
					this.swiperList[list.length - 1].zIndex = zIndex;
				} else {
					let mLeft = list[list.length - 1].mLeft;
					let zIndex = list[list.length - 1].zIndex;
					for (let i = this.swiperList.length - 1; i > 0; i--) {
						this.swiperList[i].mLeft = this.swiperList[i - 1].mLeft
						this.swiperList[i].zIndex = this.swiperList[i - 1].zIndex
					}
					this.swiperList[0].mLeft = mLeft;
					this.swiperList[0].zIndex = zIndex;
				}
				this.direction = ""
				this.swiperList = this.swiperList
			},
			// 点击按钮后执行
			Toggle(e) {
				console.log("点击事件")
				var type = e.currentTarget.id;
				this.animation = type;
				setTimeout(() => {
					this.animation = '';
				}, 500);
				// 跳转到相关页面
				uni.navigateTo({
					url: '../' + type + '/index/index?canshu=' + "测试参数传递",
					
					// 执行成功
					success: (res) => {
						console.log("执行成功"+res)
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
	page {
		color: #0081ff;
		background-color: #cce6ff;
	}
</style>
