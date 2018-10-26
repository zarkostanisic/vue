<template>
  <div>
    <transition name="fade" mode="out-in">
      <component :is="shape"></component>
    </transition>
    <button @click="changeShape">Change shape</button>
  </div>
</template>

<script>
import Circle from './Circle.vue'
import Square from './Square.vue'

export default {
  data(){
    return {
      shape: 'app-circle'
    }
  },
  components: {
    appCircle: Circle,
    appSquare: Square
  },
  methods: {
    changeShape(){
      if(this.shape == 'app-square') {
        this.shape = 'app-circle';
      }else{
        this.shape = 'app-square';
      }
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0;
  }
</style>
