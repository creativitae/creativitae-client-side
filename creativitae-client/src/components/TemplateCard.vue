<script>
import { useMainStore } from '../stores/main';
import { mapState, mapActions } from 'pinia';
import PreviewModal from './PreviewModal.vue'
export default {
  components: {
    PreviewModal
  },
  props: ['template',],
  computed: {
    ...mapState(useMainStore, ['isPremium'])
  },
  methods: {
    ...mapActions(useMainStore, ['']),
    createCv(templateId) {
      this.$router.push('/create-cv/' + templateId)
    }
  }
}
</script>
<template>
  <div class="cv-card rounded-md w-[400px] h-[564px] flex justify-center items-center relative overflow-hidden">
    <div class="button-container absolute bottom-3 left-0 w-full flex justify-center items-center gap-[0.6rem]">
      <!-- PREMIUM USER BUTTON -->
      <button v-if="(isPremium === 'true' && template.isPremium) || (isPremium === 'false' && template.isPremium == false)"
        @click.prevent="createCv(template.id)"
        class=" bg-white border-2 border-white px-4 py-2 z-50 rounded-lg w-[80%] hover:bg-theme-red hover:border-theme-red group drop-shadow-lg">
        <p class="group-hover:scale-110 group-hover:text-white transition-all text-theme-red font-bold">Choose Template
        </p>
      </button>
      <button @click.prevent="$router.push('/getPremium')" v-if="isPremium === 'false' && template.isPremium"
        class=" bg-slate-400 border-2 border-slate-400 px-4 py-2 z-50 rounded-lg w-[80%] hover:bg-yellow-500 hover:border-yellow-500 group drop-shadow-lg transition-all">
        <v-icon name="hi-lock-closed" scale="1.2"
          class="group-hover:scale-125 group-hover:text-white transition-all text-white" />
      </button>
    </div>
    <img :src="template.image.dummy" />
  </div>
</template>