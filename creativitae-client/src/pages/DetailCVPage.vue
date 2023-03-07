<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
import UploadImg from '../components/UploadImg.vue'
import print from 'vue3-print-nb'

import interact from "interactjs";
export default {
  computed: {
    content() {
      return this.$route.params.content; // Retrieve the content of the div from the parameter
    },
  },
};
</script>
<template>
  <div class="mt-[72px] p-8">
    <div
      class="dashboard-content h-screen flex justify-between items-start bg-slate-200/80 shadow-inner rounded-2xl overflow-hidden p-8">
      {{ content }}
    </div>
  </div>
</template>