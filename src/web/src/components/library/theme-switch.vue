<template>
  <div class="theme-switch">
    <n-icon
      class="theme-switch__icon"
      size="2rem"
      :color="
        selectedTheme === Theme.Light ? theme.primaryColor : theme.primaryColor
      "
      @click="toggleTheme"
    >
      <transition>
        <sun
          v-if="selectedTheme === Theme.Light"
          class="theme-switch__sun"
        ></sun>
        <moon v-else class="theme-switch__moon"></moon>
      </transition>
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { NIcon, useThemeVars } from "naive-ui";
import { Sun, Moon } from "@vicons/tabler";
import Theme from "@/types/theme";

const props = defineProps<{
  selectedTheme: Theme;
}>();

const theme = useThemeVars();

const emit = defineEmits<{
  (eventName: "themeChanged", theme: Theme): void;
}>();

function toggleTheme() {
  let newTheme = props.selectedTheme === Theme.Light ? Theme.Dark : Theme.Light;
  emit("themeChanged", newTheme);
}
</script>

<style scoped lang="scss">
.theme-switch {
  user-select: none;

  &__moon,
  &__sun {
    cursor: pointer;
    &:hover {
      filter: brightness(1.2);
    }
  }
}

// ANIMATION
.v-enter-active {
  -moz-transition: transform 0.4s ease;
  -webkit-transition: transform 0.4s ease;
  transition: transform 0.4s ease;
}

.v-enter-from,
.v-leave-to {
  &.theme-switch__moon {
    transform: rotate(180deg);
  }
  &.theme-switch__sun {
    transform: rotate(-90deg);
  }
}
</style>
