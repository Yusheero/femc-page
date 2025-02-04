<script setup lang="ts">
import { onBeforeMount } from 'vue'
import { usePageStore } from '@/store/store';

const store = usePageStore();

onBeforeMount(() => {
  store.isMobile = window.innerWidth <= 920
  console.log('before mount', store.isMobile);
})
</script>

<template>
  <div v-if="store.isMobile" class="main-mobile">
    <router-view></router-view>
  </div>
  <div v-else class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.main-mobile {
  width: 100%;
  height: 100%;
  background: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
}

.main {
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
