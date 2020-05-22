import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/sample',
  //   name: 'Sample',
  //   // route level code-splitting
  //   // this generates a separate chunk (sample.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "sample" */ '../views/sample.vue')
  // }
]

const router = new VueRouter({
  routes
})

export default router
