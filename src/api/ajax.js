import axios from 'axios'

export default function ajax(url = '', data = {}, type = 'GET') {

  return new Promise(function (resolve, reject) {
    // 执行异步代码(发ajax请求)
    // 如果成功了, 调用resolve(data)
    // 如果失败了, 调用reject(error)

    let promise

    if (type === 'GET') {
      // 准备url query参数数据
      let dataStr = '' //数据拼接字符串
      Object.keys(data).forEach(key => {
        dataStr += key + '=' + data[key] + '&'
      })
      if (dataStr !== '') {
        dataStr = dataStr.substr(0, dataStr.lastIndexOf('&'))
        url = url + '?' + dataStr
      }
      // 发送get请求
      promise = axios.get(url)
    } else {
      // 发送post请求
      promise = axios.post(url, data)
    }

    promise
      .then(response => { // ajax请求成功
        resolve(response.data)
      })
      .catch(error => { // ajax请求失败
        reject(error)
      })
  })
}
