<template>
  <div class="the-shell">
    <n-element>
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
        <n-scrollbar>
          <slot></slot>
        </n-scrollbar>
      </div>
    </n-element>
  </div>
</template>

<script setup lang="ts">
import { useThemeVars, NElement, NScrollbar } from "naive-ui";

const theme = useThemeVars();
</script>

<style scoped lang="scss">
.the-shell {
  height: 100vh;
  width: 100%;

  &__top {
    height: 3rem;
    position: absolute;
    width: 100%;
  }

  &__content {
    position: absolute;
    width: 100%;
    top: 3rem;
    bottom: 0;
  }
}
</style>
