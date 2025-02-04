<script setup lang="ts">
import { useRoute } from 'vue-router';
import { ref } from 'vue';
// import News from '../components/servers-view-components/news.vue';
// import Gallery from '../components/servers-view-components/gallery.vue';
import InfoMobile from '../components/servers-view-components/info-mobile.vue';
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
</script>

<template>
  <div class="server-view-mobile">
    <InfoMobile class="server-view-mobile__info" :data="serverData" />
    <!-- <Gallery class="server-view-mobile__gallery" :pictures="serverPictures" /> -->
    <!-- <News class="server-view-mobile__news" :news="serverNews" /> -->
  </div>
</template>

<style scoped lang="scss">
.server-view-mobile {
  width: 100%;
  height: 100vh;
  display: flex;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);
}
</style>