<script>
import interact from "interactjs";
export default {
  data() {
    return {
      formData: {
        fullName: 'John Doe',
        title: 'Web Developer',
        phoneNumber: '08123456789',
        socialMedia: '',
        workExperiences: {
          we_1: {
            jobTitle: 'Junior Backend Developer',
            startYear: '2020',
            untilYear: '2021',
            year: this.getYear,
            jobDesc: 'Performed express server maintenance',
            company: 'GO-JACK Indonesia'
          },
          we_2: {
            jobTitle: '',
            startYear: '',
            untilYear: '',
            year: `${this.startYear} - ${this.untilYear}`,
            jobDesc: '',
            company: ''
          }
        },
        educations: [
          {
            major: 'Computer Science',
            startYear: '2016',
            untilYear: '2020',
            year: `${this.startYear} - ${this.untilYear}`,
            description: 'Learning about computer science, software engineering, data science',
            institution: 'University of Colorado'
          }
        ],
        portfolios: [
          {
            title: 'UNIQLO Clone Web App',
            year: '2021',
            description: 'Uniqlo website made using ReactJS, Express, MongoDB, etc',
            institution: 'Personal'
          }
        ],
        certifications: [
          {
            title: 'Advanced React JS',
            description: 'React JS Advance Level Online Course',
            institution: 'Coursera',
            certificate: 'http://www.coursera.com'
          }
        ],

        skills: this.getSkills,
        languages: [
          {
            name: 'English',
          }
        ]
      },
      skill: 'ReactJS, VueJS',
      name_title: {
        posX: 248,
        posY: 40,
      }
    }
  },
  computed: {
    getSkills() {
      this.formData.skills = this.skill.trim().split(',');
      // this.formData.skills = skills?.split(',')
    },
    getYear() {
      this.formData.workExperiences.we_1.year = `${this.formData.workExperiences.we_1.startYear} - ${this.formData.workExperiences.we_1.untilYear}`
    }
  },
  methods: {
    initInteract: interact('.name-title').draggable({
      listeners: {
        start(event) {
          console.log(event.type, event.target, 'yang ini ga')
          console.log(this.skill, 'YANG INI');
        },
        move(event) {
          this.name_title.posX += event.dx
          this.name_title.posY += event.dy

          event.target.style.transform =
            `translate(${this.name_title.posX}px, ${this.name_title.posY}px)`
        },
      }
    })
  }

}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit flex justify-between items-start bg-slate-200/80 shadow-inner rounded-2xl overflow-hidden p-8 bg-green-200">
      <div class="sticky top-0 bg-green-200 w-fit">
        <img src="/templates/resume1-2.svg" class="left-8 w-[600px] h-fit sticky top-0" />

        <!-- Drop Zone -->
        <div class="absolute top-[2rem] left-[210px] bg-red-200/50 w-[390px] h-[778px] z-[10] ">
        </div>

        <!-- Output here -->
        <div class="name-title flex flex-col justify-start absolute  z-[11]"
          :class="`top-[${name_title.posY}px] left-[${name_title.posX}px]`">
          <p class="font-bold text-[2.5rem] leading-[1.4rem]">{{ formData.fullName }}</p>
          <p class="text-[1.5rem] font-thin">{{ formData.title }}</p>
        </div>

      </div>
      <div class="container w-1/2 h-[841px] overflow-scroll ">
        <form class="w-full h-full flex flex-col justify-start items-end gap-y-8">

          <!-- PERSONAL INFO -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
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
                <label class="text-left font-bold mb-1 text-theme-red">Social Media</label>
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
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Experience</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- Job Title -->
              <div class="form-content flex flex-col w-full py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Job Title</label>
                <input v-model="formData.workExperiences.we_1.jobTitle" type="text" name="jobTitle"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Junior Software Engineer" />
              </div>
              <!-- year started -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                <input v-model="formData.workExperiences.we_1.startYear" type="text" name="startYear"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
              </div>
              <!-- until -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Until</label>
                <input v-model="formData.workExperiences.we_1.untilYear" type="text" name="untilYear"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
              </div>
              <!-- job description -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Job Description</label>
                <input v-model="formData.workExperiences.we_1.jobDesc" type="text" name="jobDesc"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Worked as a front-end developer" />
              </div>
              <!-- Company -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Company</label>
                <input v-model="formData.workExperiences.we_1.company" type="text" name="Company"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Unilever" />
              </div>
            </div>
          </div>

          <!-- Edu -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Education</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- Job Title -->
              <div class="form-content flex flex-col w-full py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Major / Concentration</label>
                <input v-model="formData.educations[0].major" type="text" name="major"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Junior Software Engineer" />
              </div>
              <!-- year started -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                <input v-model="formData.educations[0].startYear" type="text" name="startYear"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
              </div>
              <!-- until -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Until</label>
                <input v-model="formData.educations[0].untilYear" type="text" name="untilYear"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
              </div>
              <!-- job description -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                <input v-model="formData.educations[0].description" type="text" name="description"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Worked as a front-end developer" />
              </div>
              <!-- Company -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                <input v-model="formData.educations[0].institution" type="text" name="institution"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Unilever" />
              </div>
            </div>

          </div>

          <!-- Portfolio -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Portfolio / Project</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- Job Title -->
              <div class="form-content flex flex-col w-full py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Title</label>
                <input v-model="formData.portfolios[0].title" type="text" name="title"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: React Web App" />
              </div>
              <!-- year -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                <input v-model="formData.portfolios[0].year" type="text" name="year"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
              </div>
              <!-- institution -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                <input v-model="formData.portfolios[0].institution" type="text" name="institution"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Personal" />
              </div>
              <!-- description -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                <input v-model="formData.portfolios[0].description" type="text" name="description"
                  class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: Web App created using ReactJS, MongoDB, Express" />
              </div>

            </div>

          </div>

          <!-- Cert -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Portfolio / Project</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- Title -->
              <div class="form-content flex flex-col w-full py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Title</label>
                <input v-model="formData.certifications[0].title" type="text" name="title"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: React Web App" />
              </div>
              <!-- institution -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                <input v-model="formData.certifications[0].institution" type="text" name="institution"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Udemy" />
              </div>
              <!-- description -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                <input v-model="formData.certifications[0].description" type="text" name="description"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Advanced Relational Databases" />
              </div>
              <!-- certificate -->
              <div class="form-content flex flex-col w-[45%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Certificate</label>
                <input v-model="formData.certifications[0].certificate" type="text" name="certificate"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: http://www...." />
              </div>

            </div>

          </div>

          <!-- Skills -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
            <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Skills</p>

            <div class="flex w-full gap-x-8 justify-between flex-wrap">
              <!-- name -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Skill Name</label>
                <input type="text" name="name" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: VueJS, ReactJS, Postgres" />
                <p class="text-[0.7rem] text-slate-400 mt-1">*separated by commas (,)</p>
              </div>
            </div>
          </div>

          <!-- Language -->
          <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
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




    </div>
  </div>
</template>