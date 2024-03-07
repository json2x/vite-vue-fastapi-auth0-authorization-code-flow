import { createRouter, createWebHistory } from 'vue-router'
import { useAppStore } from '@/stores/MyAppStore'
import MainLayout from '@/layouts/MainLayout.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      component: MainLayout,
      children: [
        {
          path: '',
          name: 'home',
          component: HomeView
        },
        {
          path: '/about',
          name: 'about',
          component: () => import('@/views/AboutView.vue')
        },
        {
          path: '/protected',
          name: 'protected',
          component: () => import('@/views/ProtectedView.vue')
        },
        {
          path: '/unauthenticated',
          name: 'unauthenticated',
          component: () => import('@/views/UnauthenticatedView.vue')
        },
      ]
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/LoginView.vue')
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue')
    }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('@/views/AboutView.vue')
    // }
  ]
})

router.beforeEach(async (to, from) => {
  const appStore = useAppStore()

  if(!appStore.isLoggedIn && (to.name !== 'home' && to.name !== 'login' && to.name !== 'unauthenticated')) {
    return { name: 'unauthenticated' }
  }
})

export default router
