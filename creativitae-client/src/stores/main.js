import { defineStore } from 'pinia'
import axios from 'axios'
import Swal from 'sweetalert2'
const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  iconColor: 'white',
  customClass: {
    popup: 'colored-toast'
  },
  showConfirmButton: false,
  timer: 1500,
  timerProgressBar: true
})

const BASE_URL = 'http://localhost:3000'
// const BASE_URL = `https://5790-139-228-111-126.ap.ngrok.io`

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      payment: {},
      loggedIn: false,
      LinkedinUser: false,
      emailLinkedin: {},
      templates: [],
      userPremium: {},
      isPremium: localStorage.getItem("isPremium")
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
        await Toast.fire({
          icon: 'success',
          text: `You can login now!`,
          titleText: 'Register Success'
        })
        this.router.push('/login')
      } catch (err) {
        console.log(err)
        await Toast.fire({
          icon: 'error',
          titleText: 'Oops!',
          text: err.response.data.message
        })
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
        localStorage.setItem('isPremium', data.isPremium)
        localStorage.setItem('email', data.email)
        localStorage.setItem('username', data.username)
        console.log(data);
        this.loggedIn = true
        this.router.push('/')
        await Toast.fire({
          icon: 'success',
          text: `Welcome ${data.username}!!`,
          titleText: 'Success Login'
        })
      } catch (err) {
        await Toast.fire({
          icon: 'error',
          titleText: 'Oops!',
          text: err.response.data.message
        })
      }
    },

    async doLogout() {
      try {
        localStorage.removeItem("access_token")
        localStorage.removeItem("isPremium")
        localStorage.removeItem("email")
        localStorage.removeItem("username")
        this.loggedIn = false
        this.router.push('/')
        await Toast.fire({
          icon: 'success',
          text: `Good Bye`,
          titleText: 'Success Logout'
        })
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
          url: `${BASE_URL}/payment`, // TODO - THIS SHOULD BE WIRED TO SERVER
          headers: {
            access_token: localStorage.getItem('access_token')
          }
        })
        this.payment = data
        localStorage.setItem("isPremium", true)
        // this.isPremium = localStorage.getItem("isPremium")
        console.log(data);
      } catch (error) {
        console.log(error.response.data)
      }
    },

    async fetchTemplates() {
      try {
        let { data } = await axios({
          method: 'GET',
          url: `${BASE_URL}/templates`,
          // TODO - HAPUS PAS KE PRODUCTION
          headers: {
            'ngrok-skip-browser-warning': 'any'
          }
        })
        console.log(data);

        this.templates = data
      } catch (err) {
        console.log(err)
      }
    },

    async singleImage() {
      try {
        let input = event.target;
        console.log(input.files, "<<<<<< single image");
        if (input.files) {
          let reader = new FileReader();
          reader.onload = (e) => {
            this.preview = e.target.result;
          }
          this.image=input.files[0];
          reader.readAsDataURL(input.files[0]);
        }
        this.fileName = input.files
      } catch (error) {
        console.log(error);
      }
    },

    async multipleImage() {
      'masuk'
      try {
        // console.log('masuk');
        let input = event.target;
        console.log(input.files, "<<<<<tanda");
        let count = input.files.length;
        let index = 0;
        if (input.files) {
          while(count --) {
            let reader = new FileReader();
            reader.onload = (e) => {
              this.preview_list.push(e.target.result);
            }
            this.image_list.push(input.files[index]);
            reader.readAsDataURL(input.files[index]);
            index ++;
          }
        }
        console.log(this.preview_list, this.image_list, "<<<<<<<<masukk");
      } catch (error) {
        console.log(error);
      }
    },

    async getServer(img){
      try {
        console.log(img[0], 'masuk 2');
        let bodyFormData = new FormData()
        bodyFormData.append('image', img[0])
        let data = await axios({
          method: 'POST',
          url: 'http://localhost:3000/templates/upload-images',
          data: bodyFormData,
          headers: {"Content-Type": "multipart/form-data"}
        })
        console.log(data, "<<<< ini data");
      } catch (error) {
        console.log(error);
      }
    }
  }
})
