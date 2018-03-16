<template>
<div class="categorys">
  <header class="cate_header">
    <div class="header_item">
      <span class="item left"><span :class="{on:$route.path == '/categorys/class'}" @click="goto( '/categorys/class')">分类</span></span>
    </div>
    <div class="header_item right">
      <span class="item right"><span  :class="{on:$route.path == '/categorys/brand'}" @click="goto( '/categorys/brand')">品牌</span></span>
      <span class="icon"><i class="iconfont icon-search"></i></span>
    </div>
  </header>
  <router-view></router-view>
</div>

</template>
<script>

    export default {
      data () {
        return {
          isShow: true, //
        }
      },
      methods:{
          goto (url){
          this.$router.replace(url)
        }
      },
      mounted () {
      },

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

  .categorys
    background-color $gray
    height 100%
    overflow hidden
    .cate_header
      height 40px
      line-height 40px
      width 100%
      background-color white
      display flex
      justify-content center
      position relative
      .header_item
        width 50%
        font-size 16px
        margin 0 20px
        &.right
          margin-right 20px
          display flex
          justify-content space-between
          .on
            color: #ed4044;
            border-bottom: 2px solid #ed4044
        .item
          display inline-block
          &.left
            width 100%
            text-align right
            .on
              color: #ed4044;
              border-bottom: 2px solid #ed4044
</style>
