<template>
  <div class="projects">
    <div class="projects__grid">
      <project-card
        v-for="project of projects"
        :title="project.title"
        class="projects__card"
      >
        <image-helper
          class="projects__image"
          v-for="imagePath of project.imagePaths"
          :src="imagePath"
        />
      </project-card>
    </div>
  </div>
</template>

<script setup lang="ts">
import ProjectCard from "../library/project-card.vue";
import { Ref, ref } from "vue";
import ImageHelper from "../library/image-helper.vue";

const projects: Ref<Project[]> = ref([
  {
    title: "Replay Review",
    imagePaths: ["./../../assets/projects/vod-review/vod-review.jpeg"],
  },
  {
    title: "Replay Review",
    imagePaths: ["./../../assets/projects/vod-review/vod-review.jpeg"],
  },
  {
    title: "Replay Review",
    imagePaths: ["./../../assets/projects/vod-review/vod-review.jpeg"],
  },
]);

interface Project {
  title: string;
  imagePaths: string[];
}
</script>

<style scoped lang="scss">
.projects {
  padding: 1rem 5rem;
  &__grid {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-basis: 0;
    flex-direction: row;
    gap: 1rem;
  }
}
</style>
