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
                <router-link
                  v-for="r in topLevelRoutes"
                  :key="r.name"
                  :to="r.path"
                  custom
                  v-slot="{ href, route, navigate, isActive }"
                >
                  <a
                    :href="href"
                    :class="[
                      isActive
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'px-3 py-2 rounded-md text-sm font-medium',
                    ]"
                    @click="navigate"
                  >
                    {{ route.name }}
                  </a>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Disclosure>
    <main class="min-h-full">
      <div class="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8 min-h-full">
        <!-- Replace with your content -->
        <slot></slot>
        <!-- /End replace -->
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { Disclosure } from "@headlessui/vue";
import topLevelRoutes from "@/router/top-level-routes";
</script>
