<template>
  <vertical-page class="project">
    <n-h1>{{ project.title }}</n-h1>
    <project-card :project="project" class="project__card"></project-card>
  </vertical-page>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import Project from "@/types/project";
import ProjectCard from "@/components/library/project-card.vue";
import VerticalPage from "@/components/library/vertical-page.vue";

defineProps<{
  project: Project;
}>();
</script>

<style scoped lang="scss">
.project {
  &__card {
    margin: 0 16px;
    max-width: 800px;
  }
}
</style>
