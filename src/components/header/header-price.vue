<template>
	<div class="header-price">
		<p>總價:</p>
		<input
			type="number"
			value="priceOne"
			v-model.number.trim="priceOne"
			placeholder="請輸入總價(萬為單位)"
		/>-
		<input
			type="number"
			value="priceTwo"
			v-model.number.trim="priceTwo"
			placeholder="請輸入總價(萬為單位)"
		/>
	</div>
</template>

<script>
export default {
	data() {
		return {
			priceOne: {
				type: Number,
			},
			priceTwo: {
				type: Number,
			},
		};
	},
	watch: {
		priceOne() {
			this.$emit("setStartprice", this.priceOne);
		},
		priceTwo() {
			this.$emit("setEndprice", this.priceTwo);
		},
	},
};
</script>
<style scoped>
.header-price > p {
	color: chocolate;
	font-weight: bold;
}
input {
	padding: 5px 15px;
	background-color: lavender;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
</style>
