<template>
  <div class="all">
    <HeaderCode :name="name"/>
    <div class="brand_container">
    <div class="brand_list" ref="scrollDiv">
      <div class="num  brand_list_hook"  v-for="(item, index) in brandlist" :key="index">
        <h2 class="brand_n">{{item.order}}</h2>
        <div class="brand_box" v-for="(list,index) in item.list" :key="index">
          <div class="brand_img"><img :src="list.logo" alt="brand"></div>
          <span class="brand_msg">
            <span class="brand_name">{{list.name}}</span><br/>
            <span class="brand_country">{{list.address}}</span>
          </span>
        </div>
      </div>
    </div>
    </div>
    <div class="brand_nav">
      <span :class="{on: index == currentIndex}" @click="setIndex(index)"
            v-for="(item, index) in brandlist" :key="index">{{item.order}}</span>
    </div>
  </div>
</template>
<script>
  import {mapState} from 'vuex'
  import BScroll from 'better-scroll'
    export default {
        data (){
            return {
                name: '全部品牌',
                scrollY: 0, //滑动的数值
                tops:[], //用于存储内容区高度累计的数组
            }
        },
        mounted (){
          this.$store.dispatch('reBrandList',()=> {
            this.$nextTick(()=>{
                //初始化滚动
              this._initBscroll ()
              //初始化top值
              this._initTopScroll()
            })
          })
        },
        computed:{
          ...mapState(['brandlist']),
          currentIndex :{
              get(){
                const {scrollY, tops} = this
                return tops.findIndex((top,index)=>
                  scrollY >= top && scrollY < tops[index+1]
                )
              }
          }
        },
        methods:{
            _initBscroll (){

            this.brandScroll= new BScroll ( '.brand_container',{
                click:true,
                bounce:false,
                probeType:3,
              })
              // 监视滑动过程
              this.brandScroll.on('scroll', (pos) => {
                console.log(pos.y)
                // 保存y
                this.scrollY = Math.abs(pos.y)
              })
              //监事滑动结束
//              this.brandScroll.on('scrollEnd',(pos)=>{
//                  console.log('滑动结束',pos.y)
//                this.scrollY = Math.abs(pos.y) // 解决惯性滑动更新
//
//              })
            },
            _initTopScroll (){
                const tops = []
                let top = 0
              //计算每个分组的top值， 并保存到tops
              tops.push(top)

              //得到所有的div的高度，并保存
              const lis = this.$refs.scrollDiv.getElementsByClassName('brand_list_hook')
              Array.prototype.slice.call(lis).forEach((li, index) => {
                top += li.clientHeight
                tops.push(top)
              })
              // 保存tops
              this.tops = tops
            },
          setIndex(index) {
                //更新当前坐标
            //this.currentIndex = index
            let top = this.tops[index]
            console.log(top);
            //活动能够到指定位置
            this.brandScroll.scrollTo(0,-top,300)
          }
        }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'
.all
  padding-top 60px
  position relative
  background-color white
  overflow-y:hidden
  .brand_container
    height 700px
    overflow-y:hidden
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
          >img
            width 95px
            height 40px
            margin 5px 7.5px
            border solid 1px $gray
        .brand_msg
          display inline-block
          width 50%
          height 50px
          padding 10px
          .brand_name
            font-weight 15px
          .brand_country
            font-size 13px
            color #7e8c8d
            margin-top 10px



  .brand_nav
    position absolute
    right 10px
    top  200px
    width 13px
    >span
      float right
      margin-bottom 5px
      &.on
        color red
        font-weight bold
</style>
