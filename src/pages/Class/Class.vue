<template>
  <div id="categorys">
    <div class="cate_content">
      <!--左侧菜单栏-->
      <div class="cate_menu">
        <ul class="cate_list">
          <li class="cate_item" v-for="(category,index) in categorys"
              :key="index" @click="setCate(category,index)" :class="{on: index==currentIndex}">
            {{category.name}}
          </li>
        </ul>
      </div>
      <!--右侧分类列表-->
      <div class="cate_goods">
        <div class="cate_container">
        <div class="goods_container" v-if="list.type == 0" v-for="(list,index) in cateList"  :index="index">
          <div class="goods_title">
            <span>{{list.title}}</span>
            <img v-if="list.rigth_img.image" :src="list.rigth_img.image" alt="more">
          </div>
          <ul class="goods_content">
            <li class="goods_list" v-for="(item,index) in list.list" :key="index">
              <img v-lazy="item.photo" class="goods_pic">
              <span class="good_title">{{item.name}}</span>
            </li>
          </ul>
        </div>
        <div class="goods_container" v-if="list.type ==2" v-for="(list,index) in cateList"  :index="index">
            <div class="goods_title">
              <span>{{list.title}}</span>
              <img v-if="list.rigth_img.image" :src="list.rigth_img.image" alt="more">
            </div>
            <ul class="goods_content">
              <li class="goods_list_second goods_list" v-for="(item,index) in list.list" :key="index">
                <div class="goods_pic_second"><img :src="item.logo" ></div>
                <span class="good_title">{{item.name}}</span>
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
      data(){
        return {
            currentIndex: 0 //当前选中的菜单栏
        }
      },
      computed:{
        ...mapState(['categorys','cateList'])
      },
      mounted(){
        this.$store.dispatch('reCategorys',()=>{
          this.$nextTick(()=>{
            this.$store.dispatch('saveCateList', {cate_list:this.categorys[0].cate_list})
          })
        })

      },
      methods:{
        setCate(category,currentIndex){
            this.currentIndex = currentIndex
            this.$store.dispatch('saveCateList',{cate_list:category.cate_list} )
        }
      },
      watch :{
        currentIndex: function (val) {
          this.$nextTick(() =>{
            new BScroll('.cate_goods',{
              click:true
            })
          })
        }
      }
    }

</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

    .cate_content
      top-border-1px($gray)
      display flex
      height 100%
      overflow hidden
      .cate_menu
        width 75px
        flex 1
        height 100%
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
        padding: 5px 5px 0px
        margin 5px 5px 0
        background-color white
        height 635px
        width 80%
        .cate_container
          bottom-border-1px($gray)
          .goods_title
            margin 20px 0px
            font-size 13px
            color $gray
            >img
              float right
              width 46px
              height 10px
          .goods_content
            padding 0 0  20px 0
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
              &.goods_list_second
                height 120px
                width 48%
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
              .goods_pic_second
                border solid 1px $gray
                margin 10px auto
                >img
                  padding 4px 20px
                  height 45px








</style>
