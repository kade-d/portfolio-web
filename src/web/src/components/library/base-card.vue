<template>
  <section class="bg-gray-200 shadow rounded-lg">
    <div class="text-3xl pl-10 pt-5">
      <slot name="title"></slot>
    </div>
    <div>
      <slot name="content"></slot>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped></style>
