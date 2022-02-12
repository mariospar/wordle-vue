import { createStore } from "vuex";
import { getRandomWord } from "../utils/initialize";

export default createStore({
	state: {
		unknownWord: "",
	},
	mutations: {
		SET_NEW_WORD(state, value) {
			state.unknownWord = value;
		},
	},
	actions: {
		getNewWord({ commit }) {
			commit("SET_NEW_WORD", getRandomWord);
		},
	},
	modules: {},
});
