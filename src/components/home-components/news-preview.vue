<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { useRouter } from 'vue-router';
import { KeenSliderInstance } from 'keen-slider';
import KeenSlider from "keen-slider";
import { Eye } from 'lucide-vue-next';
import { newsData } from '@/data/news-data';

const router = useRouter();
const sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

/** Переход на роут /news */
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
          <div class="news-preview__bottom">
            <div class="news-preview__title">{{ slide.title }}</div>
            <div class="news-preview__description">{{ slide.text }}</div>
          </div>
        </div>
      </div>
    </div>
    <button class="news-preview__button" @click="toRouterPath"><Eye :size="22" color="#CCCCCC" /></button>
  </div>
</template>

<style scoped lang="scss">
.news-preview {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%);
  position: relative;
  border-radius: 1rem;

  &__content {
    width: 100%;
    height: 100%;
    padding: 1.5rem;
    background-size: cover;
    border-radius: 0.8rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.8rem;
  }

  &__tags {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    gap: 1rem;
  }

  &__bottom {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.3rem;
  }

  &__title {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__description {
    color: var(--color-secondary-dark);
    font-size: 1rem;
    font-weight: 300;
  }

  &__button {
    width: 2.5rem;
    height: 2.5rem;
    background: var(--color-grey-dark);
    border: none;
    border-radius: 50%;
    opacity: 0.8;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }
}

.keen-slider {
  width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  overflow: hidden;
  display: flex;
}

.keen-slider__slide {
  min-width: 100%;
  height: 100%;
  border-radius: 0.8rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.tags {
  &__item {
    padding: 0.6rem 0.8rem;
    background: var(--color-primary);
    color: var(--color-secondary);
    border-radius: 0.3rem;
    font-size: 1rem;
    font-weight: 600;
  }
}
</style>
