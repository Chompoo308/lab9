import IndexViewVue from '@/views/IndexView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'IndexViewVue',
      component: IndexViewVue
    },
    {
      path: '/test',
      name: 'test',
      component: () => import('../views/testView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/doc',
      name: 'doc',
      component: () => import('../views/documentView.vue')
    }

  ]
})

export default router
