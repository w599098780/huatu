import Vue from 'vue'
import Router from 'vue-router'
import index from '@/page/index'
import pageList from '@/page/pageList'
import details from '@/page/details'
import paper from '@/page/paper'
import test from '@/page/test'
import report from '@/page/report'
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
    },
    {
      path: '/paper',
      name: 'paper',
      component: paper
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/report',
      name: 'report',
      component: report
    }
  ]
})
