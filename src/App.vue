<template>
  <div id="app">

    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from './pages/Footer/Footer.vue'

export default {
  name: 'App',
  components: {
    Footer
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  #app
    height 100%
    background-color white
</style>
