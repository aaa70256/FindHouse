<template>
	<div class="viewWeb">
		<h3>網頁導染 - 作法分析</h3>
		<div class="viewWeb-content">
			<p>
				本專案使用模組化的方式，將所需要使用的Component像樂高一樣將它拼裝起來，優點是我們之後如果需要針對專案進行更新或是改版，只需要針對Component去做更新或修改即可，
				在資料儲存的部分，有使用到Vuex的方式，將我們的資料存於state中即可，若元件有需要state中的資料再自行去取即可，資料的部分，有自行創建一個假資料JSON檔，模擬我們在
				用AJAX串接API的功能，最後頁面在做轉換時，使用Vue
				route的方式，將路由做切換實現頁面跳轉的功能。
			</p>
		</div>
	</div>
</template>

<style scoped>
.viewWeb {
	height: 608px;
	background-size: contain;
	background-position: center center;
	background-image: url(@/assets/圖片1.jpg);
}
.viewWeb h3 {
	text-align: center;
	font-size: 40px;
	color: brown;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 50px;
}
.viewWeb-content {
	width: 500px;
	margin: 0 auto;
}
.viewWeb-content p {
	font-size: 24px;
	color: cadetblue;
	font-weight: bold;
	line-height: 1.5em;
	text-shadow: -1px -1px white, 1px 1px gray;
}
</style>
