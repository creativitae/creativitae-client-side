<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';

export default {
  methods: {
    ...mapActions(useMainStore, ['doLinkedinAuth'])
  },
  created() {
    if (this.$route.query.hasOwnProperty('error')) {
      this.$router.push('/login')
    } else {
      this.doLinkedinAuth(this.$route.query.code)
    }
  },
}
</script>

<template></template>