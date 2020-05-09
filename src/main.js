import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 加载全局样式
import './styles/index.less'
// 加载vant组件库
import Vant from 'vant'
// 加载vant组件库样式
import 'vant/lib/index.css'

// 全局注册vant中组件
Vue.use(Vant)
Vue.config.productionTip = false

// 创建 Vue 根实例   把router，store配置到根实例中
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
