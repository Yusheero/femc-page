<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref, computed } from 'vue';
import InfoMobile from '@/components/servers-view-components/info-mobile.vue';
import PlayersOnline from '@/components/servers-view-components/players-online.vue';
import { ServersData } from '@/data/servers-info-data';
import { newsData } from '@/data/news-data';
import { imagesData } from '@/data/images';
import { usePageStore } from '@/store/store';

const store = usePageStore();
const routeId = Array.isArray(useRoute().params.id) ? useRoute().params.id[0] : useRoute().params.id as string;

/** Онлайн по серверам */
const serverStats = computed(() => {
  if (typeof(routeId) === 'string') {
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
  <div class="server-view-mobile">
    <InfoMobile class="server-view-mobile__info" :data="serverData" />
    <PlayersOnline class="server-view__chat" :stats="serverStats" :serverId="routeId!" />
    <!-- <Gallery class="server-view-mobile__gallery" :pictures="serverPictures" /> -->
    <!-- <News class="server-view-mobile__news" :news="serverNews" /> -->
  </div>
</template>

<style scoped lang="scss">
.server-view-mobile {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);
}
</style>