import Vue from 'vue'
import App from './App.vue'

// VUE-RESOURCE FOR HTTP REQUESTS LIKE AJAX
import VueResource from 'vue-resource'

Vue.use(VueResource);

Vue.http.options.root = 'http://localhost:3000';
// END VUE-RESOURCE

// VUE-ROUTER
import VueRouter from 'vue-router'
import { routes } from './routes'


Vue.use(VueRouter);

const router = new VueRouter({
	routes: routes,
	mode: 'history',
	scrollBehavior(to, from, savedPosition) {
        if (to.hash) {
            return {
                selector: to.hash
            };
        }
        
        if (savedPosition) {
            return savedPosition;
        }
        
        return { x: 0, y: 0 };
    }
});

//END VUE-ROUTER

// VUEX
import Vuex from 'vuex'
import { ADD_PRODUCT_TO_CART, INCREASE_PRODUCT_QUANTITY, CHECKOUT } from './mutation-types'

Vue.use(Vuex);

const store = new Vuex.Store({
	state: {
		cart: {
			items: []
		}
	},
	getters: {
		cartTotal: (state) => {
			let total = 0;

			state.cart.items.forEach(function(item){
				total += item.product.price * item.quantity;
			});

			return total;
		},
		taxAmount: (state, getters) => (percentage) => {
            return ((getters.cartTotal * percentage) / 100);   
        },
		getCartItem: (state) => (product) => {
			for(let i = 0; i < state.cart.items.length; i++){

				if(state.cart.items[i].product.id === product.id){
					return state.cart.items[i];
				}
			}

			return null;
		}
	},
	mutations: {
		[ADD_PRODUCT_TO_CART]: (state, payload) => {
			state.cart.items.push({
				product: payload.product,
				quantity: payload.quantity
			});

			payload.product.inStock -= payload.quantity;
		},
		[INCREASE_PRODUCT_QUANTITY]: (state, payload) => {
			payload.cartItem.quantity += payload.quantity;
			payload.product.inStock -= payload.quantity;
		},
		[CHECKOUT]: (state) => {
			state.cart.items.forEach(function(item){
				item.product.inStock += item.quantity
			});

			state.cart.items = [];
		}
	},
	actions: {
		[ADD_PRODUCT_TO_CART]: ({commit, getters}, payload) => {
			return new Promise((resolve, reject) => {
				let cartItem = getters.getCartItem(payload.product);

				payload.cartItem = cartItem;

				if(cartItem == null){
					Vue.http.post('cart/add/{productId}/{quantity}', {}, {
						params: {
							productId: payload.product.id,
							quantity: payload.quantity
						}
					}).then(
						response => {
							commit(ADD_PRODUCT_TO_CART, payload);
							resolve();
						},
						response => {
							alert('error');
							reject();
						}
					);
				}else{
					Vue.http.post('cart/increase-quantity/{productId}', {}, {
						params: {
							productId: payload.product.id
						}
					}).then(
						response => {
							commit(INCREASE_PRODUCT_QUANTITY, payload);
							resolve();
						},
						response => {
							alert('error')
							reject();
						}
					);
				}
			});
		}
	}
})

// END VUEX

// VUE FILTER

Vue.filter('currency', function(value){
	let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});
// END VUE FILTER

new Vue({
  el: '#app',
  render: h => h(App),
  router: router,
  store: store
})
