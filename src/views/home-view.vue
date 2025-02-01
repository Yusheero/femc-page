<script setup lang="ts">
import NewsPreview from '@/components/home-components/news-preview.vue';
import Socials from '@/components/home-components/socials.vue';
import Logo from '@/components/home-components/logo.vue';
import Server from '@/components/home-components/server.vue';
import { serverPreviewData } from '../data/server-preview-data';
</script>

<template>
  <div class="home-view">
    <Logo class="home-view__logo" />
    <NewsPreview class="home-view__news" />
    <Socials class="home-view__socials" />
    <Server class="home-view__server-celestia"
      :text="serverPreviewData.celedia.text"
      :backgroundClass="'celestia'"
      :logoClass="'logo__celestia'"
      :routerPath="'/server/celestia'"
    />
    <Server class="home-view__server-celestia-new" 
      :text="serverPreviewData.celediaOld.text" 
      :backgroundClass="'celestia-old'" 
      :logoClass="'logo__celestia-old'"
      :routerPath="'/server/celestia-old'" 
    />
    <Server class="home-view__server-pawhera" 
      :text="serverPreviewData.pawhera.text" 
      :backgroundClass="'pawhera'" 
      :logoClass="'logo__pawhera'"
      :routerPath="'/server/pawhera'"
    />
    <Server class="home-view__server-eventus" 
      :text="serverPreviewData.eventus.text" 
      :backgroundClass="'eventus'" 
      :logoClass="'logo__eventus'"
      :routerPath="'/server/eventus'"
    />
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
    "logo socials server-celestia server-pawhera"
    "news news server-celestia server-pawhera"
    "news news server-celestia-new server-pawhera"
    "news news server-celestia-new server-eventus";
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

  &__server-celestia {
    grid-area: server-celestia;
  }

  &__server-celestia-new {
    grid-area: server-celestia-new;
  }

  &__server-pawhera {
    grid-area: server-pawhera;
  }

  &__server-eventus {
    grid-area: server-eventus;
  }
}
</style>