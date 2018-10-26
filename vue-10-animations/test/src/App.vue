<template>
  <div>
    <button class="btn btn-primary" @click="show = !show">Toggle</button>

    <!--  enter-active-class="animated pulse slow"
      leave-active-class="animated zoomOut" 

      name="fade"
      type="transition"
    -->
    <!-- <transition name="fade" mode="out-in">
      <p v-if="show" key="hello-world">Hello World!</p>
      <p v-else key="hi">Hi!</p>
    </transition> -->

    <!-- <transition name="pulse-fade" type="animation">
      <p v-if="show">Hello World!</p>
    </transition> -->

    <!-- 
      appear-class: ""
      apper-active-class=""
      appear-to-class=""
     -->
    <!--   <transition name="fade" appear>
      <p v-if="show" key="hello-world">Hello World!</p>
    </transition> -->

    <!-- @after-enter=""
    @enter-cancelled=""

    @before-leave=""
    @leave=""
    @after-leave=""
    @leave-cancelled=""
 -->
    <transition
      @before-enter="beforeEnter"
      @enter="enter"
      :css="false"
    >
      <p v-if="show" key="hello-world">Hello World!</p>
    </transition>
  </div>
</template>

<script>
export default {
  data(){
    return {
      show: true
    }
  },
  methods: {
    beforeEnter(el){
      el.style.opacity = 0;
    },
    enter(el, done){
      let opacity = 0;

      const interval = setInterval(() => {
        opacity += 0.1;
        el.style.opacity = opacity;

        if(opacity > 0.9){
          clearInterval(interval);
          done();
        }

      }, 100);
    }
  }
}
</script>

<style type="text/css">
 /* .v-enter, .v-leave-to{
    opacity: 0;
  }

  .v-enter-active, .v-leave-active{
    transition: opacity 5s;
  }*/

  .fade-enter, .fade-leave-to, .pulse-fade-enter, .pulse-fade-leave-to{
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active{
    transition: opacity 1s;
  }

  .pulse-fade-enter-active, .pulse-fade-leave-active{
    transition: opacity 1s;
    animation: pulse 1s;
  }

  .pulse-fade-leave{
    opacity: 1;
  }

  .pulse-fade-leave-active{
    transition: opacity 4s;
    animation: pulse 1s;
  }

 /* .slow{
    animation-duration: 1s;
  }*/

  /*.v-enter-active{
    animation: pulse 1s;
  }

  .v-leave-active{
    animation: fade-out 1s;
  }*/

  @keyframes fade-out{
    from {
      opacity: 1;
      transform: opacity;
    }

    /*50% {
      transform: scale3d(1.2, 1.2, 1.2);
    }*/

    to {
      opacity: 0;
    }
  }

  @keyframes pulse{
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.2, 1.2, 1.2);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
</style>

