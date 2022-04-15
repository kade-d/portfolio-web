<template>
  <div class="blog-card">
    <n-card v-if="latestEntry">
      <template #cover>
        <image-helper :src="postThumbnail ?? ''" />
      </template>
      <template #header>
        <div class="blog-card__title">
          Latest Blog Post
          <external-link :link="postLink"></external-link>
        </div>
      </template>
      {{ latestEntry.title.$t }}
    </n-card>
    <n-spin v-else></n-spin>
  </div>
</template>

<script setup lang="ts">
import { NCard, NSpin } from "naive-ui";

import * as $ from "jquery";
import { computed, onMounted, Ref, ref } from "vue";
import ExternalLink from "../library/external-link.vue";
import ImageHelper from "../library/image-helper.vue";
const latestEntry: Ref<Entry | undefined> = ref();

const postThumbnail = computed(() => {
  var baseUrl = latestEntry.value?.media$thumbnail.url.split("=")[0];
  return baseUrl;
});

const postLink = computed(() => {
  let links = latestEntry.value?.link;
  return (
    links?.find((link: Link) => link.title === latestEntry.value?.title.$t)
      ?.href ?? ""
  );
});

function loadBlogs() {
  $.ajax({
    url: "https://blog.kadedentel.com/feeds/posts/default?alt=json-in-script",
    type: "get",
    dataType: "jsonp",
    cache: false,
    success: function (data: BlogResponse) {
      onBlogsLoaded(data);
    },
  });
}

function onBlogsLoaded(blog: BlogResponse) {
  latestEntry.value = blog.feed.entry?.[0];
}

onMounted(() => {
  loadBlogs();
});
</script>

<style scoped lang="scss">
.blog-card {
  &__title {
    display: flex;
    gap: 1rem;
  }
}
</style>
