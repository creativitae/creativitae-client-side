<script>

export default {
  data() {
    return {
      formData: {
        fullName: 'John Doe',
        title: 'Web Developer',
        phoneNumber: '08123456789',
        socialMedia: ''
      }
    }
  },
}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit flex flex-col justify-start items-center bg-slate-200/80 shadow-inner rounded-2xl overflow-hidden py-8 relative">
      <img src="/templates/resume1-2.svg" class="absolute left-8 top-8 w-[600px] h-fit" />
      <div class="container w-full h-fit bg-green-200">
        <form class="w-full h-full flex flex-col justify-start items-end gap-y-8">

          <!-- PERSONAL INFO -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Personal Information</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
              <!-- title -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Public Accountant" />
              </div>
              <!-- address -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
              <!-- phone -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>
              <!-- website -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Personal Website</label>
                <input v-model="formData.website" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: john-doe.com" />
              </div>

              <!-- socmed -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Social Media</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
            </div>

          </div>

          <!-- WORKING EXP -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Experience</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
              <!-- title -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Public Accountant" />
              </div>
              <!-- address -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
              <!-- phone -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>
              <!-- website -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Personal Website</label>
                <input v-model="formData.website" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: john-doe.com" />
              </div>
            </div>

          </div>

          <!-- Edu -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Education</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
              <!-- title -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Public Accountant" />
              </div>
              <!-- address -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
              <!-- phone -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>
              <!-- website -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Personal Website</label>
                <input v-model="formData.website" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: john-doe.com" />
              </div>
            </div>

          </div>

          <!-- Portfolio -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Portfolio / Project</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
              <!-- title -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Public Accountant" />
              </div>
              <!-- address -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
              <!-- phone -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>
              <!-- website -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Personal Website</label>
                <input v-model="formData.website" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: john-doe.com" />
              </div>
            </div>

          </div>

          <!-- Cert -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Certification</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
              <!-- title -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Public Accountant" />
              </div>
              <!-- address -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                <input v-model="formData.address" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Pondok Indah, Jakarta" />
              </div>
              <!-- phone -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>
              <!-- website -->
              <div class="form-content flex flex-col w-[47%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Personal Website</label>
                <input v-model="formData.socialMedia" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: john-doe.com" />
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Skills</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
            </div>
          </div>

          <!-- Language -->
          <div class="container w-1/2 bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Language</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- lang name -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Language</label>
                <input v-model="formData.fullName" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
              </div>
            </div>
          </div>

        </form>
      </div>

      <!-- Output here -->
      <p class="absolute top-[4.5rem] left-[17.5rem] font-bold text-[2.5rem]">{{ formData.fullName }}</p>
      <p class="absolute top-[7.5rem] left-[17.7rem] text-[1.5rem] font-thin">{{ formData.title }}</p>


    </div>
  </div>
</template>