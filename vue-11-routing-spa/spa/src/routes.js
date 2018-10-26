import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'

export const routes = [
	{ path: '/products/:productId/view', redirect: /*'/products/:productId'*/ { name: 'viewProduct' } },

    { path: '', component: ProductList },
    { path: '/cart', component: Cart, alias: '/shopping-cart' },
    { path: '/products/:productId', props: true, name: 'viewProduct',component: ViewProduct },
    { path: '*', component: {template: '<h1>Page not found</h1>'}}
];