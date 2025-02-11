<script setup lang="ts">
import Socials from '@/components/home-components/socials.vue';
import Logo from '@/components/home-components/logo.vue';
import { serverPreviewData } from '../data/server-preview-data';
import serverMobile from '@/components/home-components/server-mobile.vue';
import Navigation from '@/components/home-components/navigation.vue';
</script>

<template>
  <div class="home-view-mobile">
    <Logo class="home-view-mobile__logo" />
    <!-- <NewsPreview class="home-view__news" /> -->
    <Socials class="home-view-mobile__socials" />
    <Navigation class="home-view-mobile__navigation" />
    <serverMobile class="home-view-mobile__server-celedia"
      :serverId="'celedia'"
      :text="serverPreviewData.celedia.text"
      :backgroundClass="'celedia'"
      :logoClass="'logo__celedia'"
      :routerPath="'/server/celedia'"
      :labels="['ванилла', 'приват', 'вайп']"
    />
    <serverMobile class="home-view-mobile__server-celedia-new" 
      :serverId="'celediaold'" 
      :text="serverPreviewData.celediaOld.text" 
      :backgroundClass="'celedia-old'" 
      :logoClass="'logo__celedia-old'"
      :routerPath="'/server/celediaold'"
      :labels="['ванилла', 'приват']"
    />
    <serverMobile class="home-view-mobile__server-pawhera"
      :serverId="'pawhera'"
      :text="serverPreviewData.pawhera.text" 
      :backgroundClass="'pawhera'"
      :logoClass="'logo__pawhera'"
      :routerPath="'/server/pawhera'"
      :labels="['анархия']"
    />
    <serverMobile class="home-view-mobile__server-eventus"
      :serverId="'eventus'"
      :text="serverPreviewData.eventus.text" 
      :backgroundClass="'eventus'" 
      :logoClass="'logo__eventus'"
      :routerPath="'/server/eventus'"
      :labels="['смена режима']"
    />
    <!-- <About class="home-view__about" /> -->
  </div>
</template>

<style scoped lang="scss">
.home-view-mobile {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);
}
</style>