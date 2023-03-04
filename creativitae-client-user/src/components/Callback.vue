<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useCounterStore } from '../stores/counter';

  export default {
    methods: {
      ...mapActions(useCounterStore, ['doLinkedinAuth'])
    },
    created() {
        // console.log('masuk sini')
        // console.log(this.$route.query)
      if (this.$route.query.hasOwnProperty('error')) {
          this.$router.push('/login')
      } else {
        this.doLinkedinAuth(this.$route.query.code)
      }
      
    },
  }
</script>

<template>

</template>