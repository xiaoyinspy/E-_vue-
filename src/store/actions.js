
import {
  req_Categorys,
  req_Brand,
  req_Home,
  req_BrandList
} from './../api/index'

import {
  SAVE_CATEGORYS,
  SAVE_CATELIST,
  SAVE_BRAND,
  SAVE_HOME,
  SAVE_BRANDLIST
}from './mutations-type'


export default {
  async reCategorys({commit},callback) {
    const result =  await  req_Categorys()
    commit(SAVE_CATEGORYS,{categorys:result.data})
    callback && callback()
  },
  saveCateList ({commit},{cate_list},callback) {
    commit(SAVE_CATELIST,{cate_list})
    callback && callback()
  },
  async reBrand ({commit}) {
    const result = await req_Brand()
    commit(SAVE_BRAND,{brand:result.data})
  },
  async reHome ({commit},callback) {
    const result = await req_Home()
    commit(SAVE_HOME,{home:result.data})
    callback && callback()
  },
  async  reBrandList ({commit},callback) {
    const result = await  req_BrandList()
    commit(SAVE_BRANDLIST,{brand:result.data})
    callback && callback()
  },



}
