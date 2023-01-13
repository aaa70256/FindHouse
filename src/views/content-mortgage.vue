<template>
	<div class="mortgage">
		<div class="mortgage-header">
			<p>優質好房-免費房貸試算</p>
		</div>
		<div class="mortgage-content">
			<div class="condition">
				<div class="planAA">
					<span>貸款金額:</span
					><input
						type="number"
						v-model.number.trim="total"
						placeholder="請輸入貸款金額(萬)"
					/>
				</div>
				<div class="planAA">
					<span>貸款年限:</span
					><select name="year" v-model="years">
						<option for="year" value="" disabled>請選擇年限</option>
						<option for="year" :value="10">10</option>
						<option for="year" :value="20">20</option>
						<option for="year" :value="30">30</option>
						<option for="year" :value="40">40</option>
					</select>
				</div>
				<div class="planAA">
					<span>房貸利率:</span
					><select name="interestRate" v-model="interestRate">
						<option for="interestRate" value="" disabled>請選擇利率</option>
						<option for="interestRate" :value="0.01">1.00%</option>
						<option for="interestRate" :value="0.0105">1.05%</option>
						<option for="interestRate" :value="0.011">1.10%</option>
						<option for="interestRate" :value="0.0115">1.15%</option>
						<option for="interestRate" :value="0.012">1.20%</option>
						<option for="interestRate" :value="0.0125">1.25%</option>
						<option for="interestRate" :value="0.013">1.30%</option>
						<option for="interestRate" :value="0.0135">1.35%</option>
						<option for="interestRate" :value="0.014">1.40%</option>
						<option for="interestRate" :value="0.0145">1.45%</option>
						<option for="interestRate" :value="0.015">1.50%</option>
						<option for="interestRate" :value="0.0155">1.55%</option>
						<option for="interestRate" :value="0.016">1.60%</option>
						<option for="interestRate" :value="0.0165">1.65%</option>
						<option for="interestRate" :value="0.017">1.70%</option>
						<option for="interestRate" :value="0.0175">1.75%</option>
						<option for="interestRate" :value="0.018">1.80%</option>
						<option for="interestRate" :value="0.0185">1.85%</option>
						<option for="interestRate" :value="0.019">1.90%</option>
						<option for="interestRate" :value="0.0195">1.95%</option>
						<option for="interestRate" :value="0.02">2.00%</option>
						<option for="interestRate" :value="0.0205">2.05%</option>
						<option for="interestRate" :value="0.021">2.10%</option>
						<option for="interestRate" :value="0.0215">2.15%</option>
						<option for="interestRate" :value="0.022">2.20%</option>
						<option for="interestRate" :value="0.025">2.25%</option>
						<option for="interestRate" :value="0.023">2.30%</option>
						<option for="interestRate" :value="0.0235">2.35%</option>
						<option for="interestRate" :value="0.024">2.40%</option>
						<option for="interestRate" :value="0.0245">2.45%</option>
						<option for="interestRate" :value="0.025">2.50%</option>
						<option for="interestRate" :value="0.0255">2.55%</option></select
					><br /><button @click="totalmonth">確定</button>
				</div>
			</div>
			<p class="abc">${{ month }}/月</p>
		</div>
		<div class="mortgage-footer"></div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			total: "",
			years: "",
			interestRate: "",
			month: "",
		};
	},
	methods: {
		totalmonth() {
			let monthava = this.interestRate / 12; //月利率
			let totalmonth = this.years * 12; //月數
			let power = Math.pow(1 + monthava, totalmonth); //次方
			let amonthava = (power * monthava) / (power - 1); //每月應付本息金額之平均攤還率
			this.month = this.total * amonthava;
			this.month = this.month.toFixed(2);
		},
	},
};
</script>
<style scoped>
.mortgage-header {
	padding: 20px;
	background-color: green;
	text-align: center;
}
.mortgage-header p {
	color: bisque;
	font-size: 30px;
}
.mortgage-content {
	margin-top: 30px;
}
.condition {
	display: flex;
	flex-direction: column;
	padding-left: 500px;
}
.planAA {
	margin-top: 30px;
}
span {
	margin-right: 5px;
	color: coral;
	font-weight: bold;
	font-size: 20px;
}
input,
select {
	padding: 5px 15px;
	background-color: lavender;
	border: 0 none;
	cursor: pointer;
	border-radius: 5px;
}
.abc {
	margin-top: 50px;
	margin-left: 500px;
	color: darkmagenta;
	font-size: 40px;
	font-weight: bold;
}
</style>
