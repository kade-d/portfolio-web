<template>
  <div class="home">
    <slide-in class="slide-in">
      <n-h1>I'm a full stack web developer</n-h1>
    </slide-in>
  </div>
</template>

<script setup lang="ts">
import { NH1 } from "naive-ui";
import SlideIn from "@/components/library/slide-in.vue";
</script>

<style scoped lang="scss">
.home {
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  > .n-h1,
  .slide-in {
    text-align: center;
  }
}
</style>
