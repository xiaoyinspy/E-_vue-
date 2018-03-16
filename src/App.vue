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
    box-sizing border-box
    background-color white
    padding-bottom 60px
</style>
