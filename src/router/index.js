import Vue from 'vue'
import Router from 'vue-router'
import Entry from '@/components/Entry'
import Index from '@/components/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Entry',
      component: Entry
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    }
  ]
})
