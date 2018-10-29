<template>
  <div>
    <ul class="menu">
      <router-link to="/" tag="li" exact>Home</router-link>
      <router-link to="/cart" tag="li" exact active-class="active">Cart</router-link>
    </ul>
    <p>
      {{ cart.items.length }} {{ cart.items.length != 1 ? 'items' : 'item'}} | {{ cartTotal | currency }}
    </p>

    <transition :duration="1000" mode="out-in"
      enter-active-class="animated fadeInLeft"
      leave-active-class="animated fadeOutRight"
    >
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {

  computed: {
    ...mapGetters({
      cartTotal: 'cartTotal'
    }),
    cart(){
      return this.$store.state.cart;
    }
  }
}
</script>

<style>
  .active{
    color: red;
  }
  .menu li{
    display: inline-block;
  }
</style>
