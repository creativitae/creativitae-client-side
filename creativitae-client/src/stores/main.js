import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-right',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

const BASE_URL = 'http://localhost:3000'
const BASE_NGROK = `https://f11f-139-228-111-126.ap.ngrok.io`

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      payment: {},
      loggedIn: false,
      LinkedinUser: false,
      emailLinkedin: {},
      templates: []
    }
  },

  getters: {},

  actions: {
    async doRegister(formData) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/public/register`,
          data: formData
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err)
      }
    },

    async doLogin(formData) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/public/login`,
          data: formData
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')
        await Toast.fire({
          icon: 'success',
          title: 'welcome back',
          text: 'Success Login'
        })
      } catch (err) {
        console.log(err)
      }
    },

    async doLogout() {
      try {
        localStorage.removeItem("access_token")
        this.loggedIn = false
      } catch (error) {
        console.log(error);
      }
    },

    async doLinkedinLogin() {
      try {
        console.log('ini masuk dolinkedinlogin')
        let { data } = await axios({
          method: 'get',
          url: `${BASE_URL}/users/linkedin-request-auth`
        })
        window.open(data.url, '_blank')
      } catch (err) {
        console.log(err)
      }
    },

    async doLinkedinAuth(code) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/linkedin-user-auth`,
          data: {
            code
          }
        })
        let LinkedinToken = data.data.access_token
        localStorage.setItem('Linkedin_token', LinkedinToken)
        this.LinkedinGetMe(LinkedinToken)
      } catch (err) {
        console.log(err)
      }
    },

    async LinkedinGetEmail(code) {
      console.log(code, 'ini code')
      try {
        let { data2 } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/getemail`,
          data: {
            code
          }
        })
        this.emailLinkedin = data2
        console.log(this.emailLinkedin, 'ini email')
      } catch (error) {
        console.log(error)
      }
    },

    async LinkedinGetMe(code) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/me`,
          data: {
            code
          }
        })
        let { data: data2 } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/getemail`,
          data: {
            code
          }
        })
        console.log(data2, 'ini data2')
        let payload = {
          username: data.username,
          email: data2.email
        }
        // console.log(data2, data, 'ini mau login');
        await this.LinkedinFinalAuth(payload)
      } catch (err) {
        console.log(err)
      }
    },
    async LinkedinFinalAuth(payload) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/loginOrRegister`,
          data: {
            payload
          }
        })

        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.LinkedinUser = true
        this.router.push('/')
      } catch (err) {
        console.log(err)
      }
    },

    async xenditPayment() {
      try {
        const data = await axios({
          method: 'POST',
          url: `${BASE_URL}/xendit` // TODO - THIS SHOULD BE WIRED TO SERVER
        })
        this.payment = data
        // this.statusTemplate()
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async fetchTemplates() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${BASE_NGROK}/templates`,
          // TODO - HAPUS PAS KE PRODUCTION
          headers: {
            'ngrok-skip-browser-warning': 'any'
          }
        })

        this.templates = data
      } catch (err) {
        console.log(err)
      }
    }
  }
})
