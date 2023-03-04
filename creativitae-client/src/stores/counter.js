import { defineStore } from 'pinia'
import axios from 'axios'

export const useAppStore = defineStore('app', {
  state: () => ({
    payment: {}
  }),

  getters: {},
  actions: {
    async xenditPayment() {
      try {
        const data = await axios({
          method: 'POST',
          url: `http://localhost:4000/xendit`
        })
        this.payment = data
        // this.statusTemplate()
      } catch (error) {
        console.log(error.response.data)
      }
    }
  }
})
