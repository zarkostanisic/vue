<template>
	<div>
		<ul>
			<li :class="{active: activeView == 'app-index'}"><a href="#" @click.prevent="navigate('app-index', 'Index')">Index</a></li>
			<li :class="{active: activeView == 'app-contact'}"><a href="#" @click.prevent="navigate('app-contact', 'Contact')">Contact</a></li>
		</ul>
	</div>
</template>
<script>
	import {eventBus} from './main'

 	export default{
		created(){
			eventBus.$on('changeView', (data) => {
				this.activeView = data.tag;
			});
		},
		data(){
			return {
				activeView: 'app-index'
			}
		},
		methods: {
			navigate(newView, title){
				eventBus.$emit('changeView', {
					tag: newView,
					title: title
				});
			}
		}
	}
</script>

<style>
	.active{
		color: red;
	}
</style>