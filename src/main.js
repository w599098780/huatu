// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible'

import '@/css/comStyle.scss'
import '@/font/iconfont.css'
import attachFastClick from 'fastclick';
import { $fetch, $post, $put, $del} from './http'

Vue.config.productionTip = false
//全局注册请求方法
Vue.prototype.$fetch = $fetch
Vue.prototype.$post = $post
Vue.prototype.$put = $put
Vue.prototype.$del = $del
// fastClick
attachFastClick.attach(document.body);
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.use(ElementUI);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
