<template>
  <div class="projects">
    <vertical-page>
      <n-carousel class="carousel" :show-arrow="true">
        <img
          class="carousel-img"
          src="@/assets/projects/vod-review/vod-review.jpeg"
        />
        <img class="carousel-img" src="@/assets/projects/ohana/ohana.png" />
        <img
          class="carousel-img"
          src="@/assets/projects/merit-engine/merit-engine.png"
        />
      </n-carousel>
    </vertical-page>
  </div>
</template>

<script setup lang="ts">
import { NCarousel } from "naive-ui";
import VerticalPage from "../library/vertical-page.vue";
</script>

<style scoped lang="scss">
.carousel {
  width: 50%;
}

.carousel-img {
  width: 100%;
  aspect-ratio: 16/9; // experimental
  object-fit: cover;
}
</style>
