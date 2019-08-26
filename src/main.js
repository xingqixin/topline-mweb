import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入vant
import Vant from 'vant'
import 'vant/lib/index.css'
// less 的引入要在vant之后
import './styles/index.less'
// 使用表单验证
// import VeeValidate from 'vee-validate'

Vue.use(Vant)
// Vue.use(VeeValidate)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
