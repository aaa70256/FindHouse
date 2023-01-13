<template>
	<div class="header-dist">
		<p>區域:</p>
		<input type="checkbox" id="gushan" value="鼓山區" v-model="dist" />
		<label for="gushan">鼓山區</label>

		<input type="checkbox" id="fengshan" value="鳳山區" v-model="dist" />
		<label for="fengshan">鳳山區</label>

		<input type="checkbox" id="lingya" value="苓雅區" v-model="dist" />
		<label for="lingya">苓雅區</label>

		<input type="checkbox" id="zuoying" value="左營區" v-model="dist" />
		<label for="zuoying">左營區</label>

		<input type="checkbox" id="qianzhen" value="前鎮區" v-model="dist" />
		<label for="qianzhen">前鎮區</label>

		<input type="checkbox" id="renwu" value="仁武區" v-model="dist" />
		<label for="renwu">仁武區</label>
	</div>
</template>

<script>
export default {
	data() {
		return {
			dist: [],
		};
	},
	watch: {
		dist() {
			this.$emit("setDist", this.dist);
		},
	},
};
</script>
<style scoped>
.header-dist > p {
	color: chocolate;
	font-weight: bold;
}
.header-dist label {
	color: darkgreen;
	font-weight: bold;
}
</style>
