export default{
	state: {
        isLoggedIn: false
    },
	getters: {
		isLoggedIn(state, getters, rootState) {
            return state.isLoggedIn;
        }

	},
	actions: {
		login({state, commit, rootState}){
			alert('login');
			commit('login');
		},
		logout({state, commit, rootState}){
			alert('logout');
			commit('logout');
		}
	},
	mutations: {
		login(state){
			state.isLoggedIn = true;
		},
		logout(state){
			state.isLoggedIn = false;
		}
	}
}