<script setup lang="ts">
defineProps({
  newsData: Object,
})
</script>

<template>
  <div class="servers-item">
    <div>{{ newsData?.title }}</div>
    <div>{{ newsData?.text }}</div>
    <div>{{ newsData?.date }}</div>
  </div>
  
</template>

<style scoped lang="scss">
.servers-item {
  background: var(--color-black);
  width: 100%;
  height: 100%;
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  font-weight: 700;
  color: var(--color-white);
}
</style>
