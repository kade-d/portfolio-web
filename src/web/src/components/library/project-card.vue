<template>
  <div class="project-card">
    <n-card>
      <template #header>{{ title }}</template>
      <template #cover>
        <slot></slot>
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";

defineProps<{
  title: string;
}>();
</script>

<style scoped lang="scss"></style>
