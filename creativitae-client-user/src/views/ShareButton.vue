<template>
  <s-linked-in
    :window-features="windowFeatures"
    :share-options="shareOptions"
    :use-native-behavior="useNativeBehavior"
    @popup-close="onClose"
    @popup-open="onOpen"
    @popup-block="onBlock"
    @popup-focus="onFocus"
  ></s-linked-in>
</template>

<script>
  import { SLinkedIn } from 'vue-socials'

  export default {
    name: 'SLinkedInSharing',
    
    components: { SLinkedIn },
    
    data() {
      return {
        windowFeatures: {},
        shareOptions: {
          url: 'https://github.com/',
        },
        useNativeBehavior: false,
      }
    },
    
    methods: {
      onClose() {},
      onOpen() {},
      onBlock() {},
      onFocus() {},
    }
  };
</script>