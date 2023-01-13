import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		contentArr: [],
		headerType: [],
	},
	getters: {},
	mutations: {
		SETTYPE(state, type) {
			state.headerType = type;
		},
	},
	actions: {},
	modules: {},
});
