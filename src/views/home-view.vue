<script setup lang="ts">
import Logo from '../components/home-components/logo.vue';
import Servers from '../components/home-components/servers.vue';
import News from '../components/home-components/news.vue';
import About from '../components/home-components/about.vue';
import Socials from '../components/home-components/socials.vue';
import Profile from '../components/home-components/profile.vue';
import Ip from '../components/home-components/ip.vue';
// import { ArrowLeft  } from "lucide-vue-next";
</script>

<template>
  <div class="home">
    <Logo class="home__logo" />
    <Servers class="home__servers" />
    <News class="home__news" />
    <About class="home__about" />
    <Socials class="home__socials" />
    <Profile class="home__profile" />
    <Ip class="home__ip" />
    <!-- <router-link class="back-button" to="/"><ArrowLeft  color="black"/></router-link> -->
  </div>
</template>

<style scoped lang="scss">
.home {
  display: grid;
  grid-template-columns: 200px 300px 400px 400px;
  grid-template-rows: 200px 100px 100px 100px 110px;
  grid-template-areas:
    "logo ip news servers"
    "about about news servers"
    "about about news profile"
    "about about news profile"
    "about about socials profile";
  gap: 20px;
  color: var(--color-white);
  position: relative;

  &__logo {
    grid-area: logo;
  }

  &__servers {
    grid-area: servers;
  }

  &__news {
    grid-area: news;
  }

  &__about {
    grid-area: about;
  }

  &__socials {
    grid-area: socials;
  }

  &__profile {
    grid-area: profile;
  }

  &__ip {
    grid-area: ip;
  }

  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: red;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: -48px;

    &:hover {
      background: var(--color-grey);
    }
  }
}


</style>