import { defineStore } from 'pinia';
import { ref } from 'vue';

export const usePageStore = defineStore('page-store', () => {
  const isMobile = ref(false);
  const lastRoutePath = ref('')
  const setLastRoutePath = (path: string) => {
    lastRoutePath.value = path;
  }

  return {
    lastRoutePath,
    isMobile,
    setLastRoutePath,
  }
})