import Mock from 'mockjs'
import apiData from './categorys.json'
import home from './newHomePage.json'
import brandList from './brandList.json'


Mock.mock('/categorys/class', {code:0 , data: apiData.categorys})
Mock.mock('/categorys/brand', {code:0 , data: apiData.brand})
Mock.mock('/home', {code:0 , data: home})
Mock.mock('/categorys/all',{code:0 , data: brandList.brand})
