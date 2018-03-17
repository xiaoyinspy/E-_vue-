<template>
  <div class="profile">
    <div class="header">
      <div class="personal-bico3" @click="goback"></div>
      <div class="login">注册</div>
    </div>
    <div class="login_item">
      <div class="tab_item" :class="{on:isSeleced }" @click="tabSwitch(true)">
        <span>普通登录</span>
        <i></i>
      </div>
      <div class="tab_item" :class="{on:!isSeleced }" @click="tabSwitch(false)" >
        <span>手机动态密码登陆</span>
        <i></i>
      </div>
    </div>
    <div class="login_content1" v-if="isSeleced" >
      <ul class="login_msg">
        <li class="msg1">
            <span class="person"></span>
            <input type="text"  maxlength="11" placeholder="手机号/邮箱/用户名" v-model="username">
         </li>
        <li class="msg2">
          <span class="password"></span>
          <input type="text" minlength="6" maxlength="18" placeholder="输入密码" v-model="password">
        </li>
      </ul>
      <div class="forget_msg"><span>忘记密码 ? </span></div>
  </div>
    <div class="login_content1"  v-if="!isSeleced">
      <ul class="login_msg">
        <li class="msg1">
          <span class="phone"></span>
          <input  maxlength="11" :class="{right_phone_number: rightPhoneNumber}"
                  type="text" placeholder="已注册的手机号" v-model="phone">
        </li>
        <li class="msg1">
          <span class="password"></span>
          <input type="text" maxlength="11" placeholder="请输入图片内容"  v-model="code">
          <span class="img"><img src="./login/seccode.jpg"></span>
        </li>
        <li class="msg2">
          <span class="password"></span>
          <input type="text" placeholder="动态密码" v-model="activePassword"
                 ref="captcha" @click="getCaptchaCode">
          <div class="recode"@click.prevent="getVerifyCode">获取动态验证码</div>
        </li>
      </ul>
      <div class="forget_msg"><span>忘记密码 ? </span></div>
    </div>
    <div class="login_button">登&nbsp;&nbsp;&nbsp;&nbsp;录</div>
    <div class="login_text">合作网站登录</div>
    <div class="login_icon">
      <span class="icon"><img src="./login/login_ico4.png"></span>
      <span class="icon"><img src="./login/login_ico2.png"></span>
    </div>
    <alert-tip  v-if="showAlert"
                @closeTip="closeTip"
                :alertText="alertText"
            />
  </div>
</template>
<script>
  import AlertTip from '../../components/AlertTip/AlertTip.vue'
  import {mapActins} from 'vuex'
  import PubSub  from 'pubsub-js'
  import {reqCaptchas,pwdLogin,sendCode,smsLogin,reqUser} from '../../api/index'
    export default {
        methods:{
          goback(){
            //PubSub.publish('toggleShow2')
            this.$router.back()
          },
          tabSwitch(value) {
              this.isSeleced =value
          },
//         async login (){
//            let result
//           const  {isSeleced} = this
//              if(isSeleced){
//                const  {username, password } = this
//                  //true ,表示普通登录
//              if(!username){
//                    this.showAlert =true
//                    this.alertText = '请输入手机号'
//              }else(!(/^\d{6}$/gi.test(password))){
//                  this.showAlert = true
//                  this.alertText = '密码格式错误'
//            }
//                result = await
//
//          }
//          },
          // 获取图形验证码
          getCaptchaCode() {
            this.$refs.captcha.src = 'http://localhost:3000/captcha?time='+new Date()
          },
          //获取短信验证码
          async getVerifyCode(){
              if(this.rightPhoneNumber){
                //发送短信验证码
                let result = await sendCode(this.phone)
                if(result.code === 1){
                    alert('登陆成功！！')
                }
              }
          },
          //关系提示框
          closeTip(){
            this.showAlert = false
          }

        },
        data () {
            return{
              isSeleced: true ,//默认true ,表示普通登录； false,表示手机动态密码登录
              username: '', //用户名
              password: '', //用户密码

              phone: '', //手机号
              code: '', //图片验证码
              activePassword: '',//动态验证码
              showAlert: false, //显示提示组件
              alertText: null, //提示的内容
            }
        },
        computed :{
          rightPhoneNumber (){
            return  /^1\d{10}$/.test(this.phone)
          }
        },
      components: {
            AlertTip
      }
    }

</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import '../../common/stylus/index.styl'
  @import '../../common/stylus/mixin.styl'
#app
  background-color #F5F5F5
  .profile
    background-image url("./login/d6aa601c1a4b5789b776f18261a960f6.png")
    background-size 100%
    background-repeat no-repeat
    background-color white
    .header
      width 100%
      height 50px
      line-height 50px
      text-align center
      padding  0 10px
      font-size 18px
      .personal-bico3
        float left
        width 30px
        height 30px
        background-image url("./login/personal-bico3.png")
        background-size 50%
        background-repeat no-repeat
        margin-top 15px
        margin-left 10px
      .login
        float right
        width 80px
        color white
    .login_item
      margin-top 60px
      background-color rgba(256,256,256,0.2)
      height 45px
      line-height 45px
      color white
      font-weight 300
      .tab_item
        float left
        width 50%
        height 100%
        text-align center
        position relative
        &.on
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
    .login_content1
      width 100%
      background-color white
      .login_msg
        margin 0 15px 10px
        padding 0 6px
        .msg1,.msg2
          color $gray
          bottom-border-1px($gray)
          padding 12px 0 12px 30px
          position relative
          >input
            outline none
            color $gray
            &.right_phone_number
              color #000
          >span
            float: left
            display: inline
            width: 17px
            height: 21px
            margin: 1px 0 0 -25px
            &.person
              background: url('./login/ico3.png') no-repeat
              background-size: contain
            &.phone
              background: url('./login/ico1.png') no-repeat
              background-size: contain
            &.password
              background: url('./login/ico4.png') no-repeat
              background-size: contain
          .img
            position absolute
            top 5px
            right 0
            width 80px
            height 35px
            display inline-block
          .recode
            width 100px
            height 30px
            border solid 1px red
            border-radius 4px
            color red
            font-size 13px
            text-align center
            line-height 30px
            float right
            margin-top -5px
      .forget_msg
        height 20px
        box-sizing content-box
        padding   0 20px
        display flex
        flex-direction row-reverse
    .login_button
      padding-top 5px
      margin 0 4%
      background-color $green
      color white
      height 40px
      line-height 40px
      text-align center
      border-radius 5px
    .login_text
      margin-top 108px
      height 20px
      line-height 20px
      text-align center
      font-size 15px
      color $gray
    .login_icon
      display flex
      padding 15px 0
      .icon
        width 60px
        height 60px
        margin 0 20px
        >img
          width 100%
          height 100%
</style>
