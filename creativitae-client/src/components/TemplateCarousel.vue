<template>
  <Carousel ref="templateCarousel" :items-to-show="2.2" :wrap-around="true" class="w-[100%]">
    <Slide v-for="i in 5" :key="i" class="">
      <TemplateCard :i="i" :userPremium="userPremium" :templatePremium="templatePremium" />
    </Slide>


    <template #addons>
    </template>
  </Carousel>

  <button @click="prev" class="absolute top-[45%] left-[30%]">
    <v-icon name="fa-arrow-alt-circle-left" scale="3" fill="#e33427"
      class="drop-shadow-md hover:scale-110 transition-all" />
  </button>
  <button @click="next" class="absolute top-[45%] right-[30%]">
    <v-icon name="fa-arrow-alt-circle-right" scale="3" fill="#e33427"
      class="drop-shadow-md hover:scale-110 transition-all" />
  </button>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { Carousel, Navigation, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import TemplateCard from './TemplateCard.vue'


export default defineComponent({
  name: 'WrapAround',
  components: {
    Carousel,
    Slide,
    Navigation,
    TemplateCard
  },
  data() {
    return {
      // TEMP Free/Premium Template
      userPremium: false,
      templatePremium: true

    }
  },
  methods: {
    next() {
      this.$refs.templateCarousel.next()
    },
    prev() {
      this.$refs.templateCarousel.prev()
    },

  }
})
</script>

<style></style>