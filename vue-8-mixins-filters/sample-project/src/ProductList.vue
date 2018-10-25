<template>
	<div>
		<h1>Product list</h1>
		<ul>
			<li v-for="product in products">
				{{ product.name }} {{ product.price | currency }}
				-
				<a href="#" @click.prevent="addToCart(product)">Add to cart</a>
			</li>
		</ul>
	</div>
</template>

<script>
	import RetreiveProducts from './mixins/retreive-products.js'
	export default{
		mixins: [RetreiveProducts],
		// created(){
		// 	alert('ProductList created');
		// }
		methods: {
			addToCart(product){
				product.name = 'Test';
				alert('Adding ' + product.name + ' to cart(component)');
			}
		}
	}
</script>