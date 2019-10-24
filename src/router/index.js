import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import pageList from '@/page/pageList'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/pageList',
      name: 'pageList',
      component: pageList
    }
  ]
})
