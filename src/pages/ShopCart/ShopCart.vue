<template>
  <div class="shopCart">
    <div class="header">
      <div class="personal-bico1" @click="goback" ></div>
      <span>购物车</span>
      <div class="imgtk" @click="showToggle"></div>
    </div>
    <transition name="slide">
      <div class="toggle" v-if="isShow">
        <a href="javascript:;">
          <span class="icon header_icon1"  ></span>
          <span class="text">首页</span>
        </a>
        <a href="javascript:;">
          <span class="icon header_icon2"></span>
          <span class="text">分类列表</span>
        </a>
        <a href="javascript:;">
          <span class="icon header_icon4"></span>
          <span class="text">购物车</span>
        </a>
        <a href="javascript:;">
          <span class="icon header_icon5"></span>
          <span class="text">我的e宠</span>
        </a>
      </div>
    </transition>
    <div class="cart_content">
      <div class="cart_pic">
      </div>
      <span>购物车是空的</span>
      <div class="cart_button">
        <div class="button">去逛逛</div>
        <div class="button">我的收藏</div>
      </div>
    </div>

  </div>
</template>
<script>
  import PubSub  from 'pubsub-js'
    export default {
        data (){
         return {
           isShow: false //内容是否显示，默认不显示
             }
         },
        methods:{
          showToggle() {
              this.isShow = ! this.isShow
          },
          goback(){
            PubSub.publish('toggleShow1')
          }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'
  .shopCart
    .header
      width 100%
      height 60px
      line-height 60px
      text-align center
      bottom-border-1px($gray)
      padding  0 10px
      font-size 18px
      .personal-bico1
        float left
        width 30px
        height 30px
        background-image url("../Profile/login/personal-bico1.png")
        background-size 50%
        background-repeat no-repeat
        margin-top 15px
        margin-left 10px
      .imgtk
        float right
        width 40px
        height 40px
        background-image: url("./shopcart/imgtk-new.png")
        background-size 80%
        background-repeat no-repeat
        margin-top 15px
        margin-right  10px
    .toggle
      height 80px
      overflow hidden
      display flex
      justify-content space-around
      align-items center
      background-color white
      color: #000
      top-border-1px($gray)
      bottom-border-1px($gray)
      >a
        display flex
        flex-direction column
        text-align center
        justify-content space-around
        .icon
          display inline-block
          margin 0 auto
          width 30px
          height 30px
          background-size 100%
          margin-bottom 10px
          &.header_icon1
            background-image url("./shopcart/head_icon1.png")
          &.header_icon2
            background-image url("./shopcart/head_icon2.png")
          &.header_icon4
            background-image url("./shopcart/head_icon4.png")
          &.header_icon5
            background-image url("./shopcart/head_icon5.png")
        .text
          font-size 14px
          color black
      &.slide-enter-active
        transition all 1s ease-out
      &.slide-enter-active
        transition all 1.5s ease-out
      &.slide-enter,&.slider-leave-to
        height 0px
    .cart_content
      background-color white
      height 25%
      display flex
      flex-direction column
      justify-content space-around
      align-items center
      color: $gray
      font-size 13px
      .cart_pic
        width 100px
        height 100px
        background-repeat no-repeat
        background-image url("./shopcart/cart-ico.png")
        background-position -200px
        background-color $gray
      .cart_button
        font-size 14px
        width 50%
        display flex
        justify-content space-around
        margin 10px auto
        >div
          border solid 1px
          border-radius 5px
          width 40%
          height 35px
          line-height 30px
          text-align center
          display inline-block


</style>
