<template>
	<div class="home">
		<Header
			@setType="setTypehandler"
			@setDist="setDisthandler"
			@setStart="setStarthandler"
			@setEnd="setEndhandler"
			@setStartage="headerStartagehandler"
			@setEndage="headerEndagehandler"
		/>
		<Content
			:filtertypearr="typeArr"
			:filterdistarr="distArr"
			:filterstartarr="startpriceArr"
			:filterendarr="endpriceArr"
			:filterstartage="startageArr"
			:filterendage="endageArr"
		/>
		<layoutFooter />
	</div>
</template>

<script>
import Header from "@/components/header.vue";
import Content from "@/components/content.vue";
import layoutFooter from "../layout/layout-footer.vue";

export default {
	name: "HomeView",
	data() {
		return {
			distArr: [],
			typeArr: [],
			endpriceArr: [],
			startpriceArr: [],
			startageArr: [],
			endageArr: [],
		};
	},
	components: {
		Header,
		layoutFooter,
		Content,
	},
	methods: {
		headerStartagehandler(val) {
			this.startageArr = val;
		},
		headerEndagehandler(val) {
			this.endageArr = val;
		},
		setStarthandler(val) {
			this.startpriceArr = val;
		},
		setEndhandler(val) {
			this.endpriceArr = val;
		},
		setTypehandler(val) {
			this.typeArr = val;
		},
		setDisthandler(val) {
			this.distArr = val;
		},
	},
};
</script>
