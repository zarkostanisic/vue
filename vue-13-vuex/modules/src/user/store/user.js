export default{
	namespaced: true,
	state: {
        isLoggedIn: false
    },
	getters: {
		isLoggedIn(state, getters, rootState, rootGetters) {
			// console.log(rootGetters);

            return state.isLoggedIn;
        }

	},
	mutations: {
		login(state){
			console.log('login user');
			state.isLoggedIn = true;
		},
		logout(state){
			state.isLoggedIn = false;
		}
	},
	actions: {
		login({state, commit, rootState, rootGetters}){
			if(rootGetters.isBanned === false){
				alert('login');
				//commit('login', null, { root: true });
				commit('login');
			}else{
				alert('banned');
			}
		},
		logout({state, commit, rootState, rootGetters}){
			alert('logout');
			commit('logout');
		}
	}
}