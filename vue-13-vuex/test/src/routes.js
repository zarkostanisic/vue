import ProductList from './ProductList.vue'
import Cart from './Cart.vue'
import ViewProduct from './ViewProduct.vue'

export const routes = [
	{ path: "", component: ProductList },
	{
		path: "/products/:productId",
		name: 'viewProduct',
		props: true,
		component: ViewProduct
	},
	{ path: "/cart", component: Cart }
];