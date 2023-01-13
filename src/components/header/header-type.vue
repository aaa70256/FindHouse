<template>
	<div class="header-type">
		<p>類型:</p>
		<input type="checkbox" id="apartment" value="電梯大樓" v-model="type" />
		<label for="apartment">大樓</label>

		<input type="checkbox" id="house" value="透天" v-model="type" />
		<label for="house">透天</label>
	</div>
</template>

<script>
export default {
	data() {
		return {};
	},
	computed: {
		type: {
			get() {
				return this.$store.state.headerType;
			},
			set(val) {
				this.$store.commit("SETTYPE", val);
			},
		},
	},
	watch: {
		type() {
			this.$emit("setType", this.type);
		},
	},
};
</script>
<style scoped>
.header-type > p {
	color: chocolate;
	font-weight: bold;
}
.header-type label {
	color: darkgreen;
	font-weight: bold;
}
</style>
