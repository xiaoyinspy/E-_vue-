<template>
  <div class="home">
    <!--小狗眨眼动画效果-->
    <div class="dog"></div>
    <Header class="header" />
    <!--轮播图-->
    <div class="banner_item">
      <div class="banner swiper-container">
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
    </div>
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
        <img src="./images/banner/f1b7fefaf2e0a3b01498658788d75fbd.jpg" width=100%>
      </div>

    </div>
    <!--gif动图-->
    <div class="banner1">
      <img src="./images/banner/1.gif" width=100%>
    </div>
    <!--VIP尊享服务-->
    <div class="Vip">
      <div class="banner1">
        <img src="./images/banner/02cdfda794ee4cc90e0e39462e17d49d.jpg" width=100%>
      </div>
      <!--服务列表-->
      <img src="./images/vip/071f8a55cf20097fb53de090e0a0dc16.jpg" class="vipServer" v-for="item in 4" :key="item">

    </div>
    <!--大牌带你刺激1折-->
    <div class="banner1">
      <img src="./images/banner/5fd369ed534f5a32ac751ff29ab90034.jpg" width=100%>
    </div>
    <!--今日特价团 轮播图-->
    <div class="day swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide" width="100%">
          <img src="./images/lun/f122ae20ce1880988ff7e5c64440675a.jpg" width="100%" >
        </div>
        <div class="swiper-slide" width="100%" >
          <img src="./images/lun/3c54559f077235436b408a6839138b4f.jpg" width="100%" >
        </div>
        <div class="swiper-slide" width="100%">
          <img src="./images/lun/3ea8f16882581307427bd3d962fc6dd0.jpg" width="100%" >
        </div>
        <div class="swiper-slide" width="100%">
          <img src="./images/lun/9ab35e8f6f88e2adac715cd83ac5c69c.jpg" width="100%" >
        </div>
        <div class="swiper-slide" width="100%">
          <img src="./images/lun/9e4502cf22ecb6f8b97715c7fc73ed50.jpg" width="100%" >
        </div>
        <div class="swiper-slide" width="100%">
          <img src="./images/lun/d3d4c3ee17f2a047f3eee2ec30591aac.jpg" width="100%" >
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
    <!--大牌好货-->
    <div class="banner1">
      <img src="./images/banner/0d6125d9f846519e83e7354bd8638cf7.jpg" width=100%>
    </div>
    <!--活动会场-->
    <div class="activity">
      <img src="./images/activity/0a62002ed3ef0055064da37248c99069.jpg" v-for="item in 8" :key="item">
    </div>
    <div class="activity">
      <img src="./images/activity/1cd073f15561b4d83e98014e08bbb768.jpg" v-for="item in 8" :key="item">
    </div>
    <div class="activity">
      <img src="./images/activity/3e66ab41c0bec3592f9bd7e41c5fa096.jpg" v-for="item in 8" :key="item">
    </div>
    <div class="activity">
      <img src="./images/activity/3ea747d791b0923f775d1b23b5da9485.jpg" v-for="item in 8" :key="item">
    </div>
    <div class="activity">
      <img src="./images/activity/4fd9b25c7e17a9d1648385df0f0ce6ac.jpg" v-for="item in 8" :key="item">
    </div>

    <!--最惨奖-->
    <div class="banner1" >
      <img src="./images/banner/313106e05cd8b140f4bc8d298d98e87a.jpg" width=100%>
      <img src="./images/banner/bac4f238ed715999f7d5bd9d4f0ab56e.jpg" width=100%>
    </div>
    <!--特别星球-->
    <div class="banner1 banner_float">
      <img src="./images/banner/4e129b980839446eabb5fce594f60364.jpg" width=100%>
      <img src="./images/chao/62c5a1f0c1b4b535aee4a537864ecd45.jpg" width=49% style="float :left;">
      <img src="./images/chao/ca4e375ccf9992ce0e8666c256b6ef4e.jpg" width=49% style="float :right;">
      <img src="./images/chao/e25b9300c387beec0b28499a8f19d83e.jpg" width=49% style="float :right;">
    </div>
    <!--特色栏目-->
    <div class="banner1 banner_float">
      <img src="./images/banner/83a8298fad417a66415c11e0acfac335.jpg" width=100%>
      <img src="./images/more/18442aea515fdb23ec49d837bbe3dac1.jpg"
           v-for=" item in 6" style="width: 49%; display: block;float: right">
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
          .endTime
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
      display flex
      flex-wrap wrap
      justify-content space-around
      >img
        width 49%
        height 225px
        margin 2px auto
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
