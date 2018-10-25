import Vue from 'vue'
import App from './App.vue'

// Vue.mixin({
// 	created(){
// 		alert('A Vue instance was created');
// 	}
// });

Vue.filter('currency', function(value){
	var formatter = Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0
    });

    return formatter.format(value);
});

new Vue({
  el: '#app',
  render: h => h(App)
})
