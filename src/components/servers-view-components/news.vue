<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from 'keen-slider';
import { ArrowUpRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { useRoute } from "vue-router";
import { usePageStore } from "@/store/store";

const props = defineProps({
  news: Object,
})

const route = useRoute();
const store = usePageStore();
const router = useRouter();

const sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

const toRouterPath = (id: any) => {
  store.setLastRoutePath(route.path);
  console.log(store.lastRoutePath);
  router.push({ path: `/news/${id}` })
}

onMounted(() => {
  // Инициализация слайдера
  slider = new KeenSlider(sliderRef.value!, {
    loop: true,
    slides: { 
      perView: 5,
      spacing: 20,
    },
    drag: true,
  });
  console.log(props.news);
});

onUnmounted(() => {
  slider?.destroy();
});
</script>

<template>
  <div class="news">
    <div ref="sliderRef" class="keen-slider">
      <div class="keen-slider__slide" v-for="(slide, index) in news" :key="index">
        <div class="news-item news" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.5) 80.5%, #050505 100%), url(${slide.serverPreviewImage})` }">
          <p class="news-item__title">{{ slide.title }}</p>
          <p class="news-item__text">{{ slide.text }}</p>
          <p class="news-item__date">{{ slide.date }}</p>
          <button class="news-item__button" @click="toRouterPath(slide.id)"><ArrowUpRight :size="24" color="#CCCCCC" /></button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news {
  position: relative;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
}

.news-item {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;
  padding: 1.5rem;
  background-size: cover;

  &__title {
    font-size: 1.1rem;
    font-weight: 700;
  }

  &__text {
    font-size: 0.8rem;
    color: var(--color-text-secondary);
  }

  &__date {
    background: var(--color-primary);
    color: var(--color-secondary);
    font-size: 0.8rem;
    font-weight: 700;
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
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
    background: var(--color-ip-bg);
    opacity: 0.8;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background: var(--color-icon-bg);
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
  background: var(--color-secondary-bg);
}
</style>

