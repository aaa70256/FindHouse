<template>
	<div class="header-age">
		<p>屋齡:</p>
		<select v-model.number="ageStart">
			<option disabled value="0">請選擇屋齡</option>
			<option v-for="item in 100">{{ item }}</option></select
		>-
		<select v-model.number="ageEnd">
			<option disabled value="0">請選擇屋齡</option>
			<option v-for="item in 100">{{ item }}</option>
		</select>
	</div>
</template>

<script>
export default {
	data() {
		return {
			ageStart: 0,
			ageEnd: 0,
		};
	},
	watch: {
		ageStart() {
			this.$emit("setStartage", this.ageStart);
		},
		ageEnd() {
			this.$emit("setEndage", this.ageEnd);
		},
	},
};
</script>
<style scoped>
.header-age > p {
	color: chocolate;
	font-weight: bold;
}
select {
	padding: 5px 15px;
	background-color: lavender;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
</style>
