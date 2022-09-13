<template>
  <n-scrollbar>
    <div class="about">
      <vertical-page>
        <me-card class="about__me"></me-card>
        <blog-card class="about__blog"></blog-card>
      </vertical-page>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { NScrollbar } from "naive-ui";
import BlogCard from "../app/blog-card.vue";
import MeCard from "../app/me-card.vue";
import VerticalPage from "../library/vertical-page.vue";
</script>
<style scoped lang="scss">
.about {
  &__me,
  &__blog {
    width: 50%;
  }
}
</style>
