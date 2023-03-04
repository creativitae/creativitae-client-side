<script></script>

<template>
  <div class="w-full h-fit bg-slate-800 px-4 pb-12 pt-6 flex flex-col justify-center items-center">
    <div class="links flex flex-row justify-center items-center">
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">About
        Us</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">Membership</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">Pricing</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">FAQ</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">Terms
        of Service</a>
      <a
        class="font-bold text-white/80 border-r-[0.5px] border-white px-8 min-w-[150px] text-center cursor-pointer hover:text-red-400 transition-all ">Privacy
        Policy</a>
      <a class="font-bold text-white/80 px-8 cursor-pointer hover:text-red-400 transition-all ">Rights of Withdrawal</a>
    </div>
    <div class="find-us text-center mt-6 mb-4">
      <p class="font-bold text-white/80 text-[1.5rem]">Find Us Here!</p>
    </div>
    <div class="sosmed w-full h-fit flex justify-center items-center gap-8">
      <div v-for="i in 5" class="img bg-blue-400 w-[35px] h-[35px]"></div>
    </div>
  </div>
</template>