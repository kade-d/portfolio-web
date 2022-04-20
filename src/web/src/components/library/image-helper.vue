<template>
  <div class="image-helper">
    <n-spin v-if="!isLoaded" class="image__spinner"></n-spin>
    <img
      v-show="isLoaded"
      ref="image"
      class="image-helper__image"
      :src="src"
      @error="onLoadError"
      @load="isLoaded = true"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { NSpin } from "naive-ui";

const props = defineProps<{
  src: string; // must follow vite specific static asset loading @see https://vitejs.dev/guide/assets.html#new-url-url-import-meta-url
  fallbackSrc?: string;
}>();

const image = ref(); // element ref

const isLoaded = ref(false);

function onLoadError() {
  image.value.target.src = props.fallbackSrc;
}
</script>

<style scoped lang="scss">
.image-helper {
  display: flex;
  justify-content: center;
  object-fit: cover;
  &__spinner {
    margin: 3rem;
  }
  &__image {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
