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
  HiLockClosed
} from 'oh-vue-icons/icons'

import App from './App.vue'
import router from './router'

import './assets/main.css'
import vue3GoogleLogin from 'vue3-google-login'

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
  HiLockClosed
)
app.component('v-icon', OhVueIcon)
app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId:
    '679664805458-9sakpl3kp7q9oq38dj5v70aqn3ikclpq.apps.googleusercontent.com',
});
pinia.use(({ store }) => {
  store.router = markRaw(router)
})

app.mount('#app')
