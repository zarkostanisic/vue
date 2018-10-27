import ProductList from './ProductList.vue';
import Cart from './Cart.vue';
import ViewProduct from './ViewProduct.vue'
// import Product from './Product.vue'
import ViewProfile from './ViewProfile.vue'
// import { authService } from './main'

export const routes = [
	{ path: '/products/:productId/view', redirect: /*'/products/:productId'*/ { name: 'viewProduct' } },

    { path: '', components: {
    	default: ProductList,
    	// discount: SpecialOffer
    }},
    { path: '/cart', component: Cart, alias: '/shopping-cart' },
    { path: '/products/:productId', props: true, name: 'viewProduct',component: ViewProduct },
    { 
    	path: '/profile',
    	name: 'viewProfile', 
    	component: ViewProfile,
    	meta: {
    		isAuthRequired: true
    	}
    	// beforeEnter(to, from, next){
    	// 	if(!authService.isLoggedIn){
    	// 		alert('You must be logged in!');
    	// 		return next(false);
    	// 	}

    	// 	next();
    	// }
    },
    { path: '*', component: {template: '<h1>Page not found</h1>'}}
];