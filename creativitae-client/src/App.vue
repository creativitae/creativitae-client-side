<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'
import { mapWritableState } from 'pinia'
import { useMainStore } from './stores/main'

export default {
  components: {
    Navbar,
    Footer
  },
  computed: {
    ...mapWritableState(useMainStore, ['loggedIn', 'isPremium'])
  },
  created() {
    if(localStorage.access_token) {
      this.loggedIn = true
      this.isPremium = localStorage.isPremium
    }else{
      this.loggedIn = false
    }
  }
}

</script>

<template>
  <Navbar v-if="$route.path !== '/register' && $route.path !== '/login'" />
  <router-view />
  <Footer />
</template>

