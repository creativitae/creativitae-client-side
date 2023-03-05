<script>
export default {
  props: ['i']
}
</script>
<template>
  <div class="cv-card bg-slate-300 rounded-md w-[400px] h-[564px] flex justify-center items-center relative">
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
    <p class="text-[2rem] text-slate-500/50">TEMPLATE {{ i }}</p>
  </div>
</template>