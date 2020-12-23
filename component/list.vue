<template>
<view class="grid col-3 padding-sm" id="icon" >
	<view class="cu-list grid col-3">
		<view class="cu-item" v-for="(item,index) in cuIcon" :key="index" v-if="item.isShow">
			<text class="lg text-gray" :class="'cuIcon-' + item.name"></text>
			<text>{{item.name}}</text>
		</view>
	</view>
</view>


</template>

<script>
	export default {
		data() {
			return {
				cuIcon: [{
					name: 'appreciate',
					isShow: true
				}, {
					name: 'check',
					isShow: true
				}, {
					name: 'close',
					isShow: true
				}, {
					name: 'edit',
					isShow: true
				}, {
					name: 'emoji',
					isShow: true
				}, {
					name: 'favorfill',
					isShow: true
				}],
			};
		},
		methods: {
					}
	}
</script>

<style>

</style>
