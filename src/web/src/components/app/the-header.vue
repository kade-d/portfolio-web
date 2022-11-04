<template>
  <div class="header">
    <div class="header__left"></div>
    <div class="header__middle"></div>
    <div class="header__right">
      <theme-switch
        class="header__theme-switch"
        :selected-theme="selectedTheme"
        @theme-changed="(newTheme: Theme) => emit('themeChanged', newTheme)"
      ></theme-switch>
    </div>
  </div>
</template>

<script setup lang="ts">
import Theme from "@/types/theme";
import ThemeSwitch from "@/components/library/theme-switch.vue";

defineProps<{ selectedTheme: Theme }>();

const emit = defineEmits<{
  (eventName: "themeChanged", theme: Theme): void;
}>();
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: 10% 80% 10%;
  height: 100%;

  &__middle {
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: 2vw;
  }

  &__right {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 1rem;
  }
}
</style>
