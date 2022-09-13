<template>
  <n-scrollbar>
    <div class="projects">
      <div class="projects__content">
        <div class="projects__grid">
          <project-card
            v-for="project of projects"
            :project="project"
            class="projects__card"
          >
          </project-card>
        </div>
        <n-element class="projects__badges-wrapper">
          <div class="projects__badges">
            <m-badge v-for="badge of badges" :key="badge.image">
              <template #image>
                <image-helper :src="badge.image"></image-helper>
              </template>
            </m-badge>
          </div>
        </n-element>
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
  display: flex;
  justify-content: center;
  padding: 1rem;
  @media screen and (min-width: 900px) {
    padding: 2rem 5rem 0 5rem;
  }

  &__content {
    display: grid;
    justify-items: center;
    gap: 1rem;
    width: 70%;
    @media screen and (min-width: 500px) {
      gap: 3rem;
      width: 100%;
    }
  }

  &__grid {
    display: grid;
    gap: 1rem;
    flex-basis: 0;
    flex-direction: row;

    @media screen and (max-width: 500px) {
      grid-template-columns: repeat(1, 1fr);
    }

    @media screen and (max-width: 900px) and (min-width: 500px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (min-width: 900px) {
      grid-template-columns: repeat(3, 1fr);
    }
  }

  &__badges-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__badges {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    border: dashed 4px var(--primary-color);
    display: grid;
    padding: 1rem 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    border-radius: 1rem;
    width: 100%;
    gap: 2rem;
    @media screen and (min-width: 550px) {
      width: 50%;
    }
  }
}
</style>
