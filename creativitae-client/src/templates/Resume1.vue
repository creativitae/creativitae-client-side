<script>
import interact from "interactjs";
export default {
  data() {
    return {
      formData: {
        fullName: 'John Doe',
        title: 'Web Developer',
        address: 'Pondok Indah, Jakarta',
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
        languages: this.getLanguages
      },
      skill: 'ReactJS, VueJS',
      language: 'English, Japanese',
      name_title: {
        posX: 230,
        posY: 30,
        changeX: 0,
        changeY: 0
      },
      work_exp: {
        posX: 230,
        posY: 100,
        changeX: 0,
        changeY: 0
      },
      education_section: {
        posX: 230,
        posY: 312,
        changeX: 0,
        changeY: 0
      },
      portfolio_section: {
        posX: 230,
        posY: 470,
        changeX: 0,
        changeY: 0
      },
      certification_section: {
        posX: 230,
        posY: 610,
        changeX: 0,
        changeY: 0
      }

    }
  },
  computed: {
    getSkills() {
      this.formData.skills = this.skill.trim().split(',').map(el => el.trim());
    },
    getLanguages() {
      this.formData.languages = this.language.trim().split(',').map(el => el.trim());
    },
    getYear() {
      this.formData.workExperiences.we_1.year = `${this.formData.workExperiences.we_1.startYear} - ${this.formData.workExperiences.we_1.untilYear}`
    },
    getPosition() {
      return this.name_title
    },
  },
  mounted() {
    this.initInteract()
  },
  methods: {
    initInteract() {
      interact('.experience-section').draggable({
        listeners: {
          start(event) {
            let target = event.target
            console.log(event.type, event.target,)
            let elementClass = target.getAttribute("class")
            elementClass += ' border-2 border-theme-red p-2 '
            target.setAttribute("class", elementClass)
          },
          move: this.onMoveHandler,
          end: this.onEndHandler
        },
      })

    },
    onMoveHandler: function (event) {
      let target = event.target
      let x = (parseFloat(target.getAttribute("data-x")))
      let y = (parseFloat(target.getAttribute("data-y"))) + event.dy;

      // translate the element
      target.style.webkitTransform = target.style.transform =
        "translate(" + x + "px, " + y + "px)";

      // update the posiion attributes
      target.setAttribute("data-x", x);
      target.setAttribute("data-y", y);
      this[event.target.id].changeX = x
      this[event.target.id].changeY = y

    },
    onEndHandler: function (event) {
      console.log(event.target.id, 'thisssss');
      let target = event.target
      let elementClass = target.getAttribute("class")
      let modified = elementClass.replace(' border-2 border-theme-red p-2 ', '')
      target.setAttribute("class", modified)
      this[event.target.id].posX += this[event.target.id].changeX
      this[event.target.id].posY += this[event.target.id].changeY
    }
  }

}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit flex justify-between items-start bg-slate-200/80 shadow-inner rounded-2xl overflow-hidden p-8 bg-green-200">
      <div class="sticky top-0 w-fit">
        <!-- TEMPLATE GOES HERE -->
        <img src="/templates/resume1/resume1-2.svg" class="left-8 w-[600px] h-fit sticky top-0" />

        <!-- Output here -->
        <!-- NAME AND TITLE -->
        <div class="name-title flex flex-col justify-start absolute z-[11]"
          :style="`top: ${name_title.posY}px; left: ${name_title.posX}px`" data-x="0" data-y="0">
          <p class="font-bold text-[1.5rem] leading-[1.4rem]">{{ formData.fullName }}</p>
          <p class="text-[1.2rem] font-thin">{{ formData.title }}</p>
        </div>

        <!-- ABOUT ME -->
        <p class="absolute top-[195px] left-[30px] font-bold text-white text-[0.8rem]">ABOUT ME</p>
        <p class="absolute top-[225px] left-[30px] font-thin text-white text-[0.45rem] w-[28%] leading-3 text-justify">
          Lorem ipsum
          dolor sit amet
          consectetur
          adipisicing elit. Nihil repudiandae sapiente minus dolorum maiores alias deserunt praesentium molestiae eos
          iusto, accusantium, nesciunt, nobis pariatur neque.</p>

        <!-- ADDRESS -->
        <p class="absolute top-[305px] left-[30px] font-bold text-white text-[0.8rem]">CONTACT ME</p>
        <p class="absolute top-[355px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] leading-3 text-justify">
          Pondok Indah, Jakarta Selatan</p>

        <!-- PHONE -->
        <p class="absolute top-[407px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] leading-3 text-justify">
          08123456789</p>

        <!-- SOCMED -->
        <div
          class="absolute top-[455px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] h-fit  text-justify flex flex-col gap-y-[1px]">
          <p v-for="i in 2" class="font-thin text-white text-[0.6rem] leading-3">http://google.com</p>
        </div>

        <!-- SKILLS -->
        <div
          class="absolute top-[520px] left-[30px] font-bold text-white text-[0.8rem] w-[30%] h-fit  text-justify flex flex-col gap-y-[1px] border-b-[1px] border-white pb-[0.4rem]">
          SKILLS
        </div>
        <div
          class="absolute top-[555px] left-[30px] font-thin text-white text-[0.6rem] w-[30%] h-fit text-justify flex gap-y-2 gap-x-4 bg-green-400 flex-wrap">
          <p v-for="i in 10" class="font-thin text-white text-[0.6rem] w-[45%] leading-3 align-middle"><span
              class="text-[1.5rem] font-bold">·</span>ReactJS</p>
        </div>



        <!-- WORK EXP -->
        <div :style="`top: ${work_exp.posY}px; left: ${work_exp.posX}px`" data-x="0" data-y="0" id="work_exp"
          class="experience-section flex bg-green-200/50 flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/experience-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in 3" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <p class="font-bold text-[0.6rem]">2020 - 2021</p>
                <p class="font-bold text-[0.6rem]">Hacktiv8 Indonesia</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">SENIOR WEB DEVELOPER</p>
                <p class="font-thin text-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                  optio
                  quaerat, ut assumenda illo culpa praesentium veritatis sunt sit reiciendis aspernatur. Laborum eveniet
                  unde corporis?</p>
              </div>
            </div>
          </div>

        </div>

        <!-- EDUCATION -->
        <div :style="`top: ${education_section.posY}px; left: ${education_section.posX}px`" data-x="0" data-y="0"
          id="education_section"
          class="experience-section flex bg-blue-200/50 flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/education-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in 2" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <p class="font-bold text-[0.6rem]">2020 - 2021</p>
                <p class="font-bold text-[0.6rem]">ABC University</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">CHEMICAL ENGINEERING</p>
                <p class="font-thin text-[0.4rem]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis quos
                  odio inventore sit tenetur illo ipsa obcaecati velit, aliquam nemo?</p>
              </div>
            </div>
          </div>

        </div>

        <!-- PORTFOLIO -->
        <div :style="`top: ${portfolio_section.posY}px; left: ${portfolio_section.posX}px`" data-x="0" data-y="0"
          id="portfolio_section"
          class="experience-section flex bg-yellow-200/50 flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/portfolio-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in 2" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <p class="font-bold text-[0.6rem]">2022</p>
                <p class="font-bold text-[0.6rem]">Hacktiv8</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">REACT SUPER APP</p>
                <p class="font-thin text-[0.4rem]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
                  illum dolores aliquam neque, molestias voluptates.</p>
              </div>
            </div>
          </div>

        </div>

        <!-- CERTIFICATION -->
        <div :style="`top: ${certification_section.posY}px; left: ${certification_section.posX}px`" data-x="0" data-y="0"
          id="certification_section"
          class="experience-section flex bg-yellow-200/50 flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/cert-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div class="actual-experiences flex justify-between w-full h-fit mb-2 flex-wrap gap-y-2">
            <div v-for="i in 2" class="flex flex-col justify-start items-start w-[48%]">
              <p class="font-bold text-[0.6rem]">React.JS Advance</p>
              <p class="font-thin text-[0.5rem] italic">Udemy</p>
              <p class="font-thin text-[0.5rem]">Advanced ReactJS Online Course</p>
              <p class="font-thin text-[0.5rem]">Certificate: <a href="#"
                  class="italic underline text-blue-400 text-[0.65rem]">certificate-link</a>
              </p>
            </div>
          </div>

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
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
              </div>

              <!-- socmed -->
              <div class="form-content flex flex-col w-[100%] py-1">
                <label class="text-left font-bold mb-1 text-theme-red">Social Media</label>
                <input v-model="formData.socialMedia" type="text" name="address"
                  class="px-4 py-1 rounded-md border w-full" placeholder="eg: Pondok Indah, Jakarta" />
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
                <label class="text-left font-bold mb-1 text-theme-red">Skill Names</label>
                <input v-model="skill" type="text" name="name" class="px-4 py-1 rounded-md border w-full"
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
                <label class="text-left font-bold mb-1 text-theme-red">Languages</label>
                <input v-model="language" type="text" name="fullName" class="px-4 py-1 rounded-md border w-full"
                  placeholder="eg: John Doe" />
                <p class="text-[0.7rem] text-slate-400 mt-1">*separated by commas (,)</p>
              </div>
            </div>
          </div>

        </form>
      </div>




    </div>
  </div>
</template>