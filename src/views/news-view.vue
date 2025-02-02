<script setup lang="ts">
import { newsData } from '@/data/news-data';
import NewsItem from '@/components/news-view-components/news-item.vue';
import SendNews from '@/components/news-view-components/send-news.vue';

const Data = newsData;
</script>

<template>
  <div class="news-view">
    <SendNews class="news-view__send-news" />
    <NewsItem v-for="page in Data" :class="[page.newsViewClass]" :data="page" />
  </div>
</template>

<style scoped lang="scss">
.news-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 5fr 4fr 3fr;
  grid-template-rows: 2fr 2fr 2fr;
  grid-template-areas:
    "send-news news2 news3"
    "news1 news2 news3"
    "news1 news2 news4";
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);

  &__news1 {
    grid-area: news1;
  }

  &__news2 {
    grid-area: news2;
  }

  &__news3 {
    grid-area: news3;
  }

  &__news4 {
    grid-area: news4;
  }

  &__send-news {
    grid-area: send-news;
  }
}
</style>