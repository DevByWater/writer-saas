import Vue from 'vue'
import Router from 'vue-router'

import EditorComponent from '../components/EditorPage/EditorComponent.vue'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '/editor',
      name: 'editor',
      component: EditorComponent
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
