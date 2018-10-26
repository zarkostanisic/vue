import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'
import Product from './Product.vue'
import ProductReviews from './ProductReviews.vue'

export const routes = [
	{ path: '/products/:productId/view', redirect: /*'/products/:productId'*/ { name: 'viewProduct' } },

    { path: '', component: ProductList },
    { path: '/cart', component: Cart, alias: '/shopping-cart' },
    //{ path: '/products/:productId', props: true, name: 'viewProduct',component: ViewProduct },
    { path: '/products/:productId', props: true, name: 'product',component: Product, children: [
    	{ path: 'details', name: 'viewProduct', props: true, component: ViewProduct },
    	{ path: 'reviews', name: 'productReviews', props: true, component: ProductReviews}
    ] },
    { path: '*', component: {template: '<h1>Page not found</h1>'}}
];