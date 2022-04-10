<template>
  <div class="external-link">
    <n-icon
      class="external-link__icon"
      ref="iconEl"
      :color="isIconHovered ? theme.iconColorHover : ''"
      @click="navigate(link)"
    >
      <slot><external-link-icon></external-link-icon></slot>
    </n-icon>
  </div>
</template>

<script setup lang="ts">
import { NIcon, useThemeVars } from "naive-ui";
import { ExternalLink as ExternalLinkIcon } from "@vicons/tabler";
import { ref } from "vue";
import { useElementHover } from "@vueuse/core";

const iconEl = ref();
const isIconHovered = useElementHover(iconEl);
const theme = useThemeVars();

defineProps<{
  link: string;
}>();

function navigate(link: string) {
  window.open(link, "_blank");
}
</script>

<style scoped lang="scss">
.external-link {
  display: flex;
  align-items: center;

  &__icon {
    cursor: pointer;
  }
}
</style>
