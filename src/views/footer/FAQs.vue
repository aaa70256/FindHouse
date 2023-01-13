<template>
	<div class="FAQs">
		<h3>FAQs - 問題與解析</h3>
		<div class="FAQs-content">
			<p>
				Q:Ajax串接資料時 更新不同步 <br />
				A:利用async與await語法糖，解決axios異步處理的問題。 <br />
				Q:Route跳轉頁面時 想跳轉至新的一整頁 <br />
				A:使用slot的方式去插入layout，即可實現跳轉一整頁面的功能。 <br />
				Q:Component間資料傳遞 <br />
				A:利用props以及emit實現父子間資料傳遞 <br />
			</p>
		</div>
	</div>
</template>

<style scoped>
.FAQs {
	height: 608px;
	background-size: contain;
	background-position: center center;
	background-image: url(@/assets/圖片1.jpg);
}
.FAQs h3 {
	text-align: center;
	font-size: 40px;
	color: mediumblue;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 50px;
}
.FAQs-content {
	width: 500px;
	margin: 0 auto;
}
.FAQs-content p {
	font-size: 24px;
	color: olive;
	font-weight: bold;
	line-height: 1.5em;
	text-shadow: -1px -1px white, 1px 1px gray;
}
</style>
