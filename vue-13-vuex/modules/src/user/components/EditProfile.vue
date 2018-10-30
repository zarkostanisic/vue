<template>
    <h1>Edit profile</h1>
</template>

<script>
    export default {
    	getters: {
    		isLoggedIn(state, getters, rootState) {
            	return state.isLoggedIn;
        	}
    	}
    }
</script>