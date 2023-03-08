<script>
import { mapActions, mapState } from 'pinia'
import { useMainStore } from '../stores/main';
export default {
  computed: {
    ...mapState(useMainStore, ['image', 'image_list', 'preview', 'preview_list', 'fileName'])
  },
  methods: {
    ...mapActions(useMainStore, ['multipleImage', 'singleImage', 'getServer']),
    previewMultiImage() {
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
      <div class="col-md-5 offset-md-1">
      <form>
          <div class="form-group">
            <label for="my-file"
              class=" bg-theme-red px-4 py-3 rounded-lg text-white font-bold cursor-pointer hover:bg-red-400">
              <input type="file" accept="image/*" @change="previewSingleImage" class="" id="my-file"
                style="display: none;" />
              Upload Image
            </label>
            <div v-if="preview" class="border px-2 py-4 mt-5 flex flex-col justify-center items-center">
              <template v-if="preview">
                <img :src="preview" class="img-fluid object-cover w-[122px] h-[122px] rounded-full" />
              </template>
              <button v-if="preview" @click.prevent="handleGetServer(fileName)"
                class="block text-white bg-theme-red hover:bg-red-400 focus:ring-4 focus:ring-red-400 font-medium rounded-lg mt-4 px-5 py-2.5 text-center">Upload</button>
            </div>
          </div>
        </form>

      </div>
      <div class="w-100"></div>
      <div class="col-12 mt-3 text-center">
        <!-- <p class="text-primary">* You should send data "image" & "image_list" via API to upload image files.</p>
                              Reset input file <button @click="reset">Clear All</button> -->
      </div>
    </div>
  </div>
</template>

<style></style>