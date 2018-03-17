<template>
  <div class="shopCart">
    <HeaderCode :name="name"/>
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
    export default {
        data (){
            return{
              name: '购物车',
            }

        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'
    .shopCart
      padding-top 60px
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
