<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import { TransitionFade } from '@morev/vue-transitions';
import { saveAs } from 'file-saver';
import { jsPDF } from "jspdf";
import UploadImg from '../components/UploadImg.vue'
import ShareButton from '../components/ShareButton.vue';
import html2canvas from 'html2canvas';
import interact from "interactjs";
import Swal from 'sweetalert2';

export default {
  components: {
    UploadImg,
    TransitionFade,
    ShareButton
  },
  directives: {
    print
  },
  data() {
    return {
      imagebuatan: '',
      showForm: true,
      printArea: {
        id: 'printThis',
        popTitle: '.',
        preview: true,
        previewTitle: 'Preview',
        previewPrintBtnLabel: 'Print'
      },
      socmedTemp: {
        url: ''
      },
      expTemp: {
        jobTitle: '',
        startYear: '',
        untilYear: '',
        jobDesc: '',
        company: ''
      },
      eduTemp: {
        major: '',
        startYear: '',
        untilYear: '',
        description: '',
        institution: ''
      },
      portofolioTemp: {
        title: '',
        year: '',
        description: '',
        institution: ''
      },
      certificationTemp: {
        title: '',
        description: '',
        institution: '',
        certificate: ''
      },
      formData: {
        fullName: '',
        title: '',
        address: localStorage.getItem('address'),
        phoneNumber: localStorage.getItem('phoneNumber'),
        profilePicture: '',
        summary: '',
        socialMedias: [
          {
            url: localStorage.getItem('email')
          }
        ],
        workExperiences: [
        ],
        educations: [
        ],
        portfolios: [
        ],
        certifications: [
        ],
        skills: [
        ],
        languages: [
        ]
      },
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
      },
      skill: '',
      language: '',
    }
  },
  computed: {
    ...mapState(useMainStore, ['uploadedProfilePicture', 'activeTemplate', 'getUploadedPP']),
    getSkills() {
      this.formData.skills = this.skill.trim().split(',').map(el => el.trim());
    },
    getLanguages() {
      this.formData.languages = this.language.trim().split(',').map(el => el.trim());
    },
    setProfilePicture() {
      console.log(this.getUploadedPP, 'thisss');
      this.formData.profilePicture = this.getUploadedPP
    }

  },
  created() {
    this.getSkills
    this.getLanguages
    this.getTemplateById(this.$route.params.templateId)
  },
  watch: {
    skill: function () {
      this.getSkills
    },
    language: function () {
      this.getLanguages
    },
  },
  mounted() {
    this.initInteract()
  },
  methods: {
    ...mapActions(useMainStore, ['uploadResult', 'getTemplateById', 'addTemplateToMyList', 'postPersonalDetail']),
    async handleForm(formData) {
      await this.shareLinkedIn()
      this.postPersonalDetail(formData)
      this.addTemplateToMyList(this.$route.params.templateId)
      this.toggleForm()
    },
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
    },
    deleteFormElement(key, index) {
      this.formData[key] = this.formData[key]?.filter((_, i) => i !== index)
    },
    async shareLinkedIn() {
      let timerInterval
      Swal.fire({
        title: 'Uploading....',
        html: 'please wait for <b></b> milliseconds....',
        timer: 3000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 100)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log('I was closed by the timer')
        }
      })

      let node = this.$refs.printThisArea
      let dataUrl
      await html2canvas(node, { useCORS: true }).then(function (canvas) {
        dataUrl = canvas.toDataURL('image/png')
      });
      await this.uploadResult(dataUrl)
      // setTimeout(this.$refs.linkedin.$el.click(), 5000)
      // await this.uploadResult(dataUrl)
    },
    downloadPNG() {
      let node = this.$refs.printThisArea
      html2canvas(node, { useCORS: true }).then(function (canvas) {
        canvas.toBlob(function (blob) {
          saveAs(blob, "my-resume.png");
        });
      });
    },
    downloadJPEG() {
      let node = this.$refs.printThisArea
      html2canvas(node, { useCORS: true }).then(function (canvas) {
        canvas.toBlob(function (blob) {
          saveAs(blob, "my-resume.jpeg");
        });
      });
    },
    downloadPDF() {
      let doc = new jsPDF();
      let node = this.$refs.printThisArea
      html2canvas(node, { useCORS: true }).then(function (canvas) {
        let dataUrl = canvas.toDataURL('image/png')
        doc.addImage(dataUrl, 'png', 0, 0, 210, 297);
        doc.save('converted.pdf');
      });
    },
    toggleForm() {
      if (this.showForm) {
        this.showForm = false
      } else {
        this.showForm = true
      }
    }
  }

}
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-fit flex justify-between items-start bg-slate-200/80 shadow-inner rounded-2xl overflow-hidden p-8">

      <!-- OUTPUT AREA -->
      <div class="print-area sticky top-0 w-fit h-fit" id="printThis" ref="printThisArea">
        <!-- TEMPLATE GOES HERE -->
        <img src="/templates/resume1/resume1-2.svg" class="left-8 w-[600px] h-fit sticky top-0" />

        <!-- NAME AND TITLE -->
        <div class="name-title flex flex-col justify-start absolute z-[11]"
          :style="`top: ${name_title.posY}px; left: ${name_title.posX}px`" data-x="0" data-y="0">
          <p class="font-bold text-[1.5rem] leading-[1.4rem]">{{ formData.fullName }}</p>
          <p class="text-[1.2rem] font-thin">{{ formData.title }}</p>
        </div>

        <!-- IMAGES -->
        <div class="photo w-[122px] h-[122px] rounded-full absolute top-[40px] left-[44px] overflow-hidden">
          <img :src="getUploadedPP" class="object-cover" />
        </div>

        <!-- ABOUT ME -->
        <p class="absolute top-[195px] left-[30px] font-bold text-white text-[0.8rem]">ABOUT ME</p>
        <p class="absolute top-[225px] left-[30px] font-thin text-white text-[0.45rem] w-[28%] leading-3 text-justify">
          {{ formData.summary }}</p>

        <!-- ADDRESS -->
        <p class="absolute top-[305px] left-[30px] font-bold text-white text-[0.8rem]">CONTACT ME</p>
        <p class="absolute top-[355px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] leading-3 text-justify">
          {{ formData.address }}</p>

        <!-- PHONE -->
        <p class="absolute top-[407px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] leading-3 text-justify">
          {{ formData.phoneNumber }}</p>

        <!-- SOCMED -->
        <div
          class="absolute top-[455px] left-[58px] font-thin text-white text-[0.6rem] w-[24%] h-fit  text-justify flex flex-col gap-y-[1px]">
          <p v-for="i in formData.socialMedias" class="font-thin text-white text-[0.6rem] leading-3">{{ i.url }}</p>
        </div>

        <!-- SKILLS -->
        <div
          class="absolute top-[520px] left-[30px] font-bold text-white text-[0.8rem] w-[30%] h-fit  text-justify flex flex-col gap-y-[1px] border-b-[1px] border-white pb-[0.4rem]">
          SKILLS
        </div>
        <div
          class="absolute top-[555px] left-[30px] font-thin text-white text-[0.6rem] w-[30%] h-fit text-justify flex gap-y-2 gap-x-4 flex-wrap">
          <p v-for="i in formData.skills"
            class="font-thin text-white text-[0.6rem] w-[45%] leading-3 align-middle relative">
            {{ i }}
          </p>
        </div>

        <!-- LANGUAGES -->
        <div
          class="absolute top-[670px] left-[30px] font-bold text-white text-[0.8rem] w-[30%] h-fit  text-justify flex flex-col gap-y-[1px] border-b-[1px] border-white pb-[0.4rem]">
          LANGUAGES
        </div>
        <div
          class="absolute top-[705px] left-[30px] font-thin text-white text-[0.6rem] w-[30%] h-fit text-justify flex flex-col gap-y-2 gap-x-4 flex-wrap">
          <p v-for="i in formData.languages"
            class="font-thin text-white text-[0.6rem] w-[45%] leading-3 align-middle relative">
            {{ i }}
          </p>
        </div>

        <!-- WORK EXP DRAGABLE -->
        <div v-if="formData.workExperiences.length > 0" :style="`top: ${work_exp.posY}px; left: ${work_exp.posX}px`"
          data-x="0" data-y="0" id="work_exp"
          class="experience-section flex flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/experience-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in formData.workExperiences" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <div class="flex justify-start">
                  <p class="font-bold text-[0.6rem]">{{ i.startYear }} -</p>
                  <p class="font-bold text-[0.6rem]"><span class=" text-white">-</span>{{ i.untilYear }}</p>
                </div>
                <p class="font-bold text-[0.6rem]">{{ i.company }}</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">{{ i.jobTitle }}</p>
                <p class="font-thin text-[0.4rem]">{{ i.jobDesc }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- EDUCATION DRAGABLE -->
        <div v-if="formData.educations.length > 0"
          :style="`top: ${education_section.posY}px; left: ${education_section.posX}px`" data-x="0" data-y="0"
          id="education_section" class="experience-section flex flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/education-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in formData.educations" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <div class="flex justify-start">
                  <p class="font-bold text-[0.6rem]">{{ i.startYear }} -</p>
                  <p class="font-bold text-[0.6rem]"><span class=" text-white">-</span>{{ i.untilYear }}</p>
                </div>
                <p class="font-bold text-[0.6rem]">{{ i.institution }}</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">{{ i.major }}</p>
                <p class="font-thin text-[0.4rem]">{{ i.description }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- PORTFOLIO DRAGABLE -->
        <div v-if="formData.portfolios.length > 0"
          :style="`top: ${portfolio_section.posY}px; left: ${portfolio_section.posX}px`" data-x="0" data-y="0"
          id="portfolio_section" class="experience-section flex flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/portfolio-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div v-for="i in formData.portfolios" class="actual-experiences w-full h-fit mb-2">
            <div class="flex justify-between items-start">
              <div class="left-side w-[40%] h-fit">
                <p class="font-bold text-[0.6rem]">{{ i.year }}</p>
                <p class="font-bold text-[0.6rem]">{{ i.institution }}</p>
              </div>
              <div class="right-side w-[60%] h-fit">
                <p class="font-thin text-[0.7rem]">{{ i.title }}</p>
                <p class="font-thin text-[0.4rem]">{{ i.description }}</p>
              </div>
            </div>
          </div>

        </div>

        <!-- CERTIFICATION DRAGABLE -->
        <div v-if="formData.certifications.length > 0"
          :style="`top: ${certification_section.posY}px; left: ${certification_section.posX}px`" data-x="0" data-y="0"
          id="certification_section"
          class="experience-section flex flex-col justify-start absolute z-[11] h-fit w-[352px]">
          <img src="/templates/resume1/cert-part.svg" class="mb-2" />

          <!-- TODO - FIX THE LOOP -->
          <div class="actual-experiences flex justify-between w-full h-fit mb-2 flex-wrap gap-y-2">
            <div v-for="i in formData.certifications" class="flex flex-col justify-start items-start w-[48%]">
              <p class="font-bold text-[0.6rem]">{{ i.title }}</p>
              <p class="font-thin text-[0.5rem] italic">{{ i.institution }}</p>
              <p class="font-thin text-[0.5rem]">{{ i.description }}</p>
              <p v-if="i.certificate" class="font-thin text-[0.5rem]">Certificate: <a :href="`${i.certificate}`"
                  class="italic underline text-blue-400 text-[0.65rem]">certificate-link</a>
              </p>
            </div>
          </div>

        </div>
      </div>

      <div class="div w-1/2 h-fit">
        <button @click.prevent="handleForm(formData)" v-if="showForm"
          class="px-4 py-2 bg-theme-red w-full text-white font-bold rounded-xl drop-shadow-md hover:bg-red-400 transition-all mb-10">
          Submit Creation
        </button>

        <!-- MAIN FORM AREA -->
        <transition-fade :duration="{ enter: 1000, leave: 1000 }">
          <div v-if="showForm" class="container w-full h-[841px] overflow-scroll  py-4">
            <form class="w-full h-full flex flex-col justify-start items-end gap-y-8">

              <!-- PERSONAL INFO -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
                <p class="text-center font-bold mb-4 text-[1.5rem] text-theme-red">Personal Information</p>

                <div class="flex w-full gap-x-8 justify-between flex-wrap">
                  <!-- name -->
                  <div class="form-content flex flex-col w-[47%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Full Name</label>
                    <input v-model="formData.fullName" type="text" name="fullName"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: John Doe" />
                  </div>
                  <!-- title -->
                  <div class="form-content flex flex-col w-[47%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Current Title</label>
                    <input v-model="formData.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Public Accountant" />
                  </div>
                  <!-- summary -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Summary</label>
                    <textarea v-model="formData.summary" type="text" name="address"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Pondok Indah, Jakarta" />
                  </div>

                  <!-- address -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Address</label>
                    <input v-model="formData.address" type="text" name="address"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Pondok Indah, Jakarta" />
                  </div>
                  <!-- phone -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Phone Number</label>
                    <input v-model="formData.phoneNumber" type="text" name="phoneNumber"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: 08123456789" />
                  </div>

                  <!-- socmed -->
                  <div class="form-content flex flex-col w-[80%] py-1 relative">
                    <label class="text-left font-bold mb-1 text-theme-red">Social Media</label>

                    <button v-if="formData.socialMedias.length < 5"
                      @click.prevent="formData.socialMedias.push({ ...socmedTemp })"
                      class="group-hover:scale-125 group-hover:text-white transition-all text-white font-bold absolute top-[32px] right-[-50px] px-3 py-1 bg-theme-red rounded-lg hover:bg-red-400">+</button>

                    <div v-for="(item, i) in formData.socialMedias" class="div relative mb-4">

                      <button v-if="i !== 0" @click="deleteFormElement('socialMedias', i)"
                        class="group-hover:scale-125 group-hover:text-white transition-all text-white font-bold absolute top-[0px] right-[-50px] px-[13px] py-1 bg-theme-red rounded-lg hover:bg-red-400">-</button>

                      <input v-model="item.url" type="text" name="address" class="px-4 py-1 rounded-md border w-full"
                        placeholder="eg: johndoe@mail.com, linked.com/johndoe, ..." />
                    </div>
                  </div>

                  <!-- Profile Pict -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Profile Picture</label>
                    <UploadImg />
                  </div>
                </div>
              </div>

              <!-- WORKING EXP -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md relative">
                <button v-if="formData.workExperiences.length < 100"
                  @click.prevent="formData.workExperiences.push({ ...expTemp })"
                  class="group-hover:scale-125 group-hover:text-white transition-all text-white absolute top-[18px] right-[30px] px-2 py-1 bg-theme-red rounded-lg hover:bg-red-400">Add
                  Field</button>
                <p class="text-center font-bold text-[1.5rem] text-theme-red">Experience</p>

                <div v-for="(item, i) in formData.workExperiences"
                  class="flex w-full gap-x-8 justify-between flex-wrap px-4 py-6 my-4 bg-white drop-shadow-md rounded-2xl relative">

                  <v-icon v-if="formData.workExperiences.length >= 0" @click="deleteFormElement('workExperiences', i)"
                    name="la-minus-square" scale="2"
                    class="group-hover:scale-125 group-hover:text-white transition-all text-theme-red absolute top-[10px] right-[15px] cursor-pointer hover:scale-110" />

                  <!-- Job Title -->
                  <div class="form-content flex flex-col w-full py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Job Title</label>
                    <input v-model="item.jobTitle" type="text" name="jobTitle" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Junior Software Engineer" />
                  </div>

                  <!-- year started -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                    <input v-model="item.startYear" type="text" name="startYear"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
                  </div>

                  <!-- until -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Until</label>
                    <input v-model="item.untilYear" type="text" name="untilYear"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
                  </div>

                  <!-- job description -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Job Description</label>
                    <input v-model="item.jobDesc" type="text" name="jobDesc" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Worked as a front-end developer" />
                  </div>

                  <!-- Company -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Company</label>
                    <input v-model="item.company" type="text" name="Company" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Unilever" />
                  </div>
                </div>
              </div>

              <!-- Edu -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md relative">
                <button v-if="formData.educations.length < 100" @click.prevent="formData.educations.push({ ...eduTemp })"
                  class="group-hover:scale-125 group-hover:text-white transition-all text-white absolute top-[18px] right-[30px] px-2 py-1 bg-theme-red rounded-lg hover:bg-red-400">Add
                  Field</button>
                <p class="text-center font-bold text-[1.5rem] text-theme-red">Education</p>

                <div v-for="(item, i) in formData.educations"
                  class="flex w-full gap-x-8 justify-between flex-wrap px-4 py-6 my-4 bg-white drop-shadow-md rounded-2xl relative">

                  <v-icon v-if="formData.educations.length >= 0" @click="deleteFormElement('educations', i)"
                    name="la-minus-square" scale="2"
                    class="group-hover:scale-125 group-hover:text-white transition-all text-theme-red absolute top-[10px] right-[15px] cursor-pointer hover:scale-110" />

                  <!-- MAJOR -->
                  <div class="form-content flex flex-col w-full py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Major / Concentration</label>
                    <input v-model="item.major" type="text" name="major" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Junior Software Engineer" />
                  </div>
                  <!-- year started -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                    <input v-model="item.startYear" type="text" name="startYear"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
                  </div>
                  <!-- until -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Until</label>
                    <input v-model="item.untilYear" type="text" name="untilYear"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: 2021" />
                  </div>
                  <!-- job description -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                    <input v-model="item.description" type="text" name="description"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Worked as a front-end developer" />
                  </div>
                  <!-- UNIVERSITAS -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                    <input v-model="item.institution" type="text" name="institution"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Unilever" />
                  </div>
                </div>

              </div>

              <!-- Portfolio -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
                <button v-if="formData.portfolios.length < 100"
                  @click.prevent="formData.portfolios.push({ ...portofolioTemp })"
                  class="group-hover:scale-125 group-hover:text-white transition-all text-white absolute top-[18px] right-[30px] px-2 py-1 bg-theme-red rounded-lg hover:bg-red-400">Add
                  Field</button>
                <p class="text-center font-bold text-[1.5rem] text-theme-red">Portfolio / Project</p>

                <div v-for="(item, i) in formData.portfolios"
                  class="flex w-full gap-x-8 justify-between flex-wrap px-4 py-6 my-4 bg-white drop-shadow-md rounded-2xl relative">

                  <v-icon v-if="formData.portfolios.length >= 0" @click="deleteFormElement('portfolios', i)"
                    name="la-minus-square" scale="2"
                    class="group-hover:scale-125 group-hover:text-white transition-all text-theme-red absolute top-[10px] right-[15px] cursor-pointer hover:scale-110" />

                  <!-- Job Title -->
                  <div class="form-content flex flex-col w-full py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Title</label>
                    <input v-model="item.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: React Web App" />
                  </div>
                  <!-- year -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Year Started</label>
                    <input v-model="item.year" type="text" name="year" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: 2021" />
                  </div>
                  <!-- institution -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                    <input v-model="item.institution" type="text" name="institution"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Personal" />
                  </div>
                  <!-- description -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                    <input v-model="item.description" type="text" name="description"
                      class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: Web App created using ReactJS, MongoDB, Express" />
                  </div>

                </div>

              </div>

              <!-- Cert -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md relative">

                <button v-if="formData.certifications.length < 100"
                  @click.prevent="formData.certifications.push({ ...certificationTemp })"
                  class="group-hover:scale-125 group-hover:text-white transition-all text-white absolute top-[18px] right-[30px] px-2 py-1 bg-theme-red rounded-lg hover:bg-red-400">Add
                  Field</button>

                <p class="text-center font-bold text-[1.5rem] text-theme-red">Certification</p>

                <div v-for="(item, i) in formData.certifications"
                  class="flex w-full gap-x-8 justify-between flex-wrap px-4 py-6 my-4 bg-white drop-shadow-md rounded-2xl relative">

                  <v-icon v-if="formData.certifications.length >= 0" @click="deleteFormElement('certifications', i)"
                    name="la-minus-square" scale="2"
                    class="group-hover:scale-125 group-hover:text-white transition-all text-theme-red absolute top-[10px] right-[15px] cursor-pointer hover:scale-110" />

                  <!-- Title -->
                  <div class="form-content flex flex-col w-full py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Title</label>
                    <input v-model="item.title" type="text" name="title" class="px-4 py-1 rounded-md border w-full"
                      placeholder="eg: React Web App" />
                  </div>
                  <!-- institution -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Institution</label>
                    <input v-model="item.institution" type="text" name="institution"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Udemy" />
                  </div>
                  <!-- certificate -->
                  <div class="form-content flex flex-col w-[45%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Certificate</label>
                    <input v-model="item.certificate" type="text" name="certificate"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: http://www...." />
                  </div>
                  <!-- description -->
                  <div class="form-content flex flex-col w-[100%] py-1">
                    <label class="text-left font-bold mb-1 text-theme-red">Description</label>
                    <input v-model="item.description" type="text" name="description"
                      class="px-4 py-1 rounded-md border w-full" placeholder="eg: Advanced Relational Databases" />
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
                      placeholder="eg: English, Japanese, ..." />
                    <p class="text-[0.7rem] text-slate-400 mt-1">*separated by commas (,)</p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </transition-fade>

        <!-- SHARE AREA -->
        <transition-fade :duration="{ enter: 1000, leave: 1000 }">
          <div v-if="!showForm" class="container w-full h-[841px] overflow-scroll  pb-4">
            <div class="w-full h-full flex flex-col justify-start items-end gap-y-8">

              <!-- SHARE TITLE -->
              <div class="container w-full bg-white rounded-xl h-fit px-8 py-4 drop-shadow-md">
                <p class="text-center font-bold text-[1.5rem] text-theme-red mb-10">Share Your Creation!</p>
                <div class="container w-full h-fit flex justify-around items-center">

                  <!-- DOWNLOAD CV BUTTON -->
                  <div class="flex justify-center">
                    <div>
                      <div class="relative" data-te-dropdown-ref>
                        <button
                          class="flex items-center whitespace-nowrap rounded-lg bg-theme-red px-8 py-2 leading-normal font-bold text-white transition duration-150 ease-in-out hover:bg-red-400  focus:outline-none focus:ring-0  motion-reduce:transition-none"
                          type="button" id="dropdownMenuButton1" data-te-dropdown-toggle-ref aria-expanded="false">
                          Download CV
                          <span class="ml-2 w-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                              class="h-5 w-5">
                              <path fill-rule="evenodd"
                                d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                                clip-rule="evenodd" />
                            </svg>
                          </span>
                        </button>
                        <ul
                          class="absolute z-[1000] float-left m-0 hidden min-w-max list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-left text-base shadow-lg dark:bg-neutral-700 [&[data-te-dropdown-show]]:block"
                          aria-labelledby="dropdownMenuButton1" data-te-dropdown-menu-ref>
                          <li>
                            <a @click.prevent="downloadPDF"
                              class="block cursor-pointer w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                              data-te-dropdown-item-ref>As PDF</a>
                          </li>
                          <li>
                            <a @click.prevent="downloadPNG"
                              class="block cursor-pointer w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                              data-te-dropdown-item-ref>As PNG</a>
                          </li>
                          <li>
                            <a @click.prevent="downloadJPEG"
                              class="block cursor-pointer w-full whitespace-nowrap bg-transparent py-2 px-4 text-sm font-normal text-neutral-700 hover:bg-neutral-100 active:text-neutral-800 active:no-underline disabled:pointer-events-none disabled:bg-transparent disabled:text-neutral-400 dark:text-neutral-200 dark:hover:bg-neutral-600"
                              data-te-dropdown-item-ref>As JPEG</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <!-- SHARE WITH LINKEDIN -->
                  <button @click.prevent="shareLinkedIn"
                    class="inner-content bg-theme-red px-8 py-2 text-white font-bold rounded-lg">
                    Share with Linkedin
                  </button>

                  <!-- MAILTO -->
                  <button class="inner-content bg-theme-red px-8 py-2 text-white font-bold rounded-lg">
                    Email
                  </button>
                  <ShareButton ref="linkedin" style=";" />
                </div>
              </div>
            </div>
          </div>
        </transition-fade>
      </div>





    </div>
  </div>
</template>