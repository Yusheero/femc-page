<script setup lang="ts">
import NewsPreview from '@/components/home-components/news-preview.vue';
import Socials from '@/components/home-components/socials.vue';
import Logo from '@/components/home-components/logo.vue';
import Server from '@/components/home-components/server.vue';
import { serverPreviewData } from '../data/server-preview-data';
import About from '@/components/home-components/about.vue';
import HomeViewMobile from './home-view-mobile.vue';
import { usePageStore } from '@/store/store';

const store = usePageStore()
</script>

<template>
  <HomeViewMobile v-if="store.isMobile" />
  <div v-else class="home-view">
    <Logo class="home-view__logo" />
    <NewsPreview class="home-view__news" />
    <Socials class="home-view__socials" />
    <Server class="home-view__server-celedia"
      :text="serverPreviewData.celedia.text"
      :backgroundClass="'celedia'"
      :logoClass="'logo__celedia'"
      :routerPath="'/server/celedia'"
      :labels="['ванилла', 'приват', 'вайп']"
    />
    <Server class="home-view__server-celedia-new" 
      :text="serverPreviewData.celediaOld.text" 
      :backgroundClass="'celedia-old'" 
      :logoClass="'logo__celedia-old'"
      :routerPath="'/server/celedia-old'"
      :labels="['ванилла', 'приват']"
    />
    <Server class="home-view__server-pawhera" 
      :text="serverPreviewData.pawhera.text" 
      :backgroundClass="'pawhera'" 
      :logoClass="'logo__pawhera'"
      :routerPath="'/server/pawhera'"
      :labels="['анархия']"
    />
    <Server class="home-view__server-eventus" 
      :text="serverPreviewData.eventus.text" 
      :backgroundClass="'eventus'" 
      :logoClass="'logo__eventus'"
      :routerPath="'/server/eventus'"
      :labels="['смена режима']"
    />
    <About class="home-view__about" />
  </div>
</template>

<style scoped lang="scss">
.home-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 2fr 4fr 3fr;
  grid-template-rows: 2fr 1fr 1fr 2fr;
  grid-template-areas:
    "logo socials server-celedia server-celedia-new"
    "news news server-celedia server-eventus"
    "news news server-pawhera server-eventus"
    "news news server-pawhera about";
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);

  &__logo {
    grid-area: logo;
  }

  &__news {
    grid-area: news;
  }

  &__socials {
    grid-area: socials;
  }

  &__server-celedia {
    grid-area: server-celedia;
  }

  &__server-celedia-new {
    grid-area: server-celedia-new;
  }

  &__server-pawhera {
    grid-area: server-pawhera;
  }

  &__server-eventus {
    grid-area: server-eventus;
  }

  &__about {
    grid-area: about;
  }
}
</style>