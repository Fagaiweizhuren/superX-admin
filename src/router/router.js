import guideMain from '@/views/guideMain'
import manageMain from '@/views/manageMain'

export const page500 = {
  path: '/500',
  name: 'error-500',
  meta: {
    title: '500-服务端错误'
  },
  component: resolve => { require(['@/views/errors/500.vue'], resolve) }
}

export const page403 = {
  path: '/403',
  name: 'error-403',
  meta: {
    title: '403-权限不足'
  },
  component: resolve => { require(['@/views/errors/403.vue'], resolve) }
}

export const page404 = {
  path: '/*',
  name: 'error-404',
  meta: {
    title: '404-页面不存在'
  },
  component: resolve => { require(['@/views/errors/404.vue'], resolve) }
}

export const guideRouter = {
  path: 'guide',
  name: 'guidePage',
  component: guideMain,
  children: [
    {
      path: 'cashier',
      name: 'cashier',
      component: resolve => { require(['@/views/guide-app/visualization/cashier.vue'], resolve) }
    },
    {
      path: 'authen-payment',
      name: 'authenPayment',
      component: resolve => { require(['@/views/guide-app/visualization/authenPayment.vue'], resolve) }
    },
    {
      path: 'internet-cash',
      name: 'internetCash',
      component: resolve => { require(['@/views/guide-app/visualization/internetCash.vue'], resolve) }
    },
    {
      path: 'entrust-payment',
      name: 'entrustPayment',
      component: resolve => { require(['@/views/guide-app/visualization/entrustPayment.vue'], resolve) }
    },
    {
      path: 'api-product',
      name: 'apiProduct',
      component: resolve => { require(['@/views/guide-app/apiProduct.vue'], resolve) }
    },
    {
      path: 'add-service',
      name: 'addService',
      component: resolve => { require(['@/views/guide-app/addService.vue'], resolve) }
    },
    {
      path: 'open-product',
      name: 'openProduct',
      component: resolve => { require(['@/views/guide-app/openProduct.vue'], resolve) }
    }
  ]
}

export const manageRouter = {
  path: 'manage',
  name: 'managePage',
  component: manageMain,
  children: [
    {
      path: 'my-product',
      name: 'myProduct',
      component: resolve => { require(['@/views/manage-app/myProduct.vue'], resolve) }
    },
    {
      path: 'examine-progress',
      name: 'examineProgress',
      component: resolve => { require(['@/views/manage-app/examineProgress.vue'], resolve) }
    }
  ]
}

export const mainRouter = {
  path: '/home',
  name: 'homePage',
  component: resolve => { require(['@/views/Home.vue'], resolve) },
  children: [
    guideRouter,
    manageRouter
  ]
}
export const rootRouter = {
  path: '/',
  redirect: { name: 'homePage' }
}
const guideIndexRouter = {
  path: '/home/guide',
  redirect: { name: 'cashier' }
}
const manageIndexRouter = {
  path: '/home/manage',
  redirect: { name: 'myProduct' }
}
const homeIndexRouter = {
  path: '/home',
  redirect: { name: 'guidePage' }
}

export const routers = [
  rootRouter,
  mainRouter,
  homeIndexRouter,
  guideIndexRouter,
  manageIndexRouter,
  page500,
  page403,
  page404
]
