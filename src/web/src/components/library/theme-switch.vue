<template>
  <div class="theme-switch">
    <div
      class="oval"
      :class="{
        'oval--light': theme === Theme.Light,
        'oval--dark': theme === Theme.Dark,
      }"
      :style="`background-color: ${theme === Theme.Light ? 'grey' : 'black'}`"
    >
      <n-icon class="icon" size="18px" @click="toggleTheme">
        <transition>
          <sun v-if="theme === Theme.Light" class="icon__sun"></sun>
          <moon v-else class="icon__moon"></moon>
        </transition>
      </n-icon>
    </div>
  </div>
</template>

<script setup lang="ts">
import { NIcon } from "naive-ui";
import { Sun, Moon } from "@vicons/tabler";
import Theme from "@/types/theme";

const props = defineProps<{
  theme: Theme;
}>();

const emit = defineEmits<{
  (eventName: "themeChanged", theme: Theme): void;
}>();

function toggleTheme() {
  let newTheme = props.theme === Theme.Light ? Theme.Dark : Theme.Light;
  emit("themeChanged", newTheme);
}
</script>

<style scoped lang="scss">
.oval {
  display: flex;
  width: 32px;
  height: 18px;
  background-color: white;
  border-radius: 16px;
  user-select: none;
  cursor: pointer;

  .icon {
    width: 100%;
    * {
      position: absolute;
    }
    &__moon {
      right: 0;
    }
    &__sun {
      left: 0;
    }
  }
}

// ANIMATION
.v-enter-active {
  transition: all 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
  &.icon__moon {
    transform: translateX(-10px) rotate(180deg);
  }
  &.icon__sun {
    transform: translateX(10px) rotate(-90deg);
  }
}
</style>
