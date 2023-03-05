<script>
export default {
  data() {
    return {
      logo: ['fa-github', 'fa-facebook', 'fa-twitter', 'fa-linkedin', 'fa-instagram']
    }
  },
}

</script>

<template>
  <div class="w-full h-fit bg-theme-red px-12 pb-12 pt-6 flex flex-col justify-center items-center">
    <div class="links flex flex-row justify-center items-center">
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">About
        Us</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">Membership</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">Pricing</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">FAQ</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">Terms
        of Service</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-white transition-all ">Privacy
        Policy</a>
      <a class="font-bold text-white/80 px-8 cursor-pointer hover:text-white transition-all ">Rights of Withdrawal</a>
    </div>
    <div class="find-us text-center mt-6 mb-4">
      <p class="font-bold text-white text-[1.5rem]">Find Us Here!</p>
    </div>
    <div class="sosmed w-full h-fit flex justify-center items-center gap-8 pb-6 border-b-[1px] border-white">
      <div v-for="i in logo" class="img w-[35px] h-[35px] flex justify-center items-center">
        <v-icon :name="`${i}`" scale="1.9" fill="white" />
      </div>
    </div>
    <p class="mt-4 text-white font-bold">Copyright © 2023 CreatiVitae by CreatiVitae Team.</p>
  </div>
</template>