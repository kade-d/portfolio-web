<template>
  <n-config-provider
    :theme="theme === Theme.Dark ? darkTheme : lightTheme"
    :theme-overrides="
      theme === Theme.Dark ? darkThemeOverrides : lightThemeOverrides
    "
  >
    <the-shell>
      <template #top>
        <the-header
          :selected-theme="theme"
          @theme-changed="(newTheme) => (theme = newTheme)"
        ></the-header>
      </template>
      <hero-background>
        <pages></pages>
      </hero-background>
    </the-shell>
  </n-config-provider>
</template>

<script setup lang="ts">
import TheShell from "./components/the-shell.vue";
import {
  darkTheme,
  GlobalThemeOverrides,
  lightTheme,
  NConfigProvider,
} from "naive-ui";
import Theme from "@/types/theme";
import { provide, Ref, ref } from "vue";
import TheHeader from "./components/app/the-header.vue";
import HeroBackground from "./components/library/hero-background.vue";
import Pages from "./components/views/pages.vue";

const theme: Ref<Theme> = ref(Theme.Dark);

provide("theme", theme);

const lightThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: "",
    primaryColor: "rgb(81, 162, 233)",
    // todo: fix boxShadow1 for dark mode
  },
};

const darkThemeOverrides: GlobalThemeOverrides = {
  common: {
    baseColor: "",
    primaryColor: "rgb(81, 162, 233)",
    // todo: fix boxShadow1 for dark mode
  },
};
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  padding-left: 1rem;
}
</style>
