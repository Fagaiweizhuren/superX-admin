// The Vue build version to load with the `import` command
// (runtime-omly or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import iView from 'iview'

import 'iview/dist/styles/iview.css'
import './styles/common.css'
import './styles/mixins/fonts/iconfont.css'
import 'perfect-scrollbar/css/perfect-scrollbar.css'
import './styles/test.less'

Vue.config.productionTip = false
Vue.use(iView)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App />',
  components: { App }
})
