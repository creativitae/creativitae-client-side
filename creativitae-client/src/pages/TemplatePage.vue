<script>
import TemplateCarousel from '../components/TemplateCarousel.vue'
import TemplateCard from '../components/TemplateCard.vue'
export default {
  components: {
    TemplateCarousel,
    TemplateCard
  },
  data() {
    return {
      // TEMP Free/Premium Template
      premium: true,
      free: true
    }
  },
}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit flex flex-col justify-start items-center bg-slate-200/80 shadow-inner w-1000px rounded-2xl overflow-hidden py-8 relative">
      <div
        class="gradient-trans w-full h-[564px] bg-gradient-to-r from-slate-200 via-slate-200/0 to-slate-200 absolute z-50 pointer-events-none">

      </div>
      <TemplateCarousel />
    </div>
  </div>
</template>