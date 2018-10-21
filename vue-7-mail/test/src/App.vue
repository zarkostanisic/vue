<template>
  <div>
    <app-sidebar></app-sidebar>
    <app-content></app-content>
  </div>
</template>

<script>
import {eventBus} from './main'
import Sidebar from './Sidebar.vue'
import Content from './Content.vue'

export default {
  components: {
    appSidebar: Sidebar,
    appContent: Content
  }
}
</script>
