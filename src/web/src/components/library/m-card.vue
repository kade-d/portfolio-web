<template>
  <n-card :class="getModifiedClass('m-card')" class="test">
    <template #header>
      <slot name="header"></slot>
    </template>
    <template #cover>
      <slot name="cover"></slot>
    </template>
    <template #default>
      <slot name="default"></slot>
    </template>
  </n-card>
</template>

<script setup lang="ts">
import Theme from "@/types/theme";
import { NCard } from "naive-ui";
import { inject, ref, Ref } from "vue";

const theme: Ref<Theme> = inject("theme", ref(Theme.Dark));

function getModifiedClass(baseClass: string) {
  const classes: Record<string, boolean> = {};
  classes[`${baseClass}`] = true;
  classes[`${baseClass}--light`] = theme.value === Theme.Light;
  classes[`${baseClass}--dark`] = theme.value === Theme.Dark;
  return classes;
}
</script>

<style scoped lang="scss">
.m-card {
  &--light {
    border: 1px solid rgb(224, 224, 230);
  }
}
</style>
