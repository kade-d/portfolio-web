<template>
  <n-scrollbar>
    <div class="projects">
      <div class="projects__title">
        <n-h1>Projects</n-h1>
      </div>
      <div class="projects__content">
        <n-element class="projects__badges-wrapper">
          <div class="projects__badges">
            <m-badge v-for="badge of badges" :key="badge.image">
              <template #image>
                <image-helper :src="badge.image"></image-helper>
              </template>
            </m-badge>
          </div>
        </n-element>
        <div class="projects__grid">
          <project-card
            v-for="project of projects"
            :project="project"
            class="projects__card"
          >
          </project-card>
        </div>
      </div>
    </div>
  </n-scrollbar>
</template>

<script setup lang="ts">
import MBadge from "@/components/library/m-badge.vue";
import ProjectCard from "@/components/library/project-card.vue";

import Badge from "@/types/badge";
import Project from "@/types/project";
import { NH1, NScrollbar, NElement } from "naive-ui";
import { Ref, ref } from "vue";
import ImageHelper from "../library/image-helper.vue";

const projects: Ref<Project[]> = ref([
  {
    title: "Replay Review",
    imagePaths: [
      new URL(
        "../../assets/projects/vod-review/vod-review.jpg",
        import.meta.url
      ).href,
    ],
    link: "https://bakkesplugins.com/plugins/view/173",
    githubLink: "https://github.com/kade-d/ReplayReview",
  },
  {
    title: "Merit Engine",
    imagePaths: [
      new URL(
        "../../assets/projects/merit-engine/merit-engine.png",
        import.meta.url
      ).href,
    ],
  },
  {
    title: "Ohana",
    imagePaths: [
      new URL("../../assets/projects/ohana/ohana.png", import.meta.url).href,
    ],
  },
]);

const badges: Badge[] = [
  {
    image: new URL("../../assets/projects/badges/js.svg", import.meta.url).href,
  },
  {
    image: new URL("../../assets/projects/badges/csharp.svg", import.meta.url)
      .href,
  },
  {
    image: new URL("../../assets/projects/badges/ts.svg", import.meta.url).href,
  },
  {
    image: new URL("../../assets/projects/badges/vue.svg", import.meta.url)
      .href,
  },
];
</script>

<style scoped lang="scss">
.projects {
  padding: 1rem 5rem;

  &__content {
    display: grid;
    gap: 3rem;
  }

  &__grid {
    display: grid;
    justify-content: center;
    width: 100%;
    flex-basis: 0;
    flex-direction: row;
    grid-template-columns: repeat(3, 1fr);
    gap: 1rem;
  }
  &__badges-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__badges {
    display: grid;
    padding: 1rem 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border: dashed 4px var(--primary-color);
    border-radius: 16px;
    width: 50%;
    gap: 2rem;
  }
}
</style>
