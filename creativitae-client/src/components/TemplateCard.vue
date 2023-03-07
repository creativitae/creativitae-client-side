<script>
export default {
  props: ['template', 'userPremium', 'templatePremium']
}
</script>
<template>
  <div class="cv-card bg-slate-300 rounded-md w-[400px] h-[564px] flex justify-center items-center relative">
    <div class="button-container absolute bottom-3 left-0 w-full flex justify-center items-center gap-[0.6rem]">
      <!-- PREMIUM USER BUTTON -->
      <button v-if="localStorage?.isPremium && template.isPremium || !localStorage?.isPremium && !template.isPremium"
        @click.prevent="$router.push('/create-cv')"
        class=" bg-white border-2 border-white px-4 py-2 z-50 rounded-2xl w-[45%] hover:bg-theme-red hover:border-theme-red group drop-shadow-lg">
        <p class="group-hover:scale-110 group-hover:text-white transition-all text-theme-red font-bold">Choose Template
        </p>
      </button>
      <button v-else-if="!localStorage?.isPremium && template.isPremium" @click.prevent="$router.push('/getPremium')"
        class=" bg-slate-400 border-2 border-slate-400 px-4 py-2 z-50 rounded-2xl w-[45%] hover:bg-yellow-500 hover:border-yellow-500 group drop-shadow-lg transition-all">
        <v-icon name="hi-lock-closed" scale="1.2"
          class="group-hover:scale-125 group-hover:text-white transition-all text-white" />
      </button>
      <button
        class=" bg-theme-red border-2 border-theme-red px-4 py-2 z-50 rounded-2xl w-[45%] hover:bg-theme-red group drop-shadow-lg">
        <p class="text-white group-hover:scale-125 transition-all font-bold">TEMPLATE</p>
      </button>
    </div>


    <p class="text-[2rem] text-slate-500/50">{{ template.name }}</p>
  </div>
</template>