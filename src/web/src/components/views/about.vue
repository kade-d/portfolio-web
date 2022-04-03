<template>
  <div class="about">
    <div class="about__blog-post">
      <blog-card></blog-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "../app/blog-card.vue";
</script>

<style scoped lang="scss">
.about {
  display: grid;
  justify-items: center;
  padding-top: 1rem;

  &__blog-post {
    max-width: 50%;
  }
}
</style>
