<script setup lang="ts">
import { serverData } from '../../../mocks/server'; 
</script>

<template>
  <div class="ip">
    <div class="ip__item version">{{ serverData.version }}</div>
    <div class="ip__item ip">{{ serverData.ip }}</div>
  </div>
  
</template>

<style scoped lang="scss">
.ip {
  background: var(--color-white);
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 32px;
  font-weight: 700;

  .version {
    font-size: 48px;
  }

  .ip {
    font-size: 32px;
    font-weight: 500;
  }
}
</style>
