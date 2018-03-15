<template>
  <div class="footer"  v-if="!isHidden">
    <ul class="footer_content">
      <li class="footer_item" @click="goto('/home')" :class="{on: $route.path == '/home'}">
        <i class="iconfont icon-fangwuxinxi"></i>
        <span class="text">首页</span>
      </li>
      <li class="footer_item" @click="goto('/categorys')" :class="{on: $route.path == '/categorys'}">
        <i class="iconfont icon-fenlei"></i>
        <span class="text">分类</span>
      </li>
      <li class="footer_item" @click="goto('/shopcart')"  :class="{on: $route.path == '/shopcart'}">
        <i class="iconfont icon-gouwuche"></i>
        <span class="text">购物车</span>
      </li>
      <li class="footer_item" @click="goto('/profile')" :class="{on: $route.path == '/profile'}">
        <i class="iconfont icon-xiaolian"></i>
        <span class="text">我的E宠</span>
      </li>
    </ul>
  </div>
</template>
<script>
  import PubSub  from 'pubsub-js'
    export default {
      methods:{
          goto (url){
              if(url =='/shopcart' || url =='/profile'){
                this.$router.push(url)
                this.isHidden = true
                return false
              }
              this.$router.replace(url)
          }
      },
      data(){
          return{
            isHidden: false
          }
      },
      mounted (){
        PubSub.subscribe('toggleShow2', () =>{
          this.isHidden = false
          this.$router.push('/home')
        })
        PubSub.subscribe('toggleShow1', () =>{
          this.isHidden = false
          this.$router.push('/home')
        })
      }

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

  .footer
    position fixed
    bottom 0
    left 0
    height 60px
    color black
    width 100%
    z-index 20
    background-color white
    .footer_content
      width 100%
      display flex
      justify-content space-between
    .footer_item
      width 20%
      height  25px
      line-height 25px
      font-size 20px
      display flex
      justify-content space-between
      flex-direction column
      text-align center
      margin-top 5px
      .iconfont
        font-size 30px
      .text
        font-size 14px


      &.on
        color: $green

</style>
