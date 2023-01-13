<template>
	<div class="content">
		<layoutContent />
		<ul>
			<li v-for="item in filterAge" :key="item.id" class="content-list">
				<div class="content-img">
					<img :src="item.picture" alt="picture" />
				</div>
				<div class="content-content">
					<a
						href=""
						class="content-title"
						@click.prevent="gocontent(item.id)"
						>{{ item.title }}</a
					>
					<slot />
					<div class="content-plan">
						<img src="../assets/home.png" alt="" />
						<p>{{ item.type }}</p>
						|
						<p>{{ `權狀${item.squareFeet}坪` }}</p>
						|
						<p>{{ `${item.houseAge}年` }}</p>
						|
						<p>{{ item.floor }}</p>
					</div>
					<div class="content-plan">
						<img src="../assets/location-pin.png" alt="" />
						<p>{{ `地點 - ${item.location}` }}</p>
					</div>
				</div>
				<div class="content-price">
					<p>{{ `$${item.totalPrice}萬` }}</p>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
import axios from "axios";
import layoutContent from "@/layout/layout-content.vue";

export default {
	data() {
		return {
			contentArr: [],
			currentPage: 1,
		};
	},
	components: {
		layoutContent,
	},
	props: [
		"filtertypearr",
		"filterdistarr",
		"filterstartarr",
		"filterendarr",
		"filterstartage",
		"filterendage",
	],
	computed: {
		getStartage() {
			return this.filterstartage;
		},
		getEndage() {
			return this.filterendage;
		},
		getStartprice() {
			return this.filterstartarr;
		},
		getEndprice() {
			return this.filterendarr;
		},
		getType() {
			return this.filtertypearr;
		},
		filterType() {
			if (this.getType == "") {
				return this.contentArr;
			}
			return this.contentArr.filter((item) => this.getType.includes(item.type));
		},
		getDist() {
			return this.filterdistarr;
		},
		filterDist() {
			if (this.getDist == "") {
				return this.contentArr;
			}
			return this.contentArr.filter((item) =>
				this.getDist.includes(item.location)
			);
		},
		filterTotal() {
			if (this.getType == "" && this.getDist == "") {
				return this.contentArr;
			} else if (this.getType == "") {
				return this.filterDist;
			} else if (this.getDist == "") {
				return this.filterType;
			}
			return this.filterType.filter((item) =>
				this.getDist.includes(item.location)
			);
		},
		filterPrice() {
			if (this.getStartprice == "" && this.getEndprice == "") {
				return this.filterTotal;
			} else if (this.getStartprice == "" || this.getEndprice == "") {
				alert("請輸入金額");
				return this.filterTotal;
			}
			return this.filterTotal.filter((item) => {
				return (
					item.totalPrice >= this.getStartprice &&
					item.totalPrice <= this.getEndprice
				);
			});
		},
		filterAge() {
			if (this.getStartage == "" && this.getEndage == "") {
				return this.filterPrice;
			} else if (this.getStartage == "" || this.getEndage == "") {
				alert("請輸入屋齡");
				return this.filterPrice;
			}
			return this.filterPrice.filter((item) => {
				return (
					item.houseAge >= this.getStartage && item.houseAge <= this.getEndage
				);
			});
		},
	},
	methods: {
		gocontent(id) {
			this.$router.push({
				name: "content",
				params: {
					id: id,
				},
			});
		},
		onPageChange(page) {
			console.log(page);
			this.currentPage = page;
		},
	},

	async mounted() {
		let data = await axios.get("/house.json");
		this.contentArr = data.data;
	},
};
</script>
<style>
.content {
	display: flex;
	justify-content: center;
	margin-top: 20px;
	margin-bottom: 20px;
}
.content-img img {
	width: 208px;
	height: 156px;
}
.content-list {
	display: flex;
	padding-top: 15px;
	padding-bottom: 15px;
	border-bottom: 1px solid #eee;
	width: 900px;
	position: relative;
}
.content-list:hover {
	background-color: #f5f5f5;
}
.content-content {
	padding-left: 20px;
}
.content-content img {
	width: 20px;
	height: 20px;
}
.content-price {
	position: absolute;
	right: 30px;
	top: 60px;
	color: red;
	font-size: 25px;
	font-weight: bold;
}
.content-title {
	font-size: 26px;
	font-weight: bold;
	color: black;
	text-decoration: none;
}
.content-title:hover {
	color: red;
}
.content-plan {
	display: flex;
	margin-top: 20px;
	align-items: center;
}
.content-plan p {
	margin-left: 10px;
	margin-right: 10px;
	font-weight: bold;
}
</style>
