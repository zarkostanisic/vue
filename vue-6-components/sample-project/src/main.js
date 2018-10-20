import Vue from 'vue'
import App from './App.vue'
import Annoucement from './Annoucement.vue'
import ArticleSingle from './ArticleSingle.vue'
import Social from './Social.vue'
import Contact from './Contact.vue'

export const eventBus = new Vue();

Vue.component('annoucement', Annoucement);
Vue.component('article-single', ArticleSingle);
Vue.component('social', Social);
Vue.component('contact', Contact);

new Vue({
  el: '#app',
  render: h => h(App)
})
