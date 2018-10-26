<template>
    <div>
    	<button @click="goBack">&laquo; Back</button>
    	<h1>{{ product.name }}</h1>
    	<p><strong>ID:</strong>{{ product.id }}</p>
    	<p><strong>Price:</strong>{{ product.price | currency }}</p>
    	<p><strong>In stock:</strong>{{ product.inStock }}</p>
    	<p>{{ product.description }}</p>
    	<h3>Releated product</h3>
    	<ul>
    		<li v-for="product in products" v-if="product.id != productId">
	    		<router-link :to="{ name: 'viewProduct', params: { productId: product.id} }">
	                {{ product.name }}
	            </router-link>
            </li>
    	</ul>
    </div>
</template>

<script>
	import { products } from './data/products'

    export default {
    	props: {
    		productId: {
    			required:true
    		}
    	},
    	data(){
    		return {
    			products: products,
    			product: null
    		}
    	},
    	created(){
    		//let productId = this.$route.params.productId;
    		let productId = this.productId;

    		this.product = this.getProduct(productId);
    	},
    	methods: {
    		getProduct(productId){
    			let match = null;

    			this.products.forEach(function(product){
    				if(product.id == productId){
    					match = product;
    				}
    			});

    			return match;
    		},
    		goBack(){
    			// this.$router.push('/');
    			this.$router.go(-1);
    		}
    	}, 
    	watch: {
    		productId(newValue, oldValue){
    			this.product = this.getProduct(newValue);
    		}
    	}
    }
</script>