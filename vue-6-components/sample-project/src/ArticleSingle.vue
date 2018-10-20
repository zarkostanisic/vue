<template>
	<div class="article">Article single
		<h1>{{ title}}</h1>

		<p>{{ shares }}</p>
		<p>{{ published | moment }}</p>
		<p class="lead">{{ content }}</p>

		<author :author="author"></author>

		<social @articleWasShared="shared('Hello', $event)" :article="$data"></social>
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
				content: 'This is best js framework.',
				author: {
					firstName: 'Mike',
					lastName: 'Richards'
				},
				shares: 0
			}
		},
		methods: {
			shared: function(message, event){
				this.shares++;
				console.log(message);
				console.log(event);
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

<style>
	* {
		font-style: italic;
	}
</style>

<style scoped>
	* {
		color: red;
	}
</style>