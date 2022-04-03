<template>
  <div class="the-shell">
    <div class="the-shell__top">
      <slot name="top"></slot>
    </div>

    <div class="the-shell__content">
      <slot></slot>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.the-shell {
  height: 100vh;

  &__top {
    height: 3rem;
    background-color: $color-foreground;
    color: $color-text-foreground;
  }

  &__content {
    min-height: calc(100vh - 3rem);
    background-color: $color-background;
    color: $color-text-background;
  }
}
</style>
