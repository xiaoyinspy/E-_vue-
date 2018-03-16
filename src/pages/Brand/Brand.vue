<template>
    <div class="brand_box">
      <div class="brand_container">
        <div class="brand_div" v-for="(item ,index) in brand" :key="index">
        <div class="brand_title">
          <span class="title">—— {{item.title}} ——</span>
        </div>
        <div class="brand_content">
          <ul class="brand_container">
            <li class="brand_item" v-for="(b,index) in item.list" :key="index">
              <div class="branner_img">
                <img class="branner" :src="b.logo" alt="">
              </div>
              <span class="name">{{b.name}}</span>
              <span class="address">{{b.address}}</span>
            </li>
          </ul>
        </div>
        </div>
      </div>
    </div>
</template>
<script>
  import BScroll from 'better-scroll'
  import {mapState} from 'vuex'

    export default {
      computed :{
        ...mapState(['brand'])
      },
      mounted (){
          this.$store.dispatch('reBrand')

          this.$nextTick( () =>{
              new BScroll('.brand_box',{
                click: true
              })
          })

      }


    }

</script>
<style lang="stylus" rel="stylesheet/stylus">

  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'

.brand_box
  margin-top 2px
  background-color white
  height 100%
  overflow hidden
  .brand_container
    .brand_div
      .brand_title
        height 40px
        text-align center
        line-height 40px
        .title
          color $gray
          font-size 13px
      .brand_content
        .brand_container
          width 100%
          overflow hidden
          display flex
          justify-content space-around
          flex-wrap wrap
          .brand_item
            width 30%
            display flex
            flex-direction column
            justify-content space-around
            text-align center
            flex-wrap wrap
            margin-bottom 10px
            .name
              font-size 14px
              margin 5px 0
            .address
              font-size 13px
              color $gray
            .branner_img
              width 100%
              padding 10px  0px
              border solid 1px $gray
              .branner
                width 83px
                height 40px

</style>
