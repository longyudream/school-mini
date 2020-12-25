<template>
</template>

<script>
	export default {
		data() {
			return {
				orderId: 0,
			};
		},
		onLoad: function(e) {
			// 获取参数
			this.orderId=e.orderId
			console.log(this.orderId)
		},
		methods: {


		}
	}
</script>

<style>
</style>
