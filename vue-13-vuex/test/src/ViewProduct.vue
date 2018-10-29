<template>
	<div>
		<button @click="goBack">Back</button>
		<button @click="addProductToCart()">Add to cart</button>
			
		<div v-if="product != null">
			<h1>{{ product.name }}</h1>
			<p>{{ product.price | currency}}</p>
			<p>{{ product.description }}</p>

			<hr>

			<h3>Reviews</h3>
			<ul>
				<li v-for="review in product.reviews">
					{{ review.text }} | <button @click="deleteReview(review.id)">Delete</button>
				</li>
			</ul>

			<form @submit.prevent="addNewReview">
				
				<div>
					<label for="reviewer">Reviewer</label>
					<input type="text"  id="reviewer" v-model="newReview.reviewer" placeholder="Reviewer">
				</div>

				<div>
					<label for="rating">Rating</label>
					<input type="number"  id="rating" v-model="newReview.rating" min="1" max="5" value="1">
				</div>

				<div>
					<label for="text">Text</label>
					<textarea id="text" v-model="newReview.text" placeholder="Text"></textarea>
				</div>

				<div><input type="submit" value="Add review"></div>
			</form>

			<hr>

			<h3>Related products</h3>
			<ul>
				<li v-for="product in products">
					<router-link :to="{ name: 'viewProduct', params: { productId: product.id} }">
						{{ product.name }}
					</router-link>
				</li>
			</ul>

		</div>

		<div v-else>
			Loading...
		</div>
	</div>
</template>

<script>
	import { ADD_PRODUCT_TO_CART } from './mutation-types'

	export default{
		props: {
			productId: {
				required: true
			}
		},
		data(){
			return {
				product: null,
				products: [],
				newReview: {
                    text: '',
                    rating: 0,
                    reviewer: ''
                }
			}
		},
		created(){
			this.getProduct(this.productId)
			.then(
				product => this.product = product
			);

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
		beforeRouteUpdate(to, from, next) {
            this.getProduct(to.params.productId)
                .then(product => this.product = product);

            next();
        },
		methods: {
			getProduct(productId){
				return this.$http.get('products/{productId}', { 
					params: { 
						productId: productId
					} 
				}).then(
					response => response.json(),
					response => alert('error')
				);
			},
			goBack(){
				this.$router.history.go(-1);
			},
			[ADD_PRODUCT_TO_CART](){
				this.$store.dispatch(ADD_PRODUCT_TO_CART, { product: this.product, quantity: 1 })
				.then(
					() => alert('success')
				);
			},
			addNewReview(){
				console.log(this.newReview);
			},
			deleteReview(reviewId){
				console.log(reviewId)
			}
		}
	}
</script>

<style>
	label{
		display: block;
	}
</style>