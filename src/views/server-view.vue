<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import News from '../components/servers-view-components/news.vue';
import Gallery from '../components/servers-view-components/gallery.vue';
import Info from '../components/servers-view-components/info.vue';
import PlayersOnline from '@/components/servers-view-components/players-online.vue';
import { ServersData } from '@/data/servers-info-data';
import { newsData } from '@/data/news-data';
import { imagesData } from '@/data/images';
import serverViewMobile from './server-view-mobile.vue';
import { usePageStore } from '@/store/store';

const store = usePageStore();
const routeId = Array.isArray(useRoute().params.id) ? useRoute().params.id[0] : useRoute().params.id as string;

/** Онлайн по серверам */
const serverStats = computed(() => {
  if (typeof(routeId) === 'string') {
    console.log('routeId', routeId);
    
    return store.getServerStatus(routeId)
  }
});

/** Данные по серверам из Data */
const serverData = ref();

/** Данные по новостям серверам из Data */
const serverNews = ref();

/** Данные по картинкам из Data */
const serverPictures = ref();

/** Получение всех данных по серверу через название роута */
serverData.value = ServersData.find(s => s.id === routeId);
serverNews.value = newsData.filter((item) => item.server === routeId)
serverPictures.value = imagesData.find((item) => item.server === routeId)
</script>

<template>
  <serverViewMobile v-if="store.isMobile" />
  <div v-else class="server-view">
    <Info class="server-view__info" :data="serverData" />
    <PlayersOnline class="server-view__chat" :stats="serverStats" :serverId="routeId!" />
    <Gallery class="server-view__gallery" :pictures="serverPictures" />
    <News class="server-view__news" :news="serverNews" />
  </div>
</template>

<style scoped lang="scss">
.server-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 450px 320px 3fr 1fr 2fr;
  grid-template-rows: 4fr 2fr;
  grid-template-areas:
    "info chat gallery gallery gallery"
    "news news news news news";
  gap: 0.8rem;
  padding: 0.8rem;
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

  &__chat {
    grid-area: chat;
  }
}
</style>