import Mock from 'mockjs'
import apiData from './categorys.json'
import home from './newHomePage.json'


Mock.mock('/categorys/class', {code:0 , data: apiData.categorys})
Mock.mock('/categorys/brand', {code:0 , data: apiData.brand})
Mock.mock('/home', {code:0 , data: home})
