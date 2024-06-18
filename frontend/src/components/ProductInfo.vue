<template>
  <div v-if="!product || isLoading || isError" 
    class="flex rounded-md items-center justify-center border border-dashed product-placeholder text-gray-400 my-4">
    <progress-bar v-if="isLoading" :label="$t('isGenerating')" />
    <p v-else-if="isError">{{$t("productInfo.error")}}</p>
    <p v-else>{{ $t('productInfo.placeholder')}}</p>
  </div>
  <div 
    class="flex flex-col items-center border border-gray-200 rounded-md p-4 gap-4 my-4" 
    v-else
  >
    <div class="flex flex-col gap-2 w-full">
      <h2 class="font-semibold">{{$t('productInfo.title')}}</h2>
      <p class="bg-gray-50 p-3 border border-gray-100">{{ product.title }}</p>
    </div>
    <div class="flex flex-col gap-2 w-full flex-grow">
      <h2 class="font-semibold">{{$t('productInfo.description')}}</h2>
      <p class="bg-gray-50 p-3 border border-gray-100  flex-grow">{{ product.description }}</p>
    </div>
    <div class="flex flex-col gap-2 w-full">
      <h2 class="font-semibold">{{$t('productInfo.tags')}}</h2>
      <p class="bg-gray-50 p-3 border border-gray-100">{{ product.tags?.join(', ') }}</p>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, PropType } from 'vue';
import ProgressBar from '@/components/ProgressBar.vue';


interface Product {
  title: string;
  description: string;
  tags: string[];
  primary_colors: string[];
}

const props = defineProps({
  product: {
    type: Object as PropType<Product | null>,
  },
  isLoading: {
    type: Boolean,
    default: false
  },
  isError: {
    type: Boolean,
    default: false
  }
});

const placeholder = "Generated product information will appear here";
</script>
<style scoped>
.product-placeholder {
  height: calc(100% - 3rem);
}
</style>