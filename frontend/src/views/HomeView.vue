<script setup lang="ts">
import UploadImage from '@/components/UploadImage.vue';
import ProductInfo from '@/components/ProductInfo.vue';
import Configuration from '@/components/PromptConfiguration.vue';
import Divider from '@/components/Divider.vue';
import { ref } from 'vue';
import { useCopyToClipboard } from '@/composables/useCopyToClipboard';

const currStatus = ref({
  data: null,
  isLoading: false,
  isError: false
});

const { isCopied, copyToJSON } = useCopyToClipboard();

const updateStatus = (status: any) => {
  currStatus.value = status;
}

const copy = () => {
  copyToJSON(currStatus.value.data)
}
</script>
<template>
  <div class="grid grid-cols-2 lg:flex-row justify-center home-container">
    <div class="h-full flex flex-col justify-center py-4">
      <upload-image />
      <div class="mt-6 px-4 w-full">
        <divider :label="$t('configurations.header')" class="mb-6"/>
        <configuration @generate_status="updateStatus" />
      </div>
    </div>
    <div class="h-full flex flex-col">
      <product-info 
        :product="currStatus.data" 
        :isLoading="currStatus.isLoading" 
        :isError="currStatus.isError"
        class="flex-grow"
      />
      <button 
        class="rounded px-5 py-2 bg-sea-buckthorn-600 text-white relative mb-3 lg:w-auto flex justify-center gap-2 items-center self-center"
        v-if="currStatus.data"
        @click="copy"
      >
        <span :class="isCopied ? 'i-mingcute-check-line': 'i-mingcute-copy-line'" aria-hidden="true" />
        {{isCopied ? $t('copied') : $t('copy')}}
      </button>
    </div>
  </div>
</template>