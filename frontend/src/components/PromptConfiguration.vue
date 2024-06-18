<template>
  <div class="mt-2 flex flex-col gap-4">
    <div>
      <label 
        for="prompt-textarea" 
        class="block text-md font-medium text-gray-700 mb-2">
        {{$t("configurations.prompt")}}
      </label>
      <textarea 
        class="rounded-md p-2 border w-full" 
        type="text" 
        id="prompt-textarea"
        :placeholder="$t('configurations.promptPlaceholder')" 
        rows="2" maxlength="120"
        v-model="configurations.prompt"
      />
      <span class="text-xs text-gray-500">
        {{$t("configurations.promptHint")}}
      </span>
    </div>
    <div>
      <label 
        for="prompt-language" 
        class="block text-md font-medium text-gray-700 mb-2">
        {{$t("configurations.language")}}
      </label>
      <div class="grid grid-cols-3 gap-3">
        <radio-btn 
          v-for="lang in languages"
          :key="lang.label"
          :label="lang.label"
          :value="lang.value"
          v-model="configurations.language"
        />
      </div>
    </div>
    <div>
      <label 
        for="prompt-language" 
        class="block text-md font-medium text-gray-700 mb-2">
                {{$t("configurations.tone")}}
      </label>
      <div class="grid grid-cols-3 gap-3">
        <radio-btn 
          v-for="tone in tones"
          :key="tone.value"
          :label="tone.label"
          :value="tone.value"
          v-model="configurations.tone"
        />
      </div>
    </div>
  </div>
  <button 
    class="rounded px-5 py-2 my-4 text-white self-center flex justify-center items-center gap-2"
    @click="generateProductInfo"
    :disabled="!configurations.file"
    :class="!configurations.file || isLoading ? 'bg-gray-400' : 'bg-sea-buckthorn-600'"
  >
    <span class="i-mingcute-box-3-line" aria-hidden="true" />
    {{isLoading ? $t("isGenerating") : $t("generate")}}
  </button>
</template>
<script setup lang="ts">
import { defineEmits } from 'vue';
import RadioBtn from '@/components/RadioBtn.vue';
import { useGenerate } from '@/composables/useGenerate';
import { useConfigurations } from '@/composables/useConfigurations';
import { useI18n } from 'vue-i18n';

const { generate, isLoading, isError } = useGenerate();
const { configurations } = useConfigurations();
const { t } = useI18n();
const emits = defineEmits(['generate_status']);

const languages = [{
  label: t('languages.en'),
  value: 'English'
}, {
  label: t('languages.es'),
  value: 'Spanish'
  }, {
  label: t('languages.vi'),
  value: 'Vietnamese'
}];
const tones = [{
  label: t("tones.neutral"),
  value: 'neutral'
}, {
  label: t("tones.formal"),
  value: 'formal'
}, {
  label: t("tones.engaging"),
  value: 'engaging'
}]

const generateProductInfo = () => {
  emits('generate_status', {
    data: null,
    isLoading,
    isError
  })

  generate(generatedResponse => {
    emits('generate_status', generatedResponse)
  })
}
</script>