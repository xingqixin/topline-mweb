import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'

// less 的引入要在vant之后
import './styles/index.less'
import VeeValidate, { Validator } from 'vee-validate'
import zhCN from 'vee-validate/dist/locale/zh_CN'
Vue.use(Vant)

Vue.use(VeeValidate, {
  events: '' // 禁用事件触发验证,只能是
})
Validator.localize('zh_CN', zhCN)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
