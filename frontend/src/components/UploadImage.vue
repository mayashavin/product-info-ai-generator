<template>
  <div class="flex flex-col items-center gap-4 self-center">
    <image-section :url="selectedImage" v-if="selectedImage" />
    <div class="image-placeholder border-gray-300 border border-dashed text-gray-300 flex flex-col items-center justify-center rounded-md px-4" v-else>
      <span class="i-mingcute-pic-line text-4xl" aria-hidden="true" />
      <p>{{ $t('upload.imagePlaceholder') }}</p>
    </div>
    <button 
      class="rounded px-5 py-2 text-white relative mb-3 lg:w-auto flex justify-center gap-2 items-center"
      :disabled="isLoading"
      :class="isLoading ? 'cursor-not-allowed bg-sea-buckthorn-300' : 'cursor-pointer bg-sea-buckthorn-600'"
      >
      <span class="i-mingcute-upload-2-line" aria-hidden="true" />
      {{isLoading ? $t('upload.isUploading') : $t('upload.label')}}
      <input
        type="file"
        tabindex="-1"
        accept=".jpeg,.jpg,.png,image/jpeg,image/png"
        class="opacity-0 absolute inset-0 w-full cursor-pointer"
        aria-label="upload image button"
        @change="selectFile"
        :disabled="isLoading"
      />
    </button>
  </div>
</template>
<script setup lang="ts">
import { defineEmits, ref } from 'vue';
import ImageSection from '@/components/ImageSection.vue';
import { useConfigurations } from '@/composables/useConfigurations';

const emits = defineEmits(['upload_status'])

const selectedImage = ref(null);
const isLoading = ref(false);
const { setFile } = useConfigurations();

const selectFile = async (e: Event) => {
  const file = (e.target as HTMLInputElement)?.files?.[0];
  let isError = false;

  if (!file) return;
  isLoading.value = true;

  emits('upload_status', {
    isLoading: isLoading.value,
  });

  const readData = () => new Promise(resolve => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result)
    reader.readAsDataURL(file);
  })

  try {
    selectedImage.value = await readData();
    setFile(file);
  } catch(e) {
    isError = true;
  } finally {
    isLoading.value = false;

    emits('upload_status', {
      isError,
      isLoading: isLoading.value
    });
  }
}
</script>
<style scoped>
.image-placeholder {
  height: 350px;
  width: 350px;
}
</style>