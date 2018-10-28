import Vue from 'vue';
import Vuex from 'vuex';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App.vue';
import { routes } from './routes';

import { ADD_PRODUCT_TO_CART } from './mutation-types'
import { CHECKOUT } from './mutation-types'
import { INCREASE_PRODUCT_QUANTITY } from './mutation-types'

Vue.filter('currency', function(value) {
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });
    
    return formatter.format(value);
});

Vue.use(Vuex);
Vue.use(VueResource);
Vue.use(VueRouter);

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
        // taxAmount: (state, getters) => {
        //     // return ((getters.cartTotal * 10) / 100);
        //     return function(percentage){
        //         return ((getters.cartTotal * percentage) / 100);   
        //     }
        // }
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
        [CHECKOUT] (state){
            
            state.cart.items.forEach(function(item){
                item.product.inStock += item.quantity;
            });

            state.cart.items = [];
        },
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
        }
    },
    actions: {
        [ADD_PRODUCT_TO_CART] ({commit, getters}, payload){
            return new Promise((resolve, reject) => {
                let cartItem = getters.getCartItem(payload.product);

                payload.cartItem = cartItem;

                if(cartItem == null){
                    let requestUrl = 'http://localhost:3000/cart/add/{productId}/{quantity}';
                    Vue.http.post(requestUrl, {}, {
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
                    let requestUrl = 'http://localhost:3000/cart/increase-quantity/{productId}';
                    Vue.http.post(requestUrl, {}, {
                        params: {
                            productId: payload.product.id,
                        }
                    }).then(
                        response => {
                            commit(INCREASE_PRODUCT_QUANTITY, payload)
                            resolve();
                        },
                        response => {
                            alert('error');
                            reject(); 
                        }
                    );
                }
            });
        }
    }
});

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

Vue.http.options.root = 'http://localhost:3000';

new Vue({
    el: '#app',
    render: h => h(App),
    router: router,
    store: store
});