<template>
  <div class="about">
    <div class="about__blog-post" v-if="latestEntry">
      <n-card title="Latest Blog Post">
        <template #cover>
          <img :src="blogThumbnail" />
        </template>
        {{ latestEntry.title.$t }}
      </n-card>
    </div>
    <div v-else>loading</div>
  </div>
</template>

<script setup lang="ts">
import { NCard } from "naive-ui";
import { computed, onMounted, Ref, ref } from "vue";
import * as $ from "jquery";

const latestEntry: Ref<Entry | undefined> = ref();

const blogThumbnail = computed(() => {
  var baseUrl = latestEntry.value?.media$thumbnail.url.split("=")[0];
  return baseUrl;
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
.about {
  display: grid;
  justify-items: center;
  padding-top: 1rem;

  &__blog-post {
    max-width: 50%;
  }
}
</style>
