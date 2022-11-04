<template>
  <div class="projects">
    <vertical-page>
      <div class="projects__content">
        <div class="projects__grid">
          
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
    </vertical-page>
  </div>
</template>

<script setup lang="ts">
import MBadge from "@/components/library/m-badge.vue";
import ProjectCard from "@/components/app/project-card.vue";
import VerticalPage from "@/components/library/vertical-page.vue";

import Badge from "@/types/badge";
import Project from "@/types/project";
import { NElement } from "naive-ui";
import { Ref, ref } from "vue";
import ImageHelper from "../library/image-helper.vue";

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
  &__content {
    display: grid;
    justify-items: center;
    gap: 1rem;
    width: 90%;
    max-width: 1000px;
  }

  &__grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(1, 1fr);
    flex-basis: 0;
    flex-direction: row;

    @media screen and (min-width: 600px) {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  &__badges-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  &__badges {
    border: dashed 0.25rem var(--primary-color);
    border-radius: 1rem;
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(4, minmax(0, 1fr));
    padding: 1rem 2rem;
    width: 100%;
    max-width: 450px;
  }
}

.project-card > :deep(.n-card) {
  height: 100%;
}
</style>
