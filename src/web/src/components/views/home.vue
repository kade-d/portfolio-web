<template>
  <div class="home">
    <n-h1>I'm a full stack web developer</n-h1>
  </div>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
</script>

<style scoped lang="scss">
.home {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  > .n-h1 {
    text-align: center;
  }
}
</style>
