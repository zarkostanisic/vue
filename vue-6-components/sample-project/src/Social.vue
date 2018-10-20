<template>
	<div>
		<h3>Share {{ article.title }}</h3>
		<button @click="share('FB')">Share on FB</button>
		<button @click="share('TW')">Share on TW</button>
	</div>
</template>

<script type="text/javascript">
	import { eventBus } from './main'

	export default{
		props: {
			article: {
				type: Object,
				required: true
			}
		},
		methods: {
			share(media){
				eventBus.$emit('articleWasShared', {
					article: this.article,
					media: media
				});

				this.$emit('articleWasShared', {
					media: media
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