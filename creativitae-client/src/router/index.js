import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../pages/LandingPage.vue'
import DashboardPage from '../pages/DashboardPage.vue'
import TemplatePage from '../pages/TemplatePage.vue'
import LoginPage from '../pages/LoginPage.vue'
import RegisterPage from '../pages/RegisterPage.vue'
import GetPremium from '../pages/GetPremiumPage.vue'
import Callbacks from '../components/Callback.vue'
import LoginLinkedin from '../components/LoginLinkedIn.vue'
import CreateCvPage from '../pages/CreateCvPage.vue'
import UploadImg from '../components/UploadImg.vue'
import AboutPage from '../pages/AboutPage.vue'
import DetailCVPage from '../pages/DetailCVPage.vue'

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
    },
    {
      path: '/create-cv/:templateId',
      component: CreateCvPage
    },
    {
      path: '/uploadImg',
      component: UploadImg
    },
    {
      path: '/about',
      component: AboutPage
    },
    {
      path: '/detail',
      name: 'detailCV',
      component: DetailCVPage
    }
  ]
})

router.beforeEach((to, from, next) => {
  const loggedIn = !!localStorage.access_token
  if (loggedIn && to.path === '/login') {
    next('/')
  }
  if (loggedIn && to.path === '/register') {
    next('/')
  } else if (!loggedIn && to.path === '/dashboard') {
    next('/login')
  } else if (!loggedIn && to.path === '/getPremium') {
    next('/login')
  } else {
    next()
  }
})

export default router
