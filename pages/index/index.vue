<template>
	<view class="content">
		<!-- <image class="logo" src="/static/logo.png"></image> -->
		<view class="text-area">
			<text class="title">正在跳转小程序...</text>
			<!-- <button type="primary">点击跳转小程序</button> -->
			<!-- <a :href="clickTab">ssss</a> -->
		</view>
	</view>
</template>

<script lang="ts" setup>
	import {
		onLoad,
	} from '@dcloudio/uni-app'
	import {
		ref
	} from 'vue';
	import {$request} from '@/utils/request.js'
	
	let clickTab = ref('')
	let handleUrl = ()=>{
		var paraString = location.href;
		console.log(paraString,'---')
		if (paraString.indexOf("?") !== -1) {
		var str = paraString.substr(paraString.indexOf("?"),paraString.length);
		return str
		}
		
		
	}
	onLoad(async(options) => {
		//?weight=12&merchantNo=12345&smallTicket=321
		 let urlData =   handleUrl()
		let obj = {
			env_version:'trial',
			path:'/pages/expressDelivery/expressDelivery',
			query:urlData
		}
		let res = await $request('generateuUrlink',obj)
		console.log(res)
		if(res.data.code===0){
			// location.href = `${res.data.data}${urlData}`
		}
		
	})
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
