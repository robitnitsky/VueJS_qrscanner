import Vue from 'vue'
import store from '@/store'
import Router from 'vue-router'
import Start from '@/components/Start'
import Scan from '@/components/Scan'
import Result from '@/components/Result'
import Login from '@/components/Login'

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'Start',
      component: Start
    },
    {
      path: '/scan',
      name: 'Scan',
      component: Scan,
      meta: {
        authorized: true
      },
      alias: '/'
    },
    {
      path: '/result',
      name: 'Result',
      component: Result,
      meta: {
        authorized: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '*',
      component: Start,
      redirect: '/'
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (typeof to.meta.authorized === 'undefined') {
    return next()
  }

  const isAuth = store.getters['auth/isLoggedIn']

  if (to.meta.authorized && !isAuth) {
    return next({
      name: 'Login'
    })
  }

  return next()
})

export default router
