<template>
  <div>
    <div v-if="isLoading">
      <!-- Hier kann man eventuell eine Ladeanzeige einbauen -->
    </div>
    <div v-else-if="error">
      <p>{{ errorMessage }}</p>
      <!-- Fehleranzeige -->
    </div>
    <div v-else>
      <RouterView />
      <!-- Globale Komponenten -->
      <Toast position="top-right" group="tr" />
    </div>
    <VueQueryDevtools />
  </div>
</template>

<script setup lang="ts">
import { VueQueryDevtools } from '@tanstack/vue-query-devtools';
import { ref } from 'vue';

const isLoading = ref(false);
const error = ref(false);
const errorMessage = ref('');

</script>

<style scoped>

</style>