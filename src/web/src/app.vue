<template>
  <n-config-provider
    :theme="theme === Theme.Dark ? darkTheme : lightTheme"
    :theme-overrides="themeOverrides"
  >
    <the-shell>
      <template #top>
        <div class="top">
          <div class="top__left"></div>
          <div class="top__middle">
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
          </div>
          <div class="top__right">
            <theme-switch
              class="top__theme-switch"
              :theme="theme"
              @theme-changed="(newTheme) => (theme = newTheme)"
            ></theme-switch>
          </div>
        </div>
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
} from "naive-ui";
import Theme from "@/types/theme";
import { Ref, ref } from "vue";
import ThemeSwitch from "./components/library/theme-switch.vue";
import variables from "./scss/variables";

const themeOverrides: GlobalThemeOverrides = {
  common: {
    primaryColor: variables.colorForeground,
  },
};

const theme: Ref<Theme> = ref(Theme.Light);
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  padding-left: 1rem;
}

.top {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  height: 100%;

  &__middle {
    display: flex;
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
