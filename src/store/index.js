import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
	state: {
		counter: 0,
		colorCode: 'red'
	},
	mutations: {
		// Aca van los setter para los states. Se dice "commit" a mutation.
		// Aca no se puede usar codigo asyncrono.
		increaseCounter(state, randomNumber) {
			state.counter += randomNumber;
		},
		decreaseCounter(state, randomNumber) {
			state.counter -= randomNumber;
		},
		setColorCode(state, newValue) {
			state.colorCode = newValue;
		}


	},
	actions: {
		// Se dice "dispatch" an action.
		// Son metodos que NO puede cambiar data en el state. Pero puede acceder a esta.
		// Para realizar un cambio en el state desde aca, hay que usar una mutation.
		// Puede haber codigo asyncrono.
		increaseCounter({ commit }) {
			axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
				commit('increaseCounter', response.data);
			})
		},
		decreaseCounter({ commit }) {
			axios('https://www.random.org/integers/?num=1&min=1&max=6&col=1&base=10&format=plain&rnd=new').then(response => {
				commit('decreaseCounter', response.data);
			})
		},
		setColorCode({ commit }, newValue) {
			commit('setColorCode', newValue);
		}
	},
	getters: {
		// permite obtener data de un state.
		// Sirve para ejecutar alguna logica en el valor obtenido del state antes de devolverlo.
		counterSquared(state) {
			return state.counter * state.counter;
		}


	}
});
