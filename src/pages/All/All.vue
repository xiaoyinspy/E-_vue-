<template>
  <div class="all">
    <HeaderCode :name="name"/>
    <div class="brand_list">
      <div class="num" v-for="(item, index) in brandlist" :key="index">
        <h2 class="brand_n">{{item.order}}</h2>
        <div class="brand_box" v-for="(list,index) in item.list" :key="index">
          <div class="brand_img"><img :src="list.logo" alt="brand"></div>
          <div class="brand_msg">
            <span class="brand_name">{{list.name}}</span><br/>
            <span class="brand_country">{{list.address}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
    export default {
        data (){
            return {
                name: '全部品牌'
            }
        },
        mounted (){
          this.$store.dispatch('reBrandlist')
        },
        computed:{
          ...mapState(['brandList'])
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'
.all
  padding-top 60px
  .brand_list
    background-color white
    .brand_n
      padding  5px 0
      background-color $gray
    .brand_box
      padding 10px
      margin-right 20px
      height 52px
      background-color white
      bottom-border-1px($gray)
      .brand_img
        float left
        .brand_img
          width 95px
          height 40px
          margin 5px 7.5px
          border solid 1px $gray
        .brand_msg
          width 25%
          float left
          height 40px
          .brand_name
            font-weight 15px
          .brand_country
            font-size 13px
            color #7e8c8d



</style>
