<template>
  <div class="vertical-page">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.vertical-page {
  display: flex;
  flex-flow: column;
  align-items: center;
  width: 100%;
  padding: 1rem 0;
  row-gap: 2rem;
}
</style>
