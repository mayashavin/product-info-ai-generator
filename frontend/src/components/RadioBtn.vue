<template>
  <label class="inline-flex items-center">
      <input 
        type="radio" 
        class="form-radio h-4 w-4 text-gray-600" 
        :value="value"
        v-model="selected">
        <span class="ml-1 text-gray-700"
      >{{label}}</span>
  </label>
</template>
<script setup lang="ts">
import { defineProps, defineModel } from 'vue';

const props = defineProps({
  label: {
    type: String,
    required: true
  },
  value: {
    type: String,
    required: true
  }
});

const selected = defineModel();
</script>