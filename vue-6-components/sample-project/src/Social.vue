<template>
	<button @click="share">Share on FB</button>
</template>

<script type="text/javascript">
	import { eventBus } from './main'

	export default{
		methods: {
			share(){
				eventBus.$emit('articleWasShared', {
					media: 'facebook'
				});

				this.$emit('articleWasShared', {
					media: 'facebook'
				});

			},

			// share(){
			// 	this.$emit('articleWasShared', {
			// 		media: 'facebook'
			// 	});
			// }
		}
	}
</script>