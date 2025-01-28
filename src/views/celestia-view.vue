<script setup lang="ts">
// import Info from '@/components/server-view-components/info.vue';
// import Gallery from '@/components/server-view-components/gallery.vue';
// import News from '@/components/server-view-components/news.vue';
import News from '../components/servers-view-components/news.vue';
import Gallery from '../components/servers-view-components/gallery.vue';
import Info from '../components/servers-view-components/info.vue';
import { serverInfoData } from '@/data/servers-info-data';
</script>

<template>
  <div class="celestia-view">
    <Info class="celestia-view__info" :text="serverInfoData.celedia" :logoClass="'info__celestia'" />
    <Gallery class="celestia-view__gallery" />
    <News class="celestia-view__news" />
  </div>
</template>

<style scoped lang="scss">
.celestia-view {
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