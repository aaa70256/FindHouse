<template>
	<div class="header">
		<h1 class="header-title">優質好房看過來</h1>
		<div class="header-condition">
			<p>條件找房</p>
			<div class="header-typesetting">
				<div class="header-plan">
					<headerDist @setDist="headerDisthandler" />
					<headerType class="header-planB" @setType="headerTypehandler" />
				</div>
				<div class="header-plan">
					<headerPrice
						@setStartprice="headerStarthandler"
						@setEndprice="headerEndhandler"
					/>
					<headerAge
						class="header-planB"
						@setStartage="headerStartagehandler"
						@setEndage="headerEndagehandler"
					/>
				</div>
			</div>
			<button @click="sendheaderType" class="button">查詢</button>
		</div>
	</div>
</template>

<script>
import headerDist from "@/components/header/header-dist.vue";
import headerType from "@/components/header/header-type.vue";
import headerPrice from "@/components/header/header-price.vue";
import headerAge from "@/components/header/header-age.vue";
export default {
	data() {
		return {
			typeArr: [],
			distArr: [],
			startpriceArr: [],
			endpriceArr: [],
			startageArr: [],
			endageArr: [],
		};
	},
	components: {
		headerDist,
		headerType,
		headerPrice,
		headerAge,
	},
	computed: {},
	methods: {
		headerStartagehandler(val) {
			this.startageArr = val;
		},
		headerEndagehandler(val) {
			this.endageArr = val;
		},
		headerStarthandler(val) {
			this.startpriceArr = val;
		},
		headerEndhandler(val) {
			this.endpriceArr = val;
		},
		headerTypehandler(val) {
			this.typeArr = val;
		},
		headerDisthandler(dist) {
			this.distArr = dist;
		},
		sendheaderType() {
			this.$emit("setType", this.typeArr);
			this.$emit("setDist", this.distArr);
			this.$emit("setStart", this.startpriceArr);
			this.$emit("setEnd", this.endpriceArr);
			this.$emit("setStartage", this.startageArr);
			this.$emit("setEndage", this.endageArr);
		},
	},
};
</script>
<style scoped>
.header {
	padding-bottom: 5px;
	background-image: url(https://i.imgur.com/UZR3oz1.jpg);
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
}
.header-title {
	color: gold;
	text-align: center;
	padding-top: 10px;
	font-size: 50px;
	font-weight: bold;
	text-shadow: -1px -1px white, 1px 1px #333;
}
.header-condition {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.header-condition > p {
	color: white;
	text-shadow: black 0.1em 0.1em 0.2em;
	font-size: 30px;
	margin-top: 20px;
	margin-bottom: 20px;
	font-weight: bold;
}
.header-typesetting {
	display: flex;
}
.header-plan {
	margin-left: 20px;
	margin-right: 20px;
}
.header-planB {
	margin-top: 20px;
}
.header-condition button {
	margin-top: 15px;
	padding: 5px 15px;
	background-color: antiquewhite;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
.header-condition button:hover {
	background-color: brown;
	color: aliceblue;
}
</style>
