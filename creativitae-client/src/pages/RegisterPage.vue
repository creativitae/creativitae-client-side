<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  data() {
    return {
      formData: {
        username: '',
        email: '',
        password: '',
        address: '',
        phoneNumber: ''
      },
      showPassword: false
    }
  },
  methods: {
    ...mapActions(useMainStore, ['doRegister']),
    register(formData) {
      this.doRegister(formData)
    },
    toggle() {
      this.showPassword = this.showPassword ? false : true;
    },


  }
}
</script>
<template>
  <div class="bg-theme-red bottom-0 leading-5 h-full w-full overflow-hidden">

  </div>
  <div class="relative  min-h-screen  sm:flex sm:flex-row  justify-center bg-transparent rounded-3xl shadow-xl p-4">
    <!-- REGISTER FORM -->
    <div class="flex justify-center self-center z-10">
      <div class="px-12 py-6 bg-white mx-auto rounded-3xl w-[36rem] drop-shadow-2xl ">
        <div class="mb-7">
          <h3 class="font-semibold text-2xl mb-2 text-theme-red ">Sign Up</h3>
          <h3 class=" text-[1rem] text-gray-800 mb-2">Create a new CreatiVitae account.</h3>
        </div>
        <div class="space-y-6">
          <form @submit.prevent="doRegister(formData)" class="space-y-6">

            <!-- USERNAME -->
            <div class="">
              <input v-model="formData.username"
                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-theme-red"
                type="text" placeholder="Username">
            </div>

            <!-- EMAIL -->
            <div class="">
              <input v-model="formData.email"
                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-theme-red"
                type="email" placeholder="Email">
            </div>

            <!-- PASSWORD -->
            <div class="relative" x-data="{ show: true }">
              <input v-model="formData.password" placeholder="Password" :type="!showPassword ? 'password' : 'text'"
                autocomplete="off"
                class="text-sm px-4 py-3 rounded-lg w-full bg-gray-200 focus:bg-gray-100 border border-gray-200 focus:outline-none focus:border-theme-red">
              <div class="flex items-center absolute inset-y-0 right-0 mr-3  text-sm leading-5">
              </div>
              <div @click="toggle" v-if="!showPassword"
                class="show-pw flex justify-start items-center gap-2 mt-2 cursor-pointer">
                <v-icon name="hi-eye" scale="1.2" fill="#e33427" />
                <p class=" text-theme-red text-[0.9rem]">Show password</p>
              </div>
              <div @click="toggle" v-if="showPassword"
                class="show-pw flex justify-start items-center gap-2 mt-2 cursor-pointer">
                <v-icon name="hi-solid-eye-off" scale="1.2" fill="#e33427" />
                <p class="text-theme-red text-[0.9rem]">Hide password</p>
              </div>
            </div>

            <!-- ADDRESS -->
            <div class="">
              <input v-model="formData.address"
                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-theme-red"
                type="text" placeholder="Address">
            </div>

            <!-- PHONE NUMBER -->
            <div class="">
              <input v-model="formData.phoneNumber"
                class=" w-full text-sm  px-4 py-3 bg-gray-200 focus:bg-gray-100 border  border-gray-200 rounded-lg focus:outline-none focus:border-theme-red"
                type="text" placeholder="Phone Number">
            </div>

            <div>
              <button type="submit"
                class="w-full flex justify-center bg-theme-red  hover:bg-red-400 text-gray-100 p-3 rounded-lg tracking-wide font-semibold  cursor-pointer transition ease-in duration-[50]">
                Sign Up
              </button>
            </div>
          </form>


          <div class="flex items-center justify-center space-x-2 my-5">
            <span class="h-px w-16 bg-gray-100"></span>
            <span class="text-gray-300 font-normal">or</span>
            <span class="h-px w-16 bg-gray-100"></span>
          </div>
          <div class="flex justify-center gap-5 w-full ">

            <button type="submit"
              class="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-theme-red hover:bg-theme-red hover:text-white text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-[50]">
              <svg class="w-4 mr-2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path fill="#EA4335"
                  d="M5.266 9.765A7.077 7.077 0 0 1 12 4.909c1.69 0 3.218.6 4.418 1.582L19.91 3C17.782 1.145 15.055 0 12 0 7.27 0 3.198 2.698 1.24 6.65l4.026 3.115Z" />
                <path fill="#34A853"
                  d="M16.04 18.013c-1.09.703-2.474 1.078-4.04 1.078a7.077 7.077 0 0 1-6.723-4.823l-4.04 3.067A11.965 11.965 0 0 0 12 24c2.933 0 5.735-1.043 7.834-3l-3.793-2.987Z" />
                <path fill="#4A90E2"
                  d="M19.834 21c2.195-2.048 3.62-5.096 3.62-9 0-.71-.109-1.473-.272-2.182H12v4.637h6.436c-.317 1.559-1.17 2.766-2.395 3.558L19.834 21Z" />
                <path fill="#FBBC05"
                  d="M5.277 14.268A7.12 7.12 0 0 1 4.909 12c0-.782.125-1.533.357-2.235L1.24 6.65A11.934 11.934 0 0 0 0 12c0 1.92.445 3.73 1.237 5.335l4.04-3.067Z" />
              </svg>
              <!-- <svg class="w-4" fill="#fff" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11.99 13.9v-3.72h9.36c.14.63.25 1.22.25 2.05 0 5.71-3.83 9.77-9.6 9.77-5.52 0-10-4.48-10-10S6.48 2 12 2c2.7 0 4.96.99 6.69 2.61l-2.84 2.76c-.72-.68-1.98-1.48-3.85-1.48-3.31 0-6.01 2.75-6.01 6.12s2.7 6.12 6.01 6.12c3.83 0 5.24-2.65 5.5-4.22h-5.51v-.01Z"></path></svg> -->
              <span>Google</span>
            </button>

            <button type="submit"
              class="w-full flex items-center justify-center mb-6 md:mb-0 border border-gray-300 hover:border-theme-red hover:bg-theme-red hover:text-white text-sm text-gray-500 p-3  rounded-lg tracking-wide font-medium  cursor-pointer transition ease-in duration-[50]">
              <svg class="w-4 mr-2" viewBox="0 0 100 100" style="enable-background:new 0 0 100 100" xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg">
                <g id="Layer_1" />
                <g id="Layer_2">
                  <path d="M50 2.5c-58.892 1.725-64.898 84.363-7.46 95h14.92c57.451-10.647 51.419-93.281-7.46-95z"
                    style="fill:#1877f2" />
                  <path
                    d="M57.46 64.104h11.125l2.117-13.814H57.46v-8.965c0-3.779 1.85-7.463 7.781-7.463h6.021V22.101c-12.894-2.323-28.385-1.616-28.722 17.66V50.29H30.417v13.814H42.54V97.5h14.92V64.104z"
                    style="fill:#f1f1f1" />
                </g>
              </svg>
              <!-- <svg class="w-4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path fill="#fff" fill-rule="evenodd" d="M9.945 22v-8.834H7V9.485h2.945V6.54c0-3.043 1.926-4.54 4.64-4.54 1.3 0 2.418.097 2.744.14v3.18h-1.883c-1.476 0-1.82.703-1.82 1.732v2.433h3.68l-.736 3.68h-2.944L13.685 22"></path></svg> -->
              <span class="">LinkedIn</span>
            </button>

          </div>
        </div>
        <div class="mt-7 text-center text-gray-300 text-xs">
        </div>
      </div>
    </div>

    <!-- WELCOMING TEXT -->
    <div class="flex-col flex  self-center  z-10">
      <div class="self-center hidden lg:flex flex-col text-gray-400 px-8 justify-center items-center">

        <h1 class="my-3 font-semibold text-4xl text-left text-theme-red">Welcome!</h1>
        <p class="pr-3 text-sm opacity-[80] text-center">Lorem ipsum is placeholder text commonly used in the graphic,
          print,
          and publishing industries for previewing layouts and visual mockups</p>
        <img src="/images/placeholder-reg.png" class="w-[700px] h-full object-cover">
      </div>
    </div>
  </div>
</template>