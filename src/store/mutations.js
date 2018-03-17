
import {
  SAVE_CATEGORYS,
  SAVE_CATELIST,
  SAVE_BRAND,
  SAVE_HOME,
  SAVE_BRANDLIST
}from './mutations-type'

export default {
    [SAVE_CATEGORYS] (state, {categorys}){
      state.categorys = categorys
    },
    [SAVE_CATELIST] (state,{cate_list}) {
      state.cateList = cate_list
    },
    [SAVE_BRAND] (state,{brand}){
      state.brand = brand
    },
    [SAVE_HOME] (state,{home}){
      state.home = home
    },
    [SAVE_BRANDLIST] (state,{brand}){
      state.brandlist = brand
    }
}
