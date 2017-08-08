import Vue from 'vue'
import Router from 'vue-router'
import ProjectItem from '@/components/ProjectItem'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/all'
    },
    {
      path: '/all',
      component: ProjectItem
    },
    {
      path: '/vue',
      component: ProjectItem
    },
    {
      path: '/angular',
      component: ProjectItem
    },
    {
      path: '/react',
      component: ProjectItem
    },
    {
      path: '/nodejs',
      component: ProjectItem
    },
    {
      path: '/app',
      component: ProjectItem
    },
    {
      path: '/other',
      component: ProjectItem
    },
    {
      path: '/*',
      redirect: '/all'
    }

  ]
})
