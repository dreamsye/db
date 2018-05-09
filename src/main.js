// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '../src/modules/rem'
import '../static/common/main.css'
import VueJsonp from 'vue-jsonp'

Vue.config.productionTip = false

import axios from 'axios'
Vue.prototype.$http = axios

import { InfiniteScroll } from 'mint-ui';
import { Toast } from 'mint-ui';

import store from './store'

Vue.use(InfiniteScroll);

Vue.use(VueJsonp)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
