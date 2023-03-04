import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore('main', {
  state: () => {
    return {}
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
    }
  }
})
