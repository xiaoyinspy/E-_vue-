<template>
  <div class="home">
    <Header class="header" />
    <!--轮播图-->
    <div class="banner_item">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
              <img src="./haiwai.jpg">
          </div>
          <div class="swiper-slide" >
              <img src="./baolu.jpg">
          </div>
          <div class="swiper-slide" >
            <img src="./fumo.jpg">
          </div>
          <div class="swiper-slide" >
              <img src="./ouguan.jpg">
          </div>
          <div class="swiper-slide" >
              <img src="./zhuliang.jpg">
          </div>
          <div class="swiper-slide" >
              <img src="./tongzhi.jpg">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="banner_bottom">
        <img src="./dog.jpg">
      </div>
      <div class="columnnavdiv">
        <!--menu菜单图标-->
        <div>
          <ul class="menu_content">
          <li class="fl">
            <img src="./images/menu/1.jpg">
          </li>
            <li class="fl">
              <img src="./images/menu/2.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/3.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/4.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/5.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/6.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/7.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/8.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/9.jpg">
            </li>
            <li class="fl">
              <img src="./images/menu/10.jpg">
            </li>
        </ul>
        </div>
        <!--正品秒杀，大牌1折秒-->
        <div class="banner1">
          <img src="./images/banner/85e2ada29e2157daeda797903cd13dd2.jpg" width=100%>
        </div>
        <!--本场活动-->
        <div>
          <div class="surprise_day">
            <div class="surprise">
              <div class="surprise-tit ">
                <div class="titimg">
                  <img src="./images/surper/2.png">
                </div>
                <div class="tit_right">
                <!--<span class="endTime">本场结束</span>-->
                  <!--<div class="text_div">-->
                    <!--<span class="text">12</span><span>:</span>-->
                    <!--<span class="text">00</span>-->
                  <!--</div>-->
                 <img  class="more" src="./images/surper/1.png">
                </div>
              </div>
              <div class="surprise-scroll">
                <div class="scroll_wrap">
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
                  <div class="scroll_item">
                    <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                    <span class="price">￥1.75</span>
                    <span class="huodong">省15.75</span>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <!--品牌力量-->
        <div class="banner1">
          <img src="./images/banner/85e2ada29e2157daeda797903cd13dd2.jpg" width=100%>
        </div>

      </div>
        <!--gif动图-->
        <div class="banner1">
          <img src="./images/banner/85e2ada29e2157daeda797903cd13dd2.jpg" width=100%>
        </div>
    </div>

  </div>
  </div>
 </template>
<script>
  import Header from '../../components/Header/Header.vue'
  import Swiper from 'swiper'
  import BScroll from 'better-scroll'
  import '../../../node_modules/swiper/dist/css/swiper.css'
    export default {
      components:{
          Header
      },
      mounted(){
        var swiper = new Swiper('.swiper-container', {
          loop: true,
          pagination: {
            el: '.swiper-pagination'
          }
        })

        var superScroll  = new BScroll( '.surprise-scroll' ,{
            click: true
        })

      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

  .home
    width 100%
    background-color white
    position relative
    padding-top 80px
    padding-bottom 60px
    .header
      position fixed
      z-index 10
      left 0
      top 0
      height 80px
      width 100%
      background-color white
      padding-top 5px
    .banner_item
      width 100%
      margin-top 10px
      .swiper-container
        height 160px
        width 100%
        .swiper-slide
          height 100%
          >img
            width 100%
            height 100%

      .banner_bottom
        width 100%
        >img
          width 100%
      .columnnavdiv
        width 100%
        .menu_content
          width 100%
          display flex
          flex-wrap wrap
          .fl
            width 20%
            display inline-block
            top-border-1px(write)
            >img
              width 100%
        .surprise_day
          background-color white
          .surprise-tit
            height 20px
            .titimg
              margin 20px
              float left
              >img
                width 85px
            .tit_right
              float right
              width 60%
              .endTime
                display inline-block
              .more
                float right
                margin-right 0px
                width 67px
          .surprise-scroll
            width 100%
            height 140px
            overflow hidden
            .scroll_wrap
              width 100%
              .scroll_item
                width 30%
                float left
                /*display flex*/
                /*justify-content center*/
                /*flex-direction column*/
                >img
                  width 90%
                .price
                  color: red
                  font-size 14px
                .huodong
                  color: $gray
                  font-size 15px


</style>
