import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const usePageStore = defineStore('counter', () => {
  const count = ref(0)
  const name = ref('Yusheero')
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, name, doubleCount, increment }
})