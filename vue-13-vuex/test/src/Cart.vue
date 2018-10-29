<template>
	<div>
		<h1>Cart</h1>
		<table v-if="cart.items.length > 0">
			<thead>
				<tr>
					<td>ID</td>
					<td>NAME</td>
					<td>QUANTITY</td>
					<td>PRICE</td>
					<td>ACTIONS</td>
				</tr>
			</thead>
			<tbody>
				<tr v-for="item in cart.items">
					<td>{{ item.product.id }}</td>
					<td>{{ item.product.name }}</td>
					<td>
						<button @click="decreaseQuantity(item)">-</button>
						{{ item.quantity }} 
						<button @click="increaseQuantity(item)" :disabled="item.product.inStock == 0">+</button>
					</td>
					<td>{{ item.product.price * item.quantity | currency }}</td>
				</tr>

				<tr>
					<td colspan="5">Subtotal = {{ cartTotal | currency }}</td>
				</tr>

				<tr>
					<td colspan="5">Tax amount= {{ taxAmount(10) | currency }}</td>
				</tr>

				<tr>
					<td colspan="5">Grand total = {{ cartTotal + taxAmount(10) | currency }}</td>
				</tr>

				<tr>
					<td colspan="5"><button @click="checkout">Checkout</button></td>
				</tr>
			</tbody>
		</table>

		<p v-else>No items</p>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import { mapMutations} from 'vuex'
	import { CHECKOUT } from './mutation-types'

	export default{
		computed: {
			...mapGetters({
				cartTotal: 'cartTotal',
				taxAmount: 'taxAmount'
			}),
			cart(){
				return this.$store.state.cart;
			}
		},
		beforeRouteLeave(to, from, next){
			if(this.cart.items.length > 0){
				if(!confirm('Are you sure?')){
					return next(false);
				}
			}

			next();
		},
		methods: {
			...mapMutations([CHECKOUT]),
			increaseQuantity(item){
				item.quantity++;
				item.product.inStock--;
			},
			decreaseQuantity(item){

				if(item.quantity == 0){

				}else{
					item.product.inStock++;
					item.quantity--;
				}

			}
		}
	}
</script>