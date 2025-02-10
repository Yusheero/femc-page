<script setup lang="ts">
import { Eye } from 'lucide-vue-next';
import { newsData } from '@/data/news-data';
import { ref, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from 'keen-slider';
import { useRouter } from 'vue-router';

const router = useRouter();

const sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

const toRouterPath = () => {
  router.push({ path: '/news' })
}

onMounted(() => {
  // Инициализация слайдера
  slider = new KeenSlider(sliderRef.value!, {
    loop: true,
    slides: { perView: 1 },
    drag: false,
    created: (s) => {
      // Автопрокрутка каждые 10 секунд
      const interval = setInterval(() => s.next(), 5000);
      s.on("destroyed", () => clearInterval(interval));
    },
  });
});

onUnmounted(() => {
  slider?.destroy();
});
</script>

<template>
  <div class="news-preview">
    <div ref="sliderRef" class="keen-slider">
      <div class="keen-slider__slide" v-for="(slide, index) in newsData" :key="index">
        <div class="news-preview__content" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.6) 80.5%, #050505 100%), url(${slide.homePreviewImage})` }">
          <div class="news-preview__tags tags">
            <div v-for="tag in slide.tags" class="tags__item">{{ tag }}</div>
          </div>
          <div class="news-preview__title">{{ slide.title }}</div>
          <div class="news-preview__description">{{ slide.text }}</div>
        </div>
      </div>
    </div>
    <button class="news-preview__button" @click="toRouterPath"><Eye :size="22" color="#CCCCCC" /></button>
  </div>
</template>

<style scoped lang="scss">
.news-preview {
  position: relative;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%);

  &__content {
    padding: 1.5rem;
    border-radius: 0.8rem;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.8rem;
    background-size: cover;
  }

  &__tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__description {
    color: var(--color-text-secondary);
    font-size: 1rem;
    font-weight: 300;
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
  min-width: 100%;
  height: 100%;
}

.tags {
  &__item {
    padding: 0.4rem 0.8rem;
    font-size: 0.8rem;
    font-weight: 600;
    border-radius: 0.3rem;
    background: var(--color-primary);
    color: var(--color-secondary);
  }
}
</style>
