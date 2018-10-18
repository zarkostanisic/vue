import Vue from 'vue'
import App from './App.vue'
import Annoucement from './Annoucement.vue'
import ArticleSingle from './ArticleSingle.vue'

Vue.component('annoucement', Annoucement);
Vue.component('article-single', ArticleSingle);

new Vue({
  el: '#app',
  render: h => h(App)
})
