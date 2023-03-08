<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  data() {
    return {
      formData: {
        email: '',
        password: ''
      },
      showPassword: false
    }
  },
  methods: {
    ...mapActions(useMainStore, ['doLogin']),
    login(formData) {
      this.doLogin(formData)
    },
    toggle() {
      this.showPassword = this.showPassword ? false : true;
    },
  }
}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit min-h-[70vh] flex flex-col justify-start items-center bg-slate-200/80 shadow-inner w-full rounded-2xl">
      <div class="create-button w-full px-8 py-8">
        <button @click.prevent="$router.push('/templates')"
          class="px-4 py-2 bg-theme-red w-full text-white font-bold rounded-xl drop-shadow-md hover:bg-red-400 transition-all">Create
          new CV
        </button>
      </div>
      <div class="cv-list w-full h-full px-8 py-8 flex justify-center items-start gap-x-[8rem] gap-y-[2.5rem] flex-wrap">
        <div v-for="i in 0"
          class="cv-card bg-slate-300 rounded-md w-[300px] h-[423px] flex justify-center items-center relative">
          <div class="button-container absolute bottom-3 left-0 w-full flex justify-center items-center gap-[1.5rem]">
            <button
              class=" bg-white border-2 border-white px-4 py-2 z-50 rounded-2xl w-[40%] hover:bg-theme-red hover:border-theme-red group drop-shadow-lg">
              <v-icon name="fa-edit" scale="1.2"
                class="group-hover:scale-125 group-hover:text-white transition-all text-theme-red" />
            </button>
            <button
              class=" bg-theme-red border-2 border-theme-red px-4 py-2 z-50 rounded-2xl w-[40%] hover:bg-theme-red group drop-shadow-lg">
              <v-icon name="fa-regular-trash-alt" scale="1.2" class="text-white group-hover:scale-125 transition-all" />
            </button>


          </div>
          <p class="text-[2rem] text-slate-500/50">TEMPLATE</p>
        </div>
      </div>
    </div>
  </div>
</template>