<template>
  <div class="me-card">
    <n-card>
      <template #cover>
        <image-helper :src="meImage" />
      </template>
      <template #header>
        <div class="blog-card__title">Kade Dentel</div>
      </template>
      <template #default>
        I grew up with a passion for technology. Ever since writing my first
        program on a TI-84 calculator, I've been hard at work to write bigger
        and better applications. I'm motivated by creating meaningful software
        on cohesive and driven teams.
      </template>
    </n-card>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";
import { computed } from "vue";
import ImageHelper from "../library/image-helper.vue";

const meImage = computed(
  () => new URL("../../assets/kade-dentel.jpg", import.meta.url).href
);
</script>

<style scoped lang="scss"></style>
