<script setup lang="ts">
import NewsPreview from '@/components/home-components/news-preview.vue';
import Socials from '@/components/home-components/socials.vue';
import Logo from '@/components/home-components/logo.vue';
import Server from '@/components/home-components/server.vue';
import { serverPreviewData } from '../data/server-preview-data';
import Navigation from '@/components/home-components/navigation.vue';
import HomeViewMobile from './home-view-mobile.vue';
import { usePageStore } from '@/store/store';
import Login from '@/components/home-components/login.vue';

const store = usePageStore()
</script>

<template>
  <HomeViewMobile v-if="store.isMobile" />
  <div v-else class="home-view">
    <Logo class="home-view__logo" />
    <NewsPreview class="home-view__news" />
    <Socials class="home-view__socials" />
    <Server class="home-view__server-celedia"
      :serverId="'celedia'"
      :text="serverPreviewData.celedia.text"
      :backgroundClass="'celedia'"
      :logoClass="'logo__celedia'"
      :routerPath="'/server/celedia'"
      :labels="['ванилла', 'приват', 'вайп']"
    />
    <Server class="home-view__server-celedia-new"
      :serverId="'celediaold'" 
      :text="serverPreviewData.celediaOld.text" 
      :backgroundClass="'celedia-old'" 
      :logoClass="'logo__celedia-old'"
      :routerPath="'/server/celediaold'"
      :labels="['ванилла', 'приват']"
    />
    <Server class="home-view__server-pawhera" 
      :text="serverPreviewData.pawhera.text"
      :serverId="'pawhera'"
      :backgroundClass="'pawhera'" 
      :logoClass="'logo__pawhera'"
      :routerPath="'/server/pawhera'"
      :labels="['анархия']"
    />
    <Server class="home-view__server-eventus"
      :text="serverPreviewData.eventus.text"
      :serverId="'eventus'"
      :backgroundClass="'eventus'" 
      :logoClass="'logo__eventus'"
      :routerPath="'/server/eventus'"
      :labels="['смена режима']"
    />
    <Navigation class="home-view__navigation" />
    <Login class="home-view__login" />
    <div class="home-view__footer">А здесь будет что-то другое</div>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 1fr 1fr 2fr 2fr 1fr 2fr;
  grid-template-rows: 2fr 1fr 2fr 1fr;
  grid-template-areas:
    "logo socials socials server-celedia server-celedia server-celedia-new server-celedia-new"
    "logo navigation navigation server-celedia server-celedia server-celedia-new server-celedia-new"
    "news news server-pawhera server-pawhera server-eventus server-eventus login"
    "news news server-pawhera server-pawhera server-eventus server-eventus footer";
  gap: 0.8rem;
  padding: 0.8rem;
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

  &__navigation {
    grid-area: navigation;
  }

  &__login {
    grid-area: login;
  }

  &__footer {
    padding: 1rem;
    background: var(--color-text-secondary);
    color: var(--color-primary);
    border-radius: 1rem;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    grid-area: footer;
  }
}
</style>