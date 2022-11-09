<template>
  <div class="about">
    <vertical-page>
      <me-card class="about__me"></me-card>
      <blog-card class="about__blog"></blog-card>
    </vertical-page>
  </div>
</template>

<script setup lang="ts">
import BlogCard from "../blog-card.vue";
import MeCard from "../me-card.vue";
import VerticalPage from "../../library/vertical-page.vue";
</script>
<style scoped lang="scss">
.about {
  height: 100%;
  &__me,
  &__blog {
    width: 90%;
    max-width: 570px;
  }
}
</style>
