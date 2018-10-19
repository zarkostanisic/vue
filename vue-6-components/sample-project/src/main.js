import Vue from 'vue'
import App from './App.vue'
import Annoucement from './Annoucement.vue'
import ArticleSingle from './ArticleSingle.vue'
import Social from './Social.vue'

export const eventBus = new Vue();

Vue.component('annoucement', Annoucement);
Vue.component('article-single', ArticleSingle);
Vue.component('social', Social);

new Vue({
  el: '#app',
  render: h => h(App)
})
