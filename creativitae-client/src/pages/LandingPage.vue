<script></script>
<template>
  <div class="mt-[72px] p-4">

    <div class="max-w-2xl mx-auto">

      <!-- Modal toggle -->
      <button
        class="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button" data-modal-toggle="authentication-modal">
        Toggle login modal
      </button>

      <!-- Main modal -->
      <div id="authentication-modal" aria-hidden="true"
        class="hidden overflow-x-hidden overflow-y-auto fixed h-modal md:h-full top-4 left-0 right-0 md:inset-0 z-50 justify-center items-center">
        <div class="relative w-full max-w-md px-4 h-full md:h-auto">
          <!-- Modal content -->
          <div class="bg-white rounded-lg shadow relative dark:bg-gray-700">
            <div class="flex justify-end p-2">
              <button type="button"
                class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
                data-modal-toggle="authentication-modal">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clip-rule="evenodd"></path>
                </svg>
              </button>
            </div>
            <form class="space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8" action="#">
              <h3 class="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h3>
              <div>
                <label for="email" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                  email</label>
                <input type="email" name="email" id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  placeholder="name@company.com" required="">
              </div>
              <div>
                <label for="password" class="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">Your
                  password</label>
                <input type="password" name="password" id="password" placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                  required="">
              </div>
              <div class="flex justify-between">
                <div class="flex items-start">
                  <div class="flex items-center h-5">
                    <input id="remember" aria-describedby="remember" type="checkbox"
                      class="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                      required="">
                  </div>
                  <div class="text-sm ml-3">
                    <label for="remember" class="font-medium text-gray-900 dark:text-gray-300">Remember me</label>
                  </div>
                </div>
                <a href="#" class="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
              </div>
              <button type="submit"
                class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login
                to your account</button>
              <div class="text-sm font-medium text-gray-500 dark:text-gray-300">
                Not registered? <a href="#" class="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
              </div>
            </form>
          </div>
        </div>
      </div>

      <p class="mt-5">This modal element is part of a larger, open-source library of Tailwind CSS components. Learn more
        by going to the official <a class="text-blue-600 hover:underline" href="#" target="_blank">Flowbite
          Documentation</a>.</p>
    </div>

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
</div></template>