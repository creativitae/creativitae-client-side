<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/main';
export default {
    computed: {
        ...mapState(useMainStore, ['image', 'image_list', 'preview', 'preview_list', 'fileName'])
    },
    methods: {
        ...mapActions(useMainStore, ['multipleImage', 'singleImage', 'getServer']),
        previewMultiImage(){
            this.multipleImage()
        },
        previewSingleImage() {
            this.singleImage()
        },
        handleGetServer(img) {
            this.getServer(img)
        }
    }
}
</script>

<template>
    <div id="app" class="container my-3">
        <div class="row">
            <div class="col-12 text-center">
                <h1 class="mb-3">Upload Image</h1>
            </div>
            <div class="col-md-5 offset-md-1">
                <h5>1. single file</h5>
                <form>
                    <div class="form-group">
                        <label for="my-file">Select Image</label>
                        <input type="file" accept="image/*" @change="previewSingleImage" class="form-control-file" id="my-file">

                        <div class="border p-2 mt-3">
                            <p>Preview Here:</p>
                            <template v-if="preview">
                                <img :src="preview" class="img-fluid" />
                                <p class="mb-0">file name: {{ image.name }}</p>
                                <p class="mb-0">size: {{ image.size / 1024 }}KB</p>
                            </template>
                        </div>
                    </div>
                </form>
                <button @click.prevent="handleGetServer(fileName)" class="block text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">send data</button>
            </div>

           

            <div class="w-100"></div>
            <div class="col-12 mt-3 text-center">
                <p class="text-primary">* You should send data "image" & "image_list" via API to upload image files.</p>
                Reset input file <button @click="reset">Clear All</button>
            </div>
        </div>
    </div>
</template>

<style>
</style>