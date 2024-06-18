<template>
  <div class='progress-bar-container'>
    <div :class='`h-1.5 w-full bg-${color}-100 overflow-hidden`'>
      <div :class='`progress w-full h-full bg-${color}-500 left-right`'/>
    </div>
    <span v-if="label" :class="`text-${labelColor} text-sm`">{{ label }}</span>
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
    default: 'sea-buckthorn'
  },
  labelColor: {
    type: String,
    default: 'gray-500'
  }
});
</script>
<style scoped>
.progress-bar-container {
  width: 200px;
}
.progress {
  animation: progress 1s infinite linear;
}

.left-right {
    transform-origin: 0% 50%;
}
    @keyframes progress {
    0% {
        transform:  translateX(0) scaleX(0);
    }
    40% {
        transform:  translateX(0) scaleX(0.4);
    }
    100% {
        transform:  translateX(100%) scaleX(0.5);
    }
}
</style>