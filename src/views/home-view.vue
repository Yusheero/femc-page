<script setup lang="ts">
import News from '@/components/home-components/news.vue';
import Socials from '@/components/home-components/socials.vue';
import Logo from '@/components/home-components/logo.vue';
import Server from '@/components/home-components/server.vue';
</script>

<template>
  <div class="home">
    <Logo class="home__logo" />
    <News class="home__news" />
    <Socials class="home__socials" />
    <Server class="home__server-celestia" :text="'Celestia'" :backgroundClass="'celestia'" />
    <Server class="home__server-celestia-new" :text="'Celestia New'" :backgroundClass="'celestia'" />
    <Server class="home__server-pawhera" :text="'Pawhera'" :backgroundClass="'celestia'" />
    <Server class="home__server-eventus" :text="'Eventus'" :backgroundClass="'celestia'" />
  </div>
</template>

<style scoped lang="scss">
.home {
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