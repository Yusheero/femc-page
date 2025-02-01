<script setup lang="ts">
defineProps({
  news: Object,
})
</script>

<template>
  <div class="news">
    News
  </div>
</template>

<style scoped lang="scss">
.news {
  position: relative;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;
}
</style>

