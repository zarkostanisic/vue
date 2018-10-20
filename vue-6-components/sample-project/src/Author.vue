<template>
	<div class="author">Author
		<p>{{ author.firstName }} {{ author.lastName }}</p>
	</div>
</template>
<script>
	import { eventBus } from './main'

	export default{
		// data(){
		// 	return {
		// 		name: 'Mike'
		// 	}
		// }
		props: {
			author: {
				type: Object,
				required: true,
				default: function(){
					return {};
				}
			},
		},
		// created(){
		// 	eventBus.$on('articleWasShared', (data) => {
		// 		alert('Shared article on FB' + data.media);
		// 	});
		// }
	}
</script>