import { createRouter, createWebHashHistory } from 'vue-router'

const defaultRouterList = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../pages/home.vue'),
  },
  {
    path: '/demo',
    name: 'demo',
    component: () => import('../pages/demo.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes: defaultRouterList,
  scrollBehavior() {
    return {
      el: '#app',
      top: 0,
      behavior: 'smooth',
    }
  },
})

export default router
