<template>
	<view>
		<form>
			<view class="cu-form-group margin-top">
				<view class="title">取点啥</view>
				<picker @change="PickerChange" :value="index" :range="picker" >
					<input placeholder="选择物品类别" name="input"></input>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">收货地址</view>
				<input  placeholder="在哪取" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">收货地址</view>
				<input placeholder="在哪收" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">备注</view>
				<input placeholder="快递信息,是否吃葱姜蒜等等" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">手机号码</view>
				<input placeholder="仅接单人可见" name="input"></input>
			</view>
			<view class="cu-form-group">
				<view class="title">啥时候取</view>
				<picker mode="date" :value="get_date" start="2021-01-01" end="2021-12-30" @change="GetDateChange">
					<view class="picker">
						{{get_date}}
					</view>
				</picker>
				<picker mode="time" :value="get_time" start="06:00" end="22:00" @change="GetTimeChange">
					<view class="picker">
						{{get_time}}
					</view>
				</picker>
			</view>
			<view class="cu-form-group">
				<view class="title">啥时候送</view>
				<picker mode="date" :value="send_date" start="2021-01-01" end="2021-12-30" @change="SendDateChange">
					<view class="picker">
						{{send_date}}
					</view>
				</picker>
				<picker mode="time" :value="send_time" start="06:00" end="22:00" @change="SendTimeChange">
					<view class="picker">
						{{send_time}}
					</view>
				</picker>
			</view>
			
			<view class="cu-bar bg-white margin-top">
				<view class="action">
					<text class="cuIcon-title text-orange "></text> 费用
				</view>
				<text>{{}}</text>
				<view class="action">
					<button class="cu-btn bg-green shadow" @tap="showModal" data-target="ChooseModal">选择</button>
				</view>
			</view>
			<view class="cu-modal bottom-modal" :class="modalName=='ChooseModal'?'show':''" @tap="hideModal">
				<view class="cu-dialog" @tap.stop="">
					<view class="cu-bar bg-white">
						<view class="action text-blue" @tap="hideModal">取消</view>
						<view class="action text-green" @tap="hideModal">确定</view>
					</view>
					<view class="grid col-3 padding-sm">
						<view v-for="(item,index) in checkbox" class="padding-xs" :key="index">
							<button class="cu-btn orange lg block" :class="item.checked?'bg-orange':'line-orange'" @tap="ChooseCheckbox"
							 :data-value="item.value"> {{item.name}}
								<view class="cu-tag sm round" :class="item.checked?'bg-white text-orange':'bg-orange'" v-if="item.hot">HOT</view>
							</button>
						</view>
					</view>
				</view>
			</view> 
		</form>
		
		<button>发布</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 选择取件类别以及取件序号
				index: -1,
				picker: ['快递', '食堂一顿饭', '外卖','课本','行李','其他'],
				get_time:"请选择",
				get_date:"请选择",
				send_time:"请选择",
				send_date:"请选择",
				modalName: null,
				price:"",
				checkbox: [{
					value: 0,
					name: '10元',
					checked: false,
					hot: false,
				}, {
					value: 1,
					name: '20元',
					checked: true,
					hot: false,
				}, {
					value: 2,
					name: '30元',
					checked: true,
					hot: true,
				}, {
					value: 3,
					name: '60元',
					checked: false,
					hot: true,
				}, {
					value: 4,
					name: '80元',
					checked: false,
					hot: false,
				}, {
					value: 5,
					name: '100元',
					checked: false,
					hot: false,
				}]
			};
		},
		methods: {
			
			PickerChange(e) {
				this.index = e.detail.value
			},
			// 日期选择框变化函数
			GetTimeChange(e) {
				this.get_time = e.detail.value
			},
			GetDateChange(e) {
				this.get_date = e.detail.value
			},
			SendTimeChange(e) {
				this.send_time = e.detail.value
			},
			SendDateChange(e) {
				this.send_date = e.detail.value
			},
			// 模态框选择
			showModal(e) {
				this.modalName = e.currentTarget.dataset.target
			},
			// 隐藏模态框
			hideModal(e) {
				this.modalName = null
			},
			// 选择一个模块
			ChooseCheckbox(e) {
				let items = this.checkbox;
				let values = e.currentTarget.dataset.value;
				for (let i = 0, lenI = items.length; i < lenI; ++i) {
					if (items[i].value == values) {
						items[i].checked = !items[i].checked;
						break
					}
				}
			}
		}
	}
</script>

<style>
	.cu-form-group .title {
		min-width: calc(4em + 15px);
	}
</style>
