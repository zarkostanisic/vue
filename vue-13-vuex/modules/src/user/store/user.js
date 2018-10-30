export default{
	getters: {
		isLoggedIn(state, getters, rootState) {
            return rootState.isLoggedIn;
        }

	},
	actions: {
		login({state, commit, rootState}){
			rootState.isLoggedIn = true;
		},
		logout({state, commit, rootState}){
			rootState.isLoggedIn = false;
		}
	}
}