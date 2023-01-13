<template>
	<div class="about">
		<h3>關於我們 - 專案製作動機</h3>
		<div class="about-content">
			<p>
				本人前一份工作是房仲業務，任職於信義房屋，因為前一份工作的關係，也整合前一份工作的經驗，想製作一個較趨近於使用者想法的尋屋網站；在網站篩選條件部分，
				雖然只設定了四種條件的篩選，但是這四種條件在目前市場的客戶需求當中也大致佔了八至九成的比例了，清單列表當中也使用了較簡潔明瞭、淺顯易懂的方式作呈現，
				讓使用者在觀賞中能更淺顯易懂，也能更快速的去找到自己設定條件的物件。最後，在右下角設置了一個免費房貸的試算，提供加值的服務讓使用者在網站上能獲得良好
				的體驗。
			</p>
		</div>
	</div>
</template>
<style scoped>
.about {
	height: 608px;
	background-size: contain;
	background-position: center center;
	background-image: url(@/assets/圖片1.jpg);
}
.about h3 {
	text-align: center;
	font-size: 40px;
	color: coral;
	font-weight: bold;
	padding-top: 10px;
	padding-bottom: 50px;
}
.about-content {
	width: 500px;
	margin: 0 auto;
}
.about-content p {
	font-size: 24px;
	color: gold;
	font-weight: bold;
	line-height: 1.5em;
	text-shadow: -1px -1px white, 1px 1px gray;
}
</style>
