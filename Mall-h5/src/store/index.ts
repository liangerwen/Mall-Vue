import { createStore } from 'vuex'
import * as actions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

export enum OrderBy {
  //综合
  synthesis = 0,
  //价格
  price,
  //好评
  praise,
  //销售量
  sale,
  //时间
  time,
  //地区
  area
}

export interface IState {
  userInfo: any
  marketing: any
  seckills: any
  goodsList: any[]
  shoppingCart: any
  newShoppingCart: any
  recommend: any
  category: any[]
  address: any[]
}

export default createStore<IState>({
  state: {
    userInfo: {
      // 用户信息
      username: ''
    },
    marketing: {
      // 营销
      CarouselItems: [], // 轮播图
      activity: [] // 活动
    },
    seckills: {
      // 秒杀
      deadline: {
        hours: 0,
        minute: 0,
        seconds: 0
      },
      goodsList: []
    },
    goodsList: [], // 商品列表
    shoppingCart: [], // 购物车
    newShoppingCart: [], // 刚加入的购物车，作为展示
    recommend: [], // 推荐购买
    category: [],
    address: []
  },
  getters,
  actions,
  mutations
})
