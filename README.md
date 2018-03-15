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
       5.小狗眨眼动画效果  动画切换
       6.购物车，头部不能开启固定定位（还未解决）；显示与隐藏的动画效果实现有问题（还未解决）；
        购物车背景图片定位有问题
       7.boxing-size问题 box-sizing content-box 以及border-box
          div盒子宽度设置为100%之后，出现溢出的问题(不清楚原因)
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
                       >i
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

        
