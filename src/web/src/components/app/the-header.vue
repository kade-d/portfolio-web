<template>
  <div class="header">
    <div class="header__left"></div>
    <div class="header__middle">
      <router-link
        v-for="r in topLevelRoutes"
        :key="r.name"
        :to="r.path"
        custom
        v-slot="{ href, route, navigate, isActive }"
      >
        <m-button
          @click="navigate()"
          :text-color="theme.textColorBase"
          :border-color="isActive ? theme.primaryColor : theme.borderColor"
          :background-color="theme.bodyColor"
          :hover-box-shadow="theme.boxShadow1"
        >
          {{ route.name }}
        </m-button>
      </router-link>
    </div>
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
import topLevelRoutes from "@/router/top-level-routes";
import mButton from "@/components/library/m-button.vue";
import { useThemeVars } from "naive-ui";

defineProps<{ selectedTheme: Theme }>();

const emit = defineEmits<{
  (eventName: "themeChanged", theme: Theme): void;
}>();

const theme = useThemeVars();
</script>

<style scoped lang="scss">
.header {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;

  &__middle {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__right {
    display: flex;
    justify-content: right;
    align-items: center;
    margin-right: 1rem;
  }
}
</style>
