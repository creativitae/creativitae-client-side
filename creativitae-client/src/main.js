import { createApp, markRaw } from 'vue'
import { createPinia } from 'pinia'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import {
  HiEye,
  HiSolidEyeOff,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaEdit,
  FaRegularTrashAlt,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  HiLockClosed,
  BiPlusSquareFill,
  LaPlusSquare,
  LaMinusSquare
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)
const pinia = createPinia()

addIcons(
  HiEye,
  HiSolidEyeOff,
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaRegularTrashAlt,
  FaEdit,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
  HiLockClosed,
  BiPlusSquareFill,
  LaPlusSquare,
  LaMinusSquare
)
app.component('v-icon', OhVueIcon)
app.use(pinia)
app.use(router)

pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.mount('#app')
