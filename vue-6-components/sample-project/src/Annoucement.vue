<template>
  <div class="alert alert-info">
  	<p v-if="annoucement">
  		{{ annoucement }}
  	</p>
  	<p v-else>
  		No annoucements
  	</p>
  </div>
</template>

<script>

	import { eventBus } from './main'

	export default {
	  data(){
	  	return {
	  		annoucement: null
	  	}
	  },
	  created(){
	  	eventBus.$on('articleWasShared', (data) => {
	  		this.annoucement = 'Shared ' + data.article.title + ' on ' + data.media;

	  	});
	  }
	}
</script>
