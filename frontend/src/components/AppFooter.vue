<template>
  <footer class="text-sm text-center text-gray-600 py-5 border-t">
    {{ $t('footer.madeby') }}
    <a href="https://mayashavin.com" rel="noopener noreferrer" target="_blank" class="underline text-sea-buckthorn-600">Maya Shavin</a>
    {{ $t('footer.withlove') }} - © {{ new Date().getFullYear() }}
  </footer>
</template>