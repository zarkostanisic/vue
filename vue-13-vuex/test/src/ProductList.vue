<template>
	<div>
		<table v-if="products.length > 0">
			<thead>
				<tr>
					<td>ID</td>
					<td>NAME</td>
					<td>PRICE</td>
					<!-- <td>DESCRIPTION</td> -->
					<td>IN STOCK</td>
					<td>ACTIONS</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="product in products">
					<td>{{ product.id }}</td>
					<td>
						<router-link :to="{ name: 'viewProduct', params: { productId: product.id } }">
							{{ product.name }}
						</router-link>
					</td>
					<td>{{ product.price | currency }}</td>
					<!-- <td>{{ product.description }}</td> -->
					<td 
						:class="{orange: product.inStock < 10 && product.inStock > 0, red: product.inStock == 0}"
					>{{ product.inStock }}</td>
					<td>
						<button @click="addProductToCart(product, 1)" :disabled="product.inStock == 0">Add to cart</button>
					</td>
				</tr>
			</tbody>
		</table>
	</div>
</template>

<script>
	import { ADD_PRODUCT_TO_CART } from './mutation-types'

	export default{
		data(){
			return {
				products: []
			}
		},
		created(){
			alert('as');
			this.$http.get('products')
			.then(
				response => {
					return response.json()
				},
				response => alert('error')
			)
			.then(
				products => {
					this.products = products
				}
			);
		},
		methods: {
			[ADD_PRODUCT_TO_CART](product, quantity){
				this.$store.dispatch(ADD_PRODUCT_TO_CART, { product: product, quantity: quantity })
				.then(
					() => alert('success')
				);
			}
		}
	}
</script>

<style>
	.red{
		color: red;
	}

	.orange{
		color: orange;
	}
</style>