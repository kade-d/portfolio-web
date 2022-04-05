<template>
  <div class="about">
    <me-card class="about__me"></me-card>
    <blog-card class="about__blog"></blog-card>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "../app/blog-card.vue";
import MeCard from "../app/me-card.vue";
</script>

<style scoped lang="scss">
.about {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding-top: 1rem;
  row-gap: 2rem;

  &__me {
    width: 50%;
  }

  &__blog {
    width: 50%;
  }
}
</style>
