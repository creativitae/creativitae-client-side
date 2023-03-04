<script></script>
<template>
  <div class="mt-[72px] p-4">

    <div
      class="col-container w-full h-fit flex justify-center items-center py-[50px] border-b-[1px] border-solid border-slate-400 px-4">
      <div class="main-title w-1/2 h-fit flex flex-col justify-center items-center">
        <p class="font-bold text-[2.5rem] text-center mt-10">Elevate your job-seeking game</p>
        <p class="text-[1rem] text-center w-[80%]">
          CreatiVitae is the perfect resume maker app for anyone looking to take their job
          search to the next level. Our app offers a wide range of design options and features that allow you to create a
          resume that truly stands out from the rest, all with ease of use in mind.
        </p>
        <a
          class="py-2 px-4 bg-red-400 rounded-md font-bold text-white my-10 drop-shadow-md cursor-pointer hover:scale-110 transition-all">
          Create your own
        </a>
      </div>
      <div class="title-image flex justify-center items-center w-1/2 h-fit px-[2rem]">
        <img src="https://source.unsplash.com/npxXWgQ33ZQ" class="w-full h-[350px] object-cover rounded-md" />
      </div>
    </div>
    <div class="template-preview w-full h-fit px-4 py-[50px] flex flex-col justify-start items-center">
      <div class="aux-title text-center pb-8">
        <p class="font-bold text-[2.5rem]">Job-winning CV Templates</p>
      </div>
      <div class="template-preview flex justify-center items-center w-full h-fit flex-wrap gap-[5rem]">
        <!-- CV TEMPLATES -->
        <div v-for="i in 9" class="cv-card bg-slate-300 rounded-md w-[400px] h-[564px] flex justify-center items-center">
          <p class="text-[2rem] text-slate-500/50">TEMPLATE</p>
        </div>
      </div>
    </div>
  </div>
</template>