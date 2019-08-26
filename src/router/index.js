import Vue from 'vue'
import Router from 'vue-router'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [
    {
      name: 'login',
      path: '/login',
      component: login
    }
  ]
})
