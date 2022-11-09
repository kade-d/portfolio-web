<template>
  <div class="home">
    <slide-in class="slide-in">
      <n-h1 class="home__title">I'm a full stack web developer</n-h1>
      <n-button
        ref="viewMyWork"
        class="home__view"
        round
        size="large"
        @click="onClickViewMyWork"
        >View My Work</n-button
      >
    </slide-in>
  </div>
</template>

<script setup lang="ts">
import { NH1, NButton } from "naive-ui";
import SlideIn from "@/components/library/slide-in.vue";
import { inject, ref } from "vue";
import { navigateKey } from "@/types/injection-keys";
import { Direction } from "@/types/swipe-state";
import { unrefElement } from "@vueuse/core";

const viewMyWork = ref();

const navigate = inject(navigateKey, () => undefined);

const onClickViewMyWork = (event: MouseEvent) => {
  navigate(Direction.DOWN);
  unrefElement(viewMyWork.value).blur(); // remove focus from button as navigating back with it highlighted is confusing
};
</script>

<style scoped lang="scss">
.home {
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;

  .slide-in {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 32px;
  }

  &__title {
    margin: 0 16px;
    text-align: center;
  }

  &__view {
    width: min-content;
  }
}
</style>
