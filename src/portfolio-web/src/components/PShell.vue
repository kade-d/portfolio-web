<template>
  <div class="min-h-full">
    <Disclosure as="nav" class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <!-- put filler image here -->
            </div>
            <div class="hidden md:block">
              <div class="ml-10 flex items-baseline space-x-4">
                <a
                  v-for="item in navigation"
                  :key="item.name"
                  :href="item.href"
                  :class="[
                    isCurrent(item.name)
                      ? 'bg-gray-900 text-white'
                      : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'px-3 py-2 rounded-md text-sm font-medium',
                  ]"
                  @click="currentNavigation = item.name"
                  :aria-current="isCurrent(item.name) ? 'page' : undefined"
                  >{{ item.name }}</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>

    <header class="bg-white shadow">
      <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <h1 class="text-3xl font-bold text-gray-900">
          {{ currentNavigation }}
        </h1>
      </div>
    </header>
    <main>
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <!-- Replace with your content -->
        <div class="px-4 py-6 sm:px-0">
          <div class="border-4 border-dashed border-gray-200 rounded-lg h-96" />
        </div>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import { ref } from "vue";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Interests", href: "#" },
  { name: "About", href: "#" },
];

const currentNavigation = ref("Home");

function isCurrent(navigation: string) {
  return currentNavigation.value == navigation;
}
</script>
