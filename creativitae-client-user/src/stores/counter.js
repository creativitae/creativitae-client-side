import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000'

export const useCounterStore = defineStore('counter', {
  state: () => {
    return {
      loggedIn: false,
      LinkedinUser: false,
      emailLinkedin : {}

    }
  },
  getters: {

  },
  actions: {
    async doLogin(formData) {
      try {
        let { data } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/login`,
          data: formData
        })
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Login Successful!',
          showConfirmButton: false,
          timer: 1500
        })
        localStorage.setItem('access_token', data.access_token)
        this.loggedIn = true
        this.router.push('/')

      } catch (err) {
        console.log(err);

      }
    },

    async doLinkedinLogin() {
      try {
        console.log('ini masuk dolinkedinlogin');
        let { data } = await axios({
          method: 'get',
          url: `${BASE_URL}/users/linkedin-request-auth`,
        })
        console.log(data.url)
        window.open(data.url, '_blank')
      } catch (err) {
        console.log(err);

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
        console.log(err);

      }
    },

    async LinkedinGetEmail(code) {
      console.log(code, 'ini code');
      try {
        let { data2 } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/getemail`,
          data: {
            code
          }
        })
        this.emailLinkedin = data2
        console.log(this.emailLinkedin, 'ini email');
      } catch (error) {
        console.log(error);
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
        let { data:data2 } = await axios({
          method: 'post',
          url: `${BASE_URL}/users/getemail`,
          data: {
            code
          }
        })
        console.log(data2, 'ini data2');
        let payload = {
          username: data.username,
          email: data2.email,
        }
        // console.log(data2, data, 'ini mau login');
        await this.LinkedinFinalAuth(payload)
      } catch (err) {
        console.log(err);

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
        console.log(err);

      }
    },
  }
})
