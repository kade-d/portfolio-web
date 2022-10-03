<template>
  <div class="slide">
    <slot></slot>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.slide {
  animation-duration: 0.75s;
  animation-timing-function: ease-in-out;
  animation-delay: 0s;
  animation-name: slideIn;
}

@keyframes slideIn {
  0% {
    transform: translateX(-200%);
  }
  100% {
    transform: translateX(0);
  }
}
</style>
