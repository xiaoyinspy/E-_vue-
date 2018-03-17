<template>
  <div class="headerCode" >
    <div class="header">
      <div class="personal-bico1" @click="goback" ></div>
      <span>{{name}}</span>
      <div class="imgtk" @click="showToggle"></div>
    </div>
     <transition name="slide">
       <div class="toggle" v-if="isShow" >
         <router-link tag="a" to="/home" >
           <span class="icon header_icon1"  ></span>
           <span class="text">首页</span>
         </router-link>
         <router-link tag="a" to="/categorys">
           <span class="icon header_icon2"></span>
           <span class="text">分类列表</span>
         </router-link>
         <router-link tag="a" to="/shopcart">
           <span class="icon header_icon4"></span>
           <span class="text">购物车</span>
         </router-link>
         <router-link tag="a" to="/profile">
           <span class="icon header_icon5"></span>
           <span class="text">我的e宠</span>
         </router-link>
       </div>
      </transition>
  </div>
</template>
<script>
    export default {
        props:{
            name:String, //名字
        },
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
          this.$router.back()
        }
      }

    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

  .header
    width 100%
    height 60px
    line-height 60px
    text-align center
    bottom-border-1px($gray)
    padding  0 10px
    font-size 18px
    position fixed
    top 0
    left 0
    z-index 20
    background-color white
    .personal-bico1
      float left
      width 30px
      height 30px
      background-image url("../../pages/Profile/login/personal-bico1.png")
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
    &.slide-enter-active
      transition all 1s ease-out
    &.slide-leave-active
      transition all 1.5s ease-out
    &.slide-enter,&.slide-leave-to
      height 0px
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


</style>
