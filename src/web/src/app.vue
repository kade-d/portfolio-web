<template>
  <n-config-provider
    :theme="useDarkTheme ? darkTheme : lightTheme"
    :theme-overrides="themeOverrides"
  >
    <the-shell>
      <template #top>
        <n-space class="nav" justify="center" align="center" :size="[50, 0]">
          <router-link
            v-for="r in topLevelRoutes"
            :key="r.name"
            :to="r.path"
            custom
            v-slot="{ href, route, navigate, isActive }"
          >
            <n-button text @click="navigate()">
              {{ route.name }}
            </n-button>
          </router-link>
        </n-space>
        <n-button @click="useDarkTheme = !useDarkTheme">
          Toggle Dark Theme
        </n-button>
      </template>
      <router-view></router-view>
    </the-shell>
  </n-config-provider>
</template>

<script setup lang="ts">
import TheShell from "./components/the-shell.vue";
import topLevelRoutes from "./router/top-level-routes";
import {
  darkTheme,
  GlobalThemeOverrides,
  lightTheme,
  NButton,
  NConfigProvider,
  NSpace,
} from "naive-ui";
import { ref } from "vue";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: "#4f5d7e",
  },
};

const useDarkTheme = ref(false);
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  padding-left: 1rem;
}
</style>
