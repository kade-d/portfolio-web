<template>
  <div class="the-shell">
    <div class="the-shell__top" :style="`color: ${theme.textColorBase}; `">
      <slot name="top"></slot>
    </div>
    <div class="the-shell__content" :style="`color: ${theme.textColorBase};`">
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
  width: 100%;

  &__top {
    height: 4rem;
    position: fixed;
    width: 100%;
    z-index: 1;
  }

  &__content {
    position: absolute;
    width: 100%;
    top: 0;
    bottom: 0;
  }
}
</style>
