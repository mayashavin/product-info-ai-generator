<template>
  <div class="relative">
    <div :class="`w-full divider bg-${color}`" />
    <div class="divider-action absolute bg-white px-2">
      <slot name="divider-action" class="divider-action absolute bg-white px-2">
        {{ label }}
      </slot>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  label: {
    type: String,
  },
  color: {
    type: String,
    default: 'gray-200'
  }
});
</script>
<style scoped>
.divider {
  height: 1px;
}

.divider-action {
  right: 20px;
  top: -15px;
}
</style>
