<template>
	<div class="aaa">
		<a href="" class="aaa-a" @click.prevent="goaboutUs">房貸試算</a>
		<slot />
	</div>
</template>
<script>
export default {
	methods: {
		goaboutUs() {
			this.$router.push("/mortgage");
		},
	},
};
</script>
<style>
.aaa {
	position: fixed;
	bottom: 100px;
	right: 0;
	margin-bottom: 20px;
	margin-right: 20px;
	z-index: 2;
}
.aaa-a {
	background-color: lightpink;
	border-radius: 10px;
	padding: 10px;
	font-size: 30px;
	font-weight: bold;
	text-decoration: none;
	color: antiquewhite;
	display: block;
}
.aaa-a:hover {
	background-color: cadetblue;
	color: chartreuse;
}
</style>
