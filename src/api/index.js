
import ajax from './ajax'

export const req_Categorys = () => ajax('/categorys/class')

export const req_Brand = () => ajax('/categorys/brand')

export const req_Home = () => ajax('/home')

export const req_BrandList = () => ajax('/categorys/all')

/**
 * 获取图片验证码
 */
export const reqCaptchas = () => ajax('/api/captcha')

/**
 * 账号密码登录
 */
export const pwdLogin = (name, pwd, captcha) => ajax('/api/login_pwd', {
  name,
  pwd,
  captcha
}, 'POST')

/**
 * 发送短信验证码
 */
export const sendCode = phone => ajax('/api/sendcode', {phone})

/**
 * 手机号验证码登录
 */
export const smsLogin = (phone, code) => ajax('/api/login_sms', {phone, code}, 'POST')

/**
 * 获取用户信息(根据会话)
 */
export const reqUser = () => ajax('/api/userinfo')
