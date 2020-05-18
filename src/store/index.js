import Vue from 'vue'
import Vuex from 'vuex'
import { getItem, setItem } from '@/utils/storage'

Vue.use(Vuex)

const USER_KEY = 'toutiao-user'

export default new Vuex.Store({
  state: {
    // 当前用户的登录状态（token等数据）

    // 封装前
    // user: JSON.parse(window.localStorage.getItem('user'))

    // 封装后
    user: getItem(USER_KEY)
  },
  mutations: {
    setUser (state, data) {
      state.user = data
      // 为了防止刷新页面数据丢失，还需进行本地存储，仅为了持久化数据

      // 封装前
      // window.localStorage.setItem('user', JSON.stringify(state.user))

      // 封装后
      setItem(USER_KEY, state.user)
    }
  },
  actions: {
  },
  modules: {
  }
})
