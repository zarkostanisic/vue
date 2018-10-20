import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';
import About from './About.vue';
import Contact from './Contact.vue';

Vue.component('appHome', Home);
Vue.component('appAbout', About);
Vue.component('appContact', Contact);


new Vue({
  el: '#app',
  render: h => h(App)
})
