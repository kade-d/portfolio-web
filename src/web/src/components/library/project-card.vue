<template>
  <div class="project-card">
    <n-card>
      <template #header>
        <div class="project-card__header">
          {{ project.title }}
          <external-link
            v-if="project.link"
            :link="project.link"
          ></external-link>
          <github-link
            v-if="project.githubLink"
            :link="project.githubLink"
          ></github-link>
        </div>
      </template>
      <template #cover>
        <image-helper
          class="project-card__image"
          v-for="imagePath of project.imagePaths"
          :src="imagePath"
        />
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import ImageHelper from "@/components/library/image-helper.vue";
import Project from "@/types/project";
import { NCard } from "naive-ui";
import ExternalLink from "@/components/library/external-link.vue";
import GithubLink from "./github-link.vue";

defineProps<{
  project: Project;
}>();
</script>

<style scoped lang="scss">
.project-card {
  &__header {
    display: flex;
    gap: 0.5rem;
  }
}
</style>
