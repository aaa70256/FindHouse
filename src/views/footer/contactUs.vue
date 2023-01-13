<template>
	<div class="contactUs">
		<h3>聯絡我們 - 基本資料</h3>
		<div class="contactUs-content">
			<p>
				姓名:鄧賀元
				<br />生日:1996/07/03<br />性別:男<br />工作經歷:將林好羊肉外場(2年)、大苑子工讀(1年)、信義房屋文化店&成功漢神店(3年半)<br />信箱:aaa70256@gmail.com<br />電話:0982065925<br />技術:Html、CSS、JS、Vue.js、Vue
				CLI、Vuex、Vue
				route、AJAX(串接API，專案練習中有使用node.js開基本的API(.JSON)進行串接)
			</p>
		</div>
	</div>
</template>

<style scoped>
.contactUs {
	height: 608px;
	background-size: contain;
	background-position: center center;
	background-image: url(@/assets/圖片1.jpg);
}
.contactUs h3 {
	text-align: center;
	font-size: 40px;
	color: yellowgreen;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 50px;
}
.contactUs-content {
	width: 500px;
	margin: 0 auto;
}
.contactUs-content p {
	font-size: 24px;
	color: blueviolet;
	font-weight: bold;
	line-height: 1.5em;
	text-shadow: -1px -1px white, 1px 1px gray;
}
</style>
