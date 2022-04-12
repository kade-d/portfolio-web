<template>
  <div class="m-button" :style="(cssVariables as any)">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";

const props = withDefaults(
  defineProps<{
    textColor?: string;
    borderColor?: string;
    backgroundColor?: string;
    hoverBoxShadow?: string;
  }>(),
  {
    textColor: "",
    borderColor: "",
    backgroundColor: "",
    hoverBoxShadow: "",
  }
);

const cssVariables = computed(() => {
  return {
    "--text-color": props.textColor,
    "--border-color": props.borderColor,
    "--background-color": props.backgroundColor,
    "--hover-box-shadow": props.hoverBoxShadow,
  };
});
</script>

<style scoped lang="scss">
.m-button {
  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  color: var(--text-color);
  border-radius: 0.25rem;
  padding: 0.5rem 1rem;
  user-select: none;
  cursor: pointer;

  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: var(--hover-box-shadow);
  }
}
</style>
