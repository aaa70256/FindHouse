<template>
	<div class="footer">
		<div class="footer-font">
			<p>Copyright © 591版權所有</p>
			<p>Teng製作</p>
		</div>
		<ul class="footer-list">
			<li><a href="" @click.prevent="goaboutUs">關於我們</a></li>
			<li><a href="" @click.prevent="gocontactUs">聯絡我們</a></li>
			<li><a href="" @click.prevent="goviewWeb">網頁導覽</a></li>
			<li><a href="" @click.prevent="goFAQs">FAQs</a></li>
		</ul>
		<slot />
		<p class="footer-privacy">※以上資訊僅供參考及本作品使用</p>
	</div>
</template>

<script>
export default {
	methods: {
		goFAQs() {
			this.$router.push("/FAQs");
		},
		goviewWeb() {
			this.$router.push("/viewWeb");
		},
		gocontactUs() {
			this.$router.push("/contactUs");
		},
		goaboutUs() {
			this.$router.push("/aboutUs");
		},
	},
};
</script>

<style>
.footer {
	height: 80px;
	background-color: darkgreen;
	display: flex;
	justify-content: space-between;
	align-items: center;
	position: relative;
}
.footer-font {
	margin-left: 30px;
}
.footer-font p {
	color: darkorange;
	font-size: 16px;
	line-height: 1.5em;
	text-align: center;
}
.footer-list p {
	margin-left: 20px;
}
.footer-list li {
	float: left;
	margin-right: 20px;
}
.footer-list li a {
	text-decoration: none;
	color: antiquewhite;
	font-weight: bold;
}
.footer-list li a:hover {
	color: pink;
	font-size: 30px;
	transition: 1s;
}
.footer-privacy {
	position: absolute;
	bottom: 3px;
	right: 10px;
	font-size: 6px;
	color: azure;
}
</style>
