<template>
  <div class="image">
    <n-spin v-if="!isLoaded" class="image__spinner"></n-spin>
    <img
      v-show="isLoaded"
      ref="image"
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
  src?: string;
  fallbackSrc?: string;
}>();

const image = ref();

const isLoaded = ref(false);

function onLoadError() {
  image.value.target.src = props.fallbackSrc;
}
</script>

<style scoped lang="scss">
.image {
  display: flex;
  justify-content: center;
  &__spinner {
    margin: 3rem;
  }
}
</style>
