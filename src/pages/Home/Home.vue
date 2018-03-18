<template>
  <div>
  <Header class="header"
          :menus="home.menus"
          @closeIcon="closeIcon"
  />
  <div class="home">
    <!--小狗眨眼动画效果-->
    <div class="dog"></div>
    <!--轮播图-->
    <div class="banner_item">
      <div class="banner swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(banner,index) in home.dog_banner" :key="index">
              <img :src="banner">
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
      <div class="banner_bottom">
        <img :src="home.dog_img">
      </div>
      <div class="columnnavdiv">
        <!--menu菜单图标-->
        <div>
          <ul class="menu_content">
          <li class="fl" v-for="(list,index) in home.menu_list" :key="index">
            <img v-lazy="list">
          </li>
        </ul>
        </div>
    </div>
  </div>
    <!--正品秒杀，大牌1折秒-->
    <div class="banner1">
      <img :src="home.miaosha" width=100%>
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
              <span class="endTime">本场结束</span>
              <span class="text">12</span><span>:</span>
              <span class="text">00</span>
              <img  class="more" src="./images/surper/1.png">
            </div>
          </div>
          <div class="surprise-scroll">
            <div class="scroll_wrap swiper-container">
              <div class="swiper-wrapper scroll_first">
                <div class="swiper-slide" v-for="item in 10" :key="item">
                  <img src="./images/huodong/2a13da7043d568175753177ca978dae7.jpg">
                  <span class="price">￥1.75</span>
                  <span class="huodong">省15.75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!--品牌力量-->
      <div class="banner1">
        <img :src="home.brand_power" width=100%>
      </div>

    </div>
    <!--gif动图-->
    <div class="banner1">
      <img :src="home.gif" width=100%>
    </div>
    <!--VIP尊享服务-->
    <div class="Vip">
      <div class="banner1">
        <img :src="home.vip" width=100%>
      </div>
      <!--服务列表-->
      <img :src="vip_service" class="vipServer" v-for="(vip_service,index) in home.vip_services" :key="index">

    </div>
    <!--大牌带你刺激1折-->
    <div class="banner1">
      <img :src="home.dapaituan" width=100%>
    </div>
    <!--今日特价团 轮播图-->
    <div class="day swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" width="100%" v-for="(list,index) in home.dapaituan_list" :key="index">
          <img :src="list" width="100%" >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--大牌好货-->
    <div class="banner1">
      <img :src="home.haohuo" width=100%>
    </div>
    <!--活动会场-->
    <div class="activity" v-for="(list,index) in home.haohuo_list " :key="index">
      <ul class="left">
        <img v-lazy="item" v-for="item in list.left" >
      </ul>
      <ul class="right">
        <img v-lazy="item" v-for="item in list.right" >
      </ul>
    </div>



    <!--最惨奖-->
    <div class="banner1" >
      <img :src="home.zuican" width=100%>
      <img v-lazy="home.zuican_content" width=100%>
    </div>
    <!--特别星球-->
    <div class="banner1 banner_float" v-if="home.special_list">
      <img :src="home.special" width=100%>
      <img v-lazy="home.special_list[0]" width=49% style="float :left;">
      <img v-lazy="home.special_list[1]" width=49% style="float :right;">
      <img v-lazy="home.special_list[2]" width=49% style="float :right;">
    </div>
    <!--特色栏目-->
    <div class="banner1 banner_float">
      <img :src="home.lanmu" width=100%>
      <img v-lazy="list"
           v-for="list in home.lanmu_list" style="width: 49%; height:116px; display: block;float: right">
    </div>
    <div class="desc">
      <div class="desc_top">
        <span class="on">触屏版</span>
        <span>手机客户端</span>
        <span>关于我们</span>
        <span>联系我们</span>
      </div>
      <div class="desc_bottom">
        © wap.epet.com 版权：重庆易宠科技有限公司
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
  import {mapState} from 'vuex'

    export default {
      components:{
          Header
      },
      mounted(){
        this.$store.dispatch('reHome', ()=>{
          this.$nextTick(()=>{
            new Swiper('.swiper-container.scroll_wrap',{
              slidesPerView:3.5,
              freeMode:true,
              spaceBetween:10
            })
            var swiper3 = new Swiper('.day.swiper-container', {
              loop: true,
              autoplay: true
            })
            var swiper1 = new Swiper('.banner.swiper-container', {
              loop: true,
              autoplay: true,
              pagination: {
                el: '.swiper-pagination'
              }
            })
          })


        })

      },
      computed :{
        ...mapState(['home'])
      },
      methods() {

      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

  .header
    position fixed
    z-index 10
    left 0
    top 0
    width 100%
    background-color white
  .home
    width 100%
    background-color white
    position relative
    padding-top 130px
    height 100%
    overflow hidden
    .dog
      position fixed
      right 0
      bottom 100px
      width 42.5px
      height 47px
      z-index 20
      background-image: url('./godog.png')
      background-size 85px 47px
      animation: godog 1s steps(1,end) infinite
      @keyframes godog
        0%
          background-position 0 0
        50%
          background-position: -42.5px 0
        100%
          background-position: 0 0
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
        .swiper-pagination-bullet
          background: #fff
          opacity: .9
          width: 6px
          height: 6px
          border-radius 100%
        .swiper-pagination-bullet-active
          width 16px
          height 6px
          border-radius 6px
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
            font-size 0
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
          text-align center
          vertical-align middle
          line-height 20px
          .text
            border solid 1px $gray
            padding 1px
          .more
            width 70px
            height 100%
      .surprise-scroll
        width 100%
        height 140px
        overflow hidden
        .scroll_wrap
          width 100%
          height 100%
          .scroll_first
            width 100%
            .swiper-slide
              display flex
              flex-direction column
              justify-content center
              img
                width 100%
                display block
              >span
                text-align center
              .price
                color  red
                font-size 14px
              .huodong
                color  #999999
                font-size 15px
    .banner1
      bottom-border-1px(#e4e4e4)
      &.banner_float
        overflow hidden
        background-color black
    .Vip
      width 100%
      .vipServer
        float left
        width 50%
        display block
    .activity
      width 100%
      background-color black
      overflow hidden
      display flex
      justify-content space-around
      >ul
        width 49%
        float left
        margin 2px auto
        >img
          width 100%
          height 225px
          margin 1px auto

    .desc
      text-align center
      height  80px
      .desc_top
        margin-top 30px
        display flex
        flex-direction row
        flex-wrap nowrap
        justify-content space-around
        height 30px
        line-height 30px
        >span
          &.on
            color red
      .desc_bottom
        margin-top 10px
        height 50px
        font-size 13px




</style>
