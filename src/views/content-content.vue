<template>
	<div class="content-apple">
		<header class="content-header">
			<h3>物件資訊</h3>
		</header>
		<div class="view-background">
			<p class="view-title">{{ view.title }}</p>
			<div class="view-show">
				<img :src="view.picture" alt="picture" />
				<div class="view-p">
					<p class="view-p-totalPrice">{{ `$${view.totalPrice}萬` }}</p>
					<p class="view-p-type">{{ view.type }} - {{ view.location }}</p>

					<p class="view-p-type">{{ `權狀${view.squareFeet}坪` }}</p>

					<p class="view-p-type">{{ `${view.houseAge}年` }}</p>

					<p class="view-p-type">{{ view.floor }}</p>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";

export default {
	data() {
		return {
			contentArr: [],
		};
	},
	computed: {
		id() {
			return this.$route.params.id;
		},
		view() {
			return this.contentArr.find((item) => item.id == this.id);
		},
	},
	async mounted() {
		let data = await axios.get("/house.json");
		this.contentArr = data.data;
	},
};
</script>

<style scoped>
.content-header h3 {
	color: azure;
	font-size: 50px;
	font-weight: bold;
}
.content-apple {
	text-align: center;
}
.content-header {
	height: 60px;
	background-color: cadetblue;
	padding-top: 10px;
}
.view-show {
	display: flex;
	justify-content: center;
	padding-bottom: 30px;
}
.view-show img {
	width: 400px;
	height: 400px;
	box-shadow: 2px 2px 1px 2px black;
	border-radius: 10px 10px 10px 10px;
}
.view-title {
	font-size: 60px;
	padding-top: 20px;
	margin-bottom: 50px;
}
.view-p {
	margin-left: 50px;
	margin-top: 30px;
}
.view-p p {
	margin-top: 15px;
}
.view-p-totalPrice {
	color: red;
	font-size: 45px;
	font-weight: bold;
	margin-bottom: 60px;
}
.view-p-type {
	color: darkgreen;
	font-size: 20px;
	font-weight: bold;
}
.view-background {
	background-image: url(@/assets/圖片2.jpg);
	background-size: cover;
}
</style>
