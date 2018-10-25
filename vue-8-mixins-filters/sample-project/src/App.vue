<template>
 <div class="container">
   <nav class="navbar navbar-default">
     <div class="container-fluid">
       <div class="navbar-header">
         <a class="navbar-brand" href="#">E-commerce Inc.</a>
       </div>

       <div class="collapse show navbar-collapse" id="bs-example-navbar-collapse-1">
         <ul class="nav navbar-nav">
           <li><a href="#" @click.prevent="activeView = 'app-product-list'">Product list</a></li>
            <li><a href="#" @click.prevent="activeView = 'app-sitemap'">Sitemap</a></li>
         </ul>
       </div>
     </div>
   </nav>

   <keep-alive>
      <component :is="activeView"></component>
   </keep-alive>
 </div>
</template>

<script>

import ProductList from './ProductList.vue'
import Sitemap from './Sitemap.vue'

export default {
  data(){
    return {
      activeView: 'app-product-list'
    }
  },
  components: {
    appProductList: ProductList,
    appSitemap: Sitemap
  }
}
</script>

a {
  color: #42b983;
}
</style>
