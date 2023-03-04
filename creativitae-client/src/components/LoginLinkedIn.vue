<script>
import { mapActions, mapState, mapWritableState } from 'pinia';
import { useMainStore } from '../stores/main';
export default {
    methods: {
        ...mapActions(useMainStore, ['doLogin', 'callback', 'doLinkedinLogin']),
        login(formData) {
            this.doLogin(formData)
        },

        linkedinLogin() {
            this.doLinkedinLogin()
        }
    }
}
</script>

<template>
    <div class="form-content flex justify-center items-center gap-8 mb-4">
        <button @click.prevent="linkedinLogin"
            class=" bg-green-500 px-4 py-2 w-[10rem] border-white border-2 border-solid rounded-3xl text-white font-semibold drop-shadow-xl hover:scale-110 hover:bg-green-300 transition-all">Spotify
            Login</button>
    </div>
</template>

<style></style>