import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TemplatePage from '../pages/TemplatePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import GetPremium from '../pages/GetPremiumPage.vue'
import Callbacks from '../components/Callback.vue'
import LoginLinkedin from '../components/LoginLinkedIn.vue'

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
      path: '/register',
      component: RegisterPage
    },
    {
      path: '/dashboard',
      component: DashboardPage
    },
    {
      path: '/templates',
      component: TemplatePage
    },
    {
      path: '/getPremium',
      component: GetPremium
    },
    {
      path: '/callbacks',
      component: Callbacks
    },
    {
      path: '/login-linkedin',
      component: LoginLinkedin
    }
  ]
})

export default router
