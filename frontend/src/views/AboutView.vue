<template>
  <div class="mt-12 flex flex-col gap-6 flex-grow">
    <div class="flex flex-col gap-4">
      <h1 class="text-2xl font-semibold">{{ $t('about.title') }}</h1>
      <divider />
      <div class="flex flex-col gap-2">
        <p>{{ $t('about.description') }}</p>
        <p>{{ $t('about.subDescription') }}</p>
        <p class="text-gray-500">{{ $t('about.disclaimer') }}</p>
      </div>
    </div>
    <div class="flex gap-4">
      <div class="flex flex-col gap-2 w-full">
        <h2 class="text-xl font-semibold">{{ $t('about.technologies') }}</h2>
        <divider />
        <div class="flex gap-12">
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ $t('about.frontend') }}</h3>
            <ul>
              <li v-for="tech in $t('about.frontendList').split(',')" :key="tech">{{ tech }}</li>
            </ul>
          </div>
          <div class="flex flex-col gap-2">
            <h3 class="text-lg font-semibold">{{ $t('about.backend') }}</h3>
            <ul>
              <li v-for="tech in $t('about.backendList').split(',')" :key="tech">{{ tech }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import Divider from '@/components/Divider.vue';
</script>
