export default{
	data(){
		return {
			products: []
		}
	},
	created() {
		// alert("Retreive products...");

		this.products = this.getProductList();
	},
	methods: {
		getProductList(){
			return [
				{name: 'P1', price: '1'},
				{name: 'P2', price: '2'}
			]
		},
		addToCart(product){
			alert('Adding ' + product.name + ' to cart(mixin)');
		}
	}
}