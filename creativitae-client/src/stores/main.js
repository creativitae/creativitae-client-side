import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => {
    return {
      payment: {}
    }
  },

  getters: {},

  actions: {
    async doRegister(formData) {
      try {
        console.log(formData)
      } catch (err) {}
    },

    async doLogin(formData) {
      try {
        console.log(formData)
      } catch (err) {}
    },

    async xenditPayment() {
      try {
        const data = await axios({
          method: 'POST',
          url: `http://localhost:4000/xendit` // TODO - THIS SHOULD BE WIRED TO SERVER
        })
        this.payment = data
        // this.statusTemplate()
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }
})
