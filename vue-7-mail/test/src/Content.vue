<template>
	<div>
		<h1>{{ currentView.title }}</h1>

		<keep-alive>
			<component :is="currentView.tag"></component>
		</keep-alive>
	</div>
</template>
<script>
	import {eventBus} from './main'

	import Index from './Index.vue'
	import Contact from './Contact.vue'

	export default{
		created(){
			eventBus.$on('changeView', (data) => {
				let temp = [{
					tag: data.tag,
					title: data.title
				}];

				this.history = temp.concat(this.history.splice(0))
			});
		},
		components: {
			appIndex: Index,
			appContact: Contact
		},
		data(){
			return {
				history: [{
					tag: 'app-index',
					title: 'Index'
				}]
			}
		},
		computed: {
			currentView: function(){
				return this.history[0];
			}
		}
	}
</script>