import Vue from 'vue'
import Router from 'vue-router'
import Start from '@/components/Start'
import Scan from '@/components/Scan'
import Result from '@/components/Result'
import Login from '@/components/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan
    },
    {
      path: '/result',
      name: 'Result',
      component: Result
    },
    {
      path: '/result', redirect: '/scan'
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
