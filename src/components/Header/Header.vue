<template>
  <div>
    <div class="header_top">
      <span class="select">狗狗|重庆<i class="iconfont icon-sanjiao"></i></span>
      <div class="search">
        <input type="text" class="searchInput" placeholder="搜索商品和品牌"/>
          <i class="icon"></i>
      </div>
      <span class="talk"><i class="iconfont icon-xiaoxixinxihuihuahuida"></i></span>
    </div>
    <div class="header_list">
      <ul class="scroll_ul">
        <li class="scroll_li on" >
            <span >首页</span>
            <div class="div"></div>
        </li>
        <li class="scroll_li">
          <a>
            <span>狗狗主粮</span>
            <i></i>
          </a>
        </li>
        <li class="scroll_li">
          <a>
            <span>服饰城</span>
            <i></i>
          </a>
        </li>
        <li class="scroll_li">
          <a>
            <span>医疗保健</span>
            <i></i>
          </a>
        </li>
        <li class="scroll_li">
          <a>
            <span>零食玩具</span>
            <i></i>
          </a>
        </li>
        <li class="scroll_li">
          <a>
            <span>日用外出</span>
            <i></i>
          </a>
        </li>
        <li class="scroll_li">
          <a>
            <span>美容香波</span>
            <i></i>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
      mounted (){
          this.$nextTick(()=>{
             new BScroll('.header_list',{
              click: true
            })
          })

      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'

.header_top
  display flex
  justify-content space-around
  height 20px
  margin 8px
  text-align center
  line-height 20px
  font-size 14px
  background-color white
  .select
    flex 3
    width 10%
    .iconfont
      font-size 15px
  .search
    flex 9
    .searchInput
      width 100%
      height 20px
      background-color $gray
      border-radius 6px
      outline none
  .talk
    flex 1
    .iconfont
      font-size 25px
.header_list
  height 30px
  font-size 16px
  text-align center
  line-height 30px
  overflow hidden
  .scroll_ul
    width 200%
    height 30px
  .scroll_li
   float left
   margin 0 15px
   &.on
    color $green
    >div
     width 100%
     height 5px
     display block
     margin-top 5px
     background-color $green

</style>
