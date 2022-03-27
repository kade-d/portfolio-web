<template>
  <div>
    <base-card class="panel">
      <template #title> Home </template>
      <template #content> Kade Dentel </template>
    </base-card>
  </div>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import BaseCard from "@/components/library/base-card.vue";
</script>

<style scoped>
.panel {
  height: 80vh;
}
</style>
