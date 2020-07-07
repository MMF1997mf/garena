import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Animation from '@/view/anmicition'
import Demo from '@/view/demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/index',
      name: 'Animation',
      component: Animation
    },
    {
      path: '/demo',
      name: 'Demo',
      component: Demo
    }
  ]
})
