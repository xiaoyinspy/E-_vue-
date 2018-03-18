<template>
  <div>
    <!--广告区-->
    <div class="advertising" v-if="isShow">
      <span @click="closeIcon"></span>
    </div>
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
        <router-link to="/home">
        <li  class="scroll_li" v-for="(menu,index) in menus" @click="setIndex(index)"
            :class="{on: index == currentIndex}" :key="index">
            <span >{{menu.menu_name}}</span>
            <div class="div"></div>
        </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>
<script>
  import BScroll from 'better-scroll'
    export default {
      props:{
          menus:Array //头部菜单数据
      },
      data () {
        return {
            currentIndex: 0 , //当前选中
            isShow: true, //广告的显示与隐藏
        }
      },
      mounted (){
          const menus = this.menus
          this.$nextTick(()=>{
             new BScroll('.header_list',{
              click: true,
               scrollX:true
            })
          })

      },
      methods:{
        setIndex(index){
            this.currentIndex = index
        },
        closeIcon(){
            this.isShow = false
          this.$emit('closeIcon')
        }
      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
.advertising
  width 100%
  height 55px
  background-image url("./guanggao/c63b6e6cf483cbb61196f658920a9d6e.jpg")
  background-size 100% 100%
  background-color white
  position relative
  >span
    display inline-block
    width 20px
    height 20px
    background-image url("./guanggao/closebtn_03.png")
    background-size 100%
    position absolute
    top 5px
    left 5px
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
     background-color $green
     margin-top -2px

</style>
