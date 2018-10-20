<template>
  <div>
    <ul>
      <li><a href="#" @click.prevent="activeView = 'app-home'">Home</a></li>
      <li><a href="#" @click.prevent="activeView = 'app-about'">About</a></li>
      <li><a href="#" @click.prevent="activeView = 'app-contact'">Contact</a></li>
    </ul>
    <keep-alive>
      <component :is="activeView"></component>
    </keep-alive>
  </div>
</template>

<script>
export default {
  data(){
    return {
      activeView: 'app-home'
    }
  }
}
</script>

<style>

</style>
