<script setup lang="ts">
import NewsItem from './news-item.vue';
import { news } from '../../../mocks/news.ts'
</script>

<template>
  <div class="news">
    <NewsItem v-for="newsItem in news" :newsData="newsItem" />
  </div>
</template>

<style scoped>
.news {
  padding: 16px;
  background: var(--color-white);
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 32px;
  font-weight: 700;
}
</style>
