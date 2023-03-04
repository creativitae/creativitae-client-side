import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TemplatePage from '../pages/TemplatePage.vue'
import LoginPage from '../pages/LoginPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: LandingPage
    },
    {
      path: '/login',
      component: LoginPage
    },
    {
      path: '/dashboard',
      component: DashboardPage
    },
    {
      path: '/templates',
      component: TemplatePage
    }
  ]
})

export default router
