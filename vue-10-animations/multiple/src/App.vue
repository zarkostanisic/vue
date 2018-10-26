<template>
  <div style="margin-top: 200px;">
    <button @click="addRandom">Add random number</button>
    <button @click="removeRandom">Remove random number</button>
    <button @click="shuffle">Shuffle</button>

    <transition-group name="fade">
      <span class="list-item" v-for="n in numbers" :key="n">{{ n }}</span>      
    </transition-group>

  </div>
</template>

<script>
export default {
  data () {
    return {
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    }
  },
  methods: {
    getRandomIndex(){
      return Math.floor(Math.random() * this.numbers.length);
    },
    addRandom(){
      let randomNumber = Math.floor(Math.random() * 100);

      this.numbers.splice(this.getRandomIndex(), 0, randomNumber);
    },
    removeRandom(){
      this.numbers.splice(this.getRandomIndex(), 1);
    },
    shuffle(){
      this.numbers = _.shuffle(this.numbers);
    }
  }
}
</script>

<style>
  .fade-enter-active, .fade-leave-active{
    transition: all 1s;
  }

  .fade-enter, .fade-leave-to{
    opacity: 0;
    transform: rotate(45deg) translateY(-30px);
  }

  .list-item{
    display: inline-block;
    margin-right: 10px;
  }

  .fade-move{
    transition: transform 1s;
  }

  .fade-leave-active{
    position: absolute;
  }
</style>

