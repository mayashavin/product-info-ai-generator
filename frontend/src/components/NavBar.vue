<template>
  <nav class="flex items-between justify-between pt-2">
    <div class="font-bold text-2xl text-sea-buckthorn-600"></div>
    <div class="flex gap-12 self-end items-center">
      <div class="flex gap-6 items-center">
        <router-link to="/" class="text-gray-700 p-1 border-transparent border-b-2 hover:border-sea-buckthorn-500">Home</router-link>
        <router-link to="/about" class="text-gray-700 p-1 border-transparent border-b-2 hover:border-sea-buckthorn-500">About</router-link>
        <div class="flex gap-2 items-center">
          <a 
            href="https://github.com/mayashavin" 
            target="_blank" 
            alt="Github profile"
            class="text-gray-400 items-center flex hover:text-sea-buckthorn-500">
            <span class="i-mingcute-github-2-fill text-3xl" aria-hidden="true"></span>
          </a>
          <a 
            href="https://x.com/mayashavin" 
            target="_blank" 
            alt="Twitter profile"
            class="text-gray-400 items-center flex hover:text-sea-buckthorn-500">
            <span class="i-mingcute-twitter-fill text-3xl" aria-hidden="true"></span>
          </a>
        </div>
    </div>
      <LocaleSwitcher/>
    </div>
  </nav>
</template>
<script setup lang="ts">
import { RouterLink } from 'vue-router';
import LocaleSwitcher from './LocaleSwitcher.vue';
</script>
<style scoped>
nav a.router-link-exact-active {
  @apply text-sea-buckthorn-800 border-b-2 border-sea-buckthorn-500;
}
</style>