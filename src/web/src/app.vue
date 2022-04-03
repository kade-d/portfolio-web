<template>
  <the-shell>
    <template #top>
      <n-space class="nav" align="center" justify="center">
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
    </template>
    <router-view></router-view>
  </the-shell>
</template>

<script setup lang="ts">
import TheShell from "./components/the-shell.vue";
import topLevelRoutes from "./router/top-level-routes";
import { NButton, NSpace } from "naive-ui";
</script>

<style scoped lang="scss">
.nav {
  height: 100%;
  padding-left: 1rem;
}
</style>
