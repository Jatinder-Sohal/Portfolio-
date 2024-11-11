import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/currentProject',
      name: 'current Project',
      component: () => import('../views/CurrentProjView.vue'),
    },
    {
      path: '/allProjects',
      name: 'all projects',
      component: () => import('../views/AllProj.vue'),
    },
    {
      path: '/education&experiance',
      name: 'education and experiance',
      component: () => import('../views/Education.vue'),
    },
    {
      path: '/skills',
      name: 'skills',
      component: () => import('../views/Skills.vue'),
    },
  ],
})

export default router
