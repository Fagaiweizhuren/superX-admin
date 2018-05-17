import Vue from 'vue'
import VueRouter from 'vue-router'
import iView from 'iview'
import { routers } from './router'
import Util from '@/libs/util'

Vue.use(VueRouter)

const routerConfig = {
  routes: routers,
  linkExactActiveClass: 'select',
  linkActiveClass: 'select'
}

export const router = new VueRouter(routerConfig)

router.beforeEach((to, from, next) => {
  // console.log(from)
  // console.log(to)
  iView.LoadingBar.start()

  Util.title(to.meta.title)
  next()

  iView.LoadingBar.finish()
})

router.afterEach( () => {
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
} )

export default router
