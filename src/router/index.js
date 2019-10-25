import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import pageList from '@/page/pageList'
import details from '@/page/details'
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
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
