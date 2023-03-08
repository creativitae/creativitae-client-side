<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  computed: {
    ...mapState(useMainStore, ['templates']),
    parseString(string) {
      console.log(JSON.parse(string));
    }
    
  },
  methods: {
    ...mapActions(useMainStore, ['fetchTemplates']),
    parseString(string) {
      console.log(JSON.parse(string));
    }
  },
  created() {
    this.fetchTemplates()
    // this.parseString()
   
  }
}
</script>
<template>
  <div class="mt-[72px] p-8">

    <div
      class="col-container w-full h-fit flex justify-center items-center py-[50px] border-b-[1px] border-solid border-theme-red px-4">
      <div class="main-title w-1/2 h-fit flex flex-col justify-center items-center">
        <p class="font-bold text-[2.5rem] text-center mt-10">Elevate your job-seeking game</p>
        <p class="text-[1rem] text-center w-[80%]">
          CreatiVitae is the perfect resume maker app for anyone looking to take their job
          search to the next level. Our app offers a wide range of design options and features that allow you to create a
          resume that truly stands out from the rest, all with ease of use in mind.
        </p>
        <a @click.prevent="$router.push('/dashboard')"
          class="py-2 px-4 bg-theme-red rounded-md font-bold text-white my-10 drop-shadow-md cursor-pointer hover:scale-110 transition-all">
          Create your own
        </a>
      </div>
      <div class="title-image flex justify-center items-center w-1/2 h-fit px-[2rem]">
        <img src="/images/landing-page-img.png" class="w-[500px] h-full rounded-md" />
      </div>
    </div>
    <div class="template-preview w-full h-fit px-4 py-[50px] flex flex-col justify-start items-center">
      <div class="aux-title text-center pb-8">
        <p class="font-bold text-[2.5rem]">Job-winning CV Templates</p>
      </div>
      <div class="template-preview flex justify-center items-center w-full h-fit flex-wrap gap-x-[10rem] gap-y-[4rem]">
        <!-- CV TEMPLATES -->
        <div v-for="template in templates" :key="template.id"
          class="cv-card rounded-md w-[400px] h-[564px] flex justify-center items-center overflow-hidden drop-shadow-lg">
          <img :src="template.image.dummy" />
        </div>
      </div>
    </div>
  </div>
</template>