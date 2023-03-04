<script>
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}

</script>

<template>
  <Navbar v-if="$route.path !== '/register' && $route.path !== '/login'" />
  <router-view />
  <Footer />
</template>

