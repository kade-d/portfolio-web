<template>
  <n-scrollbar>
    <div class="projects">
      <div class="projects__grid">
        <project-card
          v-for="project of projects"
          :project="project"
          class="projects__card"
        >
        </project-card>
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import { NScrollbar } from "naive-ui";
import ProjectCard from "../library/project-card.vue";
import Project from "@/types/project";
import { Ref, ref } from "vue";

const projects: Ref<Project[]> = ref([
  {
    title: "Replay Review",
    imagePaths: ["./../../assets/projects/vod-review/vod-review.jpeg"],
    link: "https://bakkesplugins.com/plugins/view/173",
    githubLink: "https://github.com/kade-d/ReplayReview",
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
