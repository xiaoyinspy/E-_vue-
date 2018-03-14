<template>
  <div class="footer">
    <ul class="footer_content">
      <li class="footer_item" @click="goto('/home')">
        <i class="iconfont icon-fangwuxinxi"></i>
        <span class="text">首页</span>
      </li>
      <li class="footer_item" @click="goto('/categorys')">
        <i class="iconfont icon-fenlei"></i>
        <span class="text">分类</span>
      </li>
      <li class="footer_item" @click="goto('/shopcart')">
        <i class="iconfont icon-gouwuche"></i>
        <span class="text">购物车</span>
      </li>
      <li class="footer_item" @click="goto('/profile')">
        <i class="iconfont icon-xiaolian"></i>
        <span class="text">我的E宠</span>
      </li>
    </ul>
  </div>
</template>
<script>
    export default {
      methods:{
          goto (url){
              this.$router.replace(url)
          }
      }

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  .footer
    position fixed
    bottom 0
    left 0
    height 60px
    color black
    width 100%
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


</style>
