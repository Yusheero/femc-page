<script setup lang="ts">
defineProps({
  data: Object
})
</script>

<template>
  <div class="news-item">
    <div class="news-item__title">{{ data?.title }}</div>
    <div class="news-item__text">{{ data?.text }}</div>
  </div>
</template>

<style scoped lang="scss">
.news-item {
  padding: 1.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;
}
</style>
