<template>
	<div>
		<h1>Sitemap</h1>
		<ul>
			<li v-for="product in products">{{ product.name }} {{ product.price }}</li>
		</ul>
	</div>
</template>

<script>
	import RetreiveProducts from './mixins/retreive-products.js'
	export default{
		mixins: [RetreiveProducts]
	}
</script>