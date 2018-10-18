<template>
	<div class="article">Article single
		<h1>{{ title}}</h1>
		<p>{{ published | moment }}</p>
		<p class="lead">{{ content }}</p>

		<author></author>
	</div>
</template>
<script>
	import moment from 'moment'
	import Author from './Author.vue'

	export default{
		data() {
			return {
				title: 'Tom',
				published: new Date(),
				content: 'This is best js framework.'
			}
		},
		filters: {
			moment: function(value){
				return moment(value).format('MMMM Do');
			}
		},
		components: {
			author: Author
		}
	}
</script>