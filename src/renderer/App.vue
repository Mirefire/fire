<template>
  <div id="app">
    <v-title></v-title>
    <router-view></router-view>
  </div>
</template>

<script>
import Mytitle from '@/components/Title/mytitle'
  export default {
    name: 'vuepath',
    components: {
      "v-title": Mytitle
    },
   
  }
</script>

<style>
  /* CSS */
</style>
