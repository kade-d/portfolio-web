<template>
  <div class="the-shell">
    <div
      class="the-shell__top"
      :style="`color: ${theme.textColorBase}; background-color: ${theme.primaryColor}`"
    >
      <slot name="top"></slot>
    </div>

    <div
      class="the-shell__content"
      :style="`color: ${theme.textColorBase}; background-color: ${theme.bodyColor}`"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useThemeVars } from "naive-ui";

const theme = useThemeVars();
</script>

<style scoped lang="scss">
.the-shell {
  height: 100vh;

  &__top {
    height: 3rem;
  }

  &__content {
    min-height: calc(100vh - 3rem);
  }
}
</style>
