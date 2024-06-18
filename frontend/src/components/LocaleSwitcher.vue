<template>
  <div class="locale-switcher">
    <div class="locale-changer">
      <select v-model="$i18n.locale" class="px-3 py-2">
        <option
          v-for="locale in $i18n.availableLocales"
          :key="`locale-${locale}`"
          :value="locale"
        >
          {{ getLocaleLabel(locale).label }}
        </option>
      </select>
    </div>
  </div>
</template>
<script setup lang="ts">
const localeLabels = {
    en: {
        label: 'English',
        icon: "united-kingdom"
    },
    vi: {
        label: 'Tiếng Việt',
        icon: "vietnam"
    },
}

const getLocaleLabel = (locale: string) => {
    return localeLabels[locale] || localeLabels.en;
}
</script>