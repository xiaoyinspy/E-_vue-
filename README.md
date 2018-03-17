# E宠商城 
  
### 项目的技术选型：
    vue  
    vue-router  
    stylus  
    轮播图swiper  
    页面滑动better-scroll  
###  路由拆分
    一级路由  
     首页/home  
     分类/Categorys 
     购物车/ShopCart  
     我的E宠/Profile  
##  day01
    1.完成的进度:    
      拆分好了一级路由 
      首页完成了一部分 
    2. 遇到的问题：  
      1）使用better-scroll 未能实现Header滑动效果
        水平滑动：需要添加配置  scrollX:true;
      2）页面布局很费力 
    3.今日收获  
      1） 使用FE图片助手，可以很方便得转换Json数组    
      2） 使用Swiper包，可以很轻松的实现轮播图以及页面的滑动效果，
          并且滑动的系数，以及弹簧效果都可以自由设置
               new Swiper('.swiper-container.scroll_wrap',{
                 slidesPerView:3.5,
                 freeMode:true,
                 spaceBetween:10
               })
      3)  可以使用border绘制小三角 
            .sanjiao
              border-width 4px
              font-size: 0
              line-height: 0
              border-style solid solid dotted
              border-color #898989 transparent transparent
      4) 页面不是100%显示   
              bscroll需要把页面写好
              swiper使用，更加简单
      5）点击切换小狗的动态效果        

##  day02  
     1.完成的进度：
      1）完善静态页面，目前还查注册登录页面
      2）.实现分类页面的交互效果，数据获取  
    遇到的问题：
       1.分类页面头部布局花费了很长的时间，只因为思路不清晰
       对于flex布局的研究不够深入  <span>标签开启flex布局之后，宽度为100%？？
       2.首页的动画效果的实现
       3.轮播图导航小圆点样式的修改(完成，在Swiper自动生成的类上进行添加)
       *4.首页的广告    
       5.小狗眨眼动画效果  动画切换(已经完成)
       6.购物车，头部不能开启固定定位（还未解决）；显示与隐藏的动画效果实现有问题（还未解决）；
        购物车背景图片定位有问题
    今日收获：
        1.了解到了 动画效果跳跃steps，可以使用动画进行状态切换
        animation: test 2s steps (1,end) infinite
        @keyframes test{
          0% {
          background-position: 0,0;
        }
          50% {
              background-position: -87px,0;
            }
          100% {
              background-position: 0,0;
            }
         }
         2. 如何用border来画小三角  
                 例子：向上的白色小三角
                       >ihttps://github.com/xiaoyinspy/E-_vue-
                       width: 0
                       height: 0
                       display block
                       border-width 0px 10px 10px
                       border-style solid
                       border-color transparent transparent  white
                       position: absolute
                       bottom: 0
                       left: 0
                       right: 0
                       margin: auto

##  day03
    完成的进度：
        1.完成了首页和分类页面数据动态获取
        2.完成了四个静态页面

    遇到的问题：
        1.页面加载时，数据还未获取到，出现 of undefied的现象

        问题一：原因数据层架较多，可以采用this.$nextTick的方式，
        在发送异步获取action时传递一个回调函数。
              methods:{
                setCate(category,currentIndex){
                    this.currentIndex = currentIndex
                    this.$store.dispatch('saveCateList',{cate_list:category.cate_list})
                }
              }
         2.使用better-scroll滑动页面的时候出现问题: 左侧与右侧同时滑动          
         解决方案：给滑动元素的父元素设置固定高度，可以使子元素滑动。
         （组员解决）
         3.上下两个数组遍历的时候样式不一样（样式需要修改）
           解决方案： 写两个模板 cate_list.type来进行设置。
         4.footer导航部分的显示与隐藏，可以通过在路由中配置meta属性。
         5.
         
         3.首页广告的设置
        4.filter过滤，格式化时间！！！
        
        遗留问题：
        1.王婷婷的页面滑动未实现
          在容器内部的子元素上，添加v-if导致better-scroll无法搜索到子元素，
          所以无法生成滑动效果。
        2.首页头部menus数据显示，如何考虑路由跳转 ???
            暂不考虑这个问题。
        3.路由跳转使用$router.back()存在问题？？？会跳转到第四个
        
##  day04
    今日任务：
        1.抽离一个组件header
        2.注册跳转页面
        3.切换站点页面
        4.前台验证 //可以使用老师的服务器 
            登录注册的逻辑需要验证什么？? 用户名：手机号（正则）
        5.购物车上数字显示
        品牌 全部；
        
        今天遇到的问题：
        1.动画效果的设置 使用vue的transition组件
        2.登录注册的验证还是有些混乱，未整理清除
        3.页面数据还未获取成功。
       
         
