<template>
  <div class="pages" @wheel="onWheel" v-swipe.up.down="onSwipe">
    <section id="home" class="pages__section">
      <home></home>
    </section>
    <section
      v-for="project of projects"
      :key="project.title"
      :id="`projects-${project.title}`"
      class="pages__section"
    >
      <project :project="project" class="project"> </project>
    </section>
    <section id="about" class="pages__section">
      <about></about>
    </section>
    <div class="pages__navigation">
      <n-button
        v-if="availableDirections.includes(Direction.UP)"
        circle
        @click="onNavigate(Direction.UP)"
        ><n-icon color="white"><arrow-bar-to-up></arrow-bar-to-up></n-icon
      ></n-button>
      <n-button
        v-if="availableDirections.includes(Direction.DOWN)"
        circle
        @click="onNavigate(Direction.DOWN)"
        ><n-icon color="white"><arrow-bar-to-down></arrow-bar-to-down></n-icon
      ></n-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NButton, NIcon } from "naive-ui";
import { ArrowBarToDown, ArrowBarToUp } from "@vicons/tabler";
import { computed, onMounted, provide, ref } from "vue";
import about from "@/components/app/pages/about.vue";
import home from "@/components/app/pages/home.vue";
import project from "@/components/app/pages/project.vue";
import projects from "@/data/projects";
import vSwipe from "@/directives/v-swipe";
import { Direction } from "@/types/swipe-state";
import { navigateKey } from "@/types/injection-keys";

const sections = ref<any>([]);
const sectionIndex = ref(0);
const isScrolling = ref(false);

onMounted(() => {
  sections.value = document.querySelectorAll("section");
});

const availableDirections = computed(() => {
  const directions = [];
  if (sectionIndex.value > 0) {
    directions.push(Direction.UP);
  }
  if (sectionIndex.value + 1 < sections.value.length) {
    directions.push(Direction.DOWN);
  }
  return directions;
});

const onSwipe = (direction: Direction) => {
  switch (direction) {
    case Direction.UP:
      onNavigate(Direction.DOWN);
      break;
    case Direction.DOWN:
      onNavigate(Direction.UP);
      break;
  }
};

const onWheel = (e: WheelEvent) => {
  e.preventDefault();
  onNavigate(e.deltaY > 0 ? Direction.DOWN : Direction.UP);
};

var scrollTimeout: NodeJS.Timeout | undefined;

const onNavigate = (direction: Direction) => {
  if (isScrolling.value || !availableDirections.value.includes(direction)) {
    return;
  }
  isScrolling.value = true;
  clearTimeout(scrollTimeout);
  scrollTimeout = setTimeout(() => (isScrolling.value = false), 500);

  sectionIndex.value =
    direction === Direction.DOWN
      ? sectionIndex.value + 1
      : sectionIndex.value - 1;
  const nextSection = sections.value[sectionIndex.value];

  nextSection?.scrollIntoView({
    behavior: "smooth",
  });
};

provide(navigateKey, onNavigate);
</script>

<style scoped lang="scss">
.pages {
  width: 100%;
  height: min-content;
  overflow: hidden;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }

  &__section {
    height: 100vh;
    overflow: hidden; // todo: make each project its own page so we can avoid overflow issues
  }

  &__navigation {
    position: absolute;
    display: flex;
    flex-flow: column;
    gap: 8px;
    bottom: 16px;
    right: 16px;
  }
}
</style>
