<template>
<div id="categorys">
  <header class="cate_header">
    <div class="header_item">
      <span class="item left"><span class="on">分类</span></span>
    </div>
    <div class="header_item right">
      <span class="item right"><span>品牌</span></span>
      <span class="icon"><i class="iconfont icon-search"></i></span>
    </div>

  </header>
  <div class="cate_content">
    <!--右侧菜单栏-->
    <div class="cate_menu">
      <ul class="cate_list">
        <li class="cate_item on" >
          为您推荐
        </li>
        <li class="cate_item" v-for="item in 12" :key="item">
          为您推荐
        </li>
      </ul>
    </div>
    <!--左侧分类列表-->
    <div class="cate_goods">
        <div class="goods_container">
          <div class="goods_title">
            <span>狗狗零食</span>
            <img src="" alt="">
          </div>
          <ul class="goods_content">
            <li class="goods_list" v-for="item in 6" :key="item">
              <img src="./f38b8a4245c34c33061d04ad1e8009dd.jpg" class="goods_pic">
              <span class="goods_title">国产狗粮</span>
            </li>
          </ul>
        </div>
      <div class="goods_container">
        <div class="goods_title">
          <span>狗狗零食</span>
          <img src="" alt="">
        </div>
        <ul class="goods_content">
          <li class="goods_list" v-for="item in 6" :key="item">
            <img src="./f38b8a4245c34c33061d04ad1e8009dd.jpg" class="goods_pic">
            <span class="goods_title">国产狗粮</span>
          </li>
        </ul>
      </div>
    </div>
  </div>



</div>
</template>
<script>
    export default {}

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

#categorys
  background-color $gray
  height 100%
  overflow hidden
  padding-bottom 60px
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
  .cate_content
    top-border-1px($gray)
    display flex
    .cate_menu
      width 75px
      flex 1
      .cate_list
        width 75px
        .cate_item
          width 100%
          height 50px
          text-align center
          line-height 50px
          bottom-border-1px($gray)
          background-color white
          &.on
            color red
            background-color $gray
    .cate_goods
      flex 4
      padding: 5px 5px 20px
      margin 5px 5px 20px
      background-color white
      height 100%
      width 80%
      .goods_container
        width 100%
        bottom-border-1px($gray)
        .goods_content
          margin 10px 0
          width 100%
          overflow hidden
          .goods_list
            height 120px
            width 30%
            float left
            margin 0 2px
            display flex
            flex-direction column
            justify-content center
            text-align center
            font-size 13px
            .goods_pic
              width 100%
              margin-bottom 10px







</style>
