<template>
  <div class="home">
    <hero-background>
      <n-h1>I'm a full stack web developer</n-h1>
    </hero-background>
  </div>
</template>

<script setup lang="ts">
import HeroBackground from "@/components/library/hero-background.vue";
import { NH1 } from "naive-ui";
</script>

<style scoped lang="scss">
.home {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
