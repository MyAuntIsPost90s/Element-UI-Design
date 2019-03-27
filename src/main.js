// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'element-ui/lib/theme-chalk/index.css'
import '../static/common/css/layout.css'

import Vue from 'vue'
import ElementUI from 'element-ui'
import App from './App'
import router from './router'
import Util from '../static/common/js/util'
import Filter from '../static/common/js/filter'
import Authority from '../static/common/js/authority';

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.gateway = Util.Gateway
Vue.prototype.formValid = Util.FormValid
Vue.prototype.authority = Authority

Filter.install()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
})
