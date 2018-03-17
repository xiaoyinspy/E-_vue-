<template>
  <div id="app">

    <router-view></router-view>
    <Footer v-if="$route.meta.showFooter"></Footer>
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
body
  background-color white
  #app
    box-sizing border-box
    background-color white
    padding-bottom 60px
</style>
