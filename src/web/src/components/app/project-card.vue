<template>
  <div class="project-card">
    <m-card>
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
          :key="imagePath"
          :src="imagePath"
        />
      </template>
      <template #default>
        <div v-if="project.description">{{ project.description }}</div>
      </template>
    </m-card>
  </div>
</template>

<script setup lang="ts">
import ExternalLink from "@/components/library/external-link.vue";
import GithubLink from "@/components/library/github-link.vue";
import ImageHelper from "@/components/library/image-helper.vue";
import MCard from "@/components/library/m-card.vue";
import Project from "@/types/project";

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
