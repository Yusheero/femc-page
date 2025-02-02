<script setup lang="ts">
import { useRoute } from 'vue-router';
import { onMounted, ref } from 'vue';
import News from '../components/servers-view-components/news.vue';
import Gallery from '../components/servers-view-components/gallery.vue';
import Info from '../components/servers-view-components/info.vue';
import { ServersData } from '@/data/servers-info-data';
import { newsData } from '@/data/news-data';
import { imagesData } from '@/data/images';

const routeId = useRoute().params.id;
const serverData = ref();
const serverNews = ref();
const serverPictures = ref();

serverData.value = ServersData.find(s => s.id === routeId);
serverNews.value = newsData.filter((item) => item.server === routeId)
serverPictures.value = imagesData.find((item) => item.server === routeId)
console.log(serverPictures.value);

</script>

<template>
  <div class="server-view">
    <Info class="server-view__info" :data="serverData" />
    <Gallery class="server-view__gallery" :pictures="serverPictures" />
    <News class="server-view__news" :news="serverNews" />
  </div>
</template>

<style scoped lang="scss">
.server-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr 2fr;
  grid-template-rows: 4fr 2fr;
  grid-template-areas:
    "info gallery gallery gallery gallery"
    "news news news news news";
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);

  &__info {
    grid-area: info;
  }

  &__gallery {
    grid-area: gallery;
  }

  &__news {
    grid-area: news;
  }
}
</style>