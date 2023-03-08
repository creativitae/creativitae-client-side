<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  methods: {
    ...mapActions(useMainStore, ['doLinkedinAuth'])
  },
  created() {
    if (this.$route.query.hasOwnProperty('error')) {
      this.$router.push('/login')
    } else {
      this.doLinkedinAuth(this.$route.query.code)
    }
  },
}
</script>

<template>
  <div class="mt-[72px] p-8 flex justify-between items-center">
    <div
      class="template-content min-h-[70vh] flex flex-col justify-center items-center bg-slate-200/80 shadow-inner w-[60%] rounded-2xl overflow-hidden py-8 relative">
      <div class="div">
        <p class="font-bold text-[3.5rem] text-theme-red italic">Relax!</p>
        <p class="text-[2.5rem]">We'll redirect you shortly, so sit tight!</p>
      </div>
    </div>
    <img src="/images/waiting.gif" />
  </div>
</template>