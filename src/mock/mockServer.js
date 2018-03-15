import Mock from 'mockjs'
import apiData from './data.json'

Mock.mock('/categorys/class', {code:0 , data:apiData.categorys})
