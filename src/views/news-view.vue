<script setup lang="ts">
import { newsData } from '@/data/news-data';
import NewsItem from '@/components/news-view-components/news-item.vue';
import SendNews from '@/components/news-view-components/send-news.vue';
import { useKeenSlider } from 'keen-slider/vue'
import { ArrowUpRight } from 'lucide-vue-next';
import { usePageStore } from "@/store/store";
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';

const [container] = useKeenSlider({ 
  loop: false,
  initial: 0,
  slides: {
    perView: 2,
    spacing: 6,
  }
})

const store = usePageStore();
const route = useRoute();
const router = useRouter();

const toRouterPath = (id: any) => {
  store.setLastRoutePath(route.path);
  router.push({ path: `/news/${id}` })
}
</script>

<template>
  <div class="news-view">
    <SendNews class="news-view__send-news" />
    <NewsItem class="news-view__news1" :data="newsData[0]" />

    <div class="news-view__slider">
      <div ref="container" class="keen-slider">
        <div v-for="(item, index) in newsData" :key="index" class="keen-slider__slide">
          <div class="news-view__image" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.5) 80.5%, #050505 100%), url(${item.portraitImage})` }">
            <div class="news-view__title">{{ item?.title }}</div>
            <div class="news-view__text">{{ item?.text }}</div>
            <button @click="toRouterPath(item.id)" class="news-view__button"><ArrowUpRight :size="24" color="#CCCCCC" /></button>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<style scoped lang="scss">
.news-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 4fr 5fr 3fr;
  grid-template-rows: 2fr 2fr 2fr;
  grid-template-areas:
    "send-news slider slider"
    "news1 slider slider"
    "news1 slider slider";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__news1 {
    grid-area: news1;
  }

  &__send-news {
    grid-area: send-news;
  }

  &__slider {
    grid-area: slider;
    border-radius: 0.8rem;
    padding: 1.5rem;
    width: 100%;
    height: 100%;
    display: flex;
    background: var(--color-black-light);
  }

  &__image {
    padding: 1.5rem;
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__text {
    font-size: 1rem;
    color: var(--color-secondary-dark);
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    border: none;
    border-radius: 50%;
    background: var(--color-grey-dark);
    opacity: 0.8;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }
}

.keen-slider {
  border-radius: 0.8rem;
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}

.keen-slider__slide {
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
</style>