<script setup lang="ts">
import { NewsData } from '@/data/news-data';
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
      const interval = setInterval(() => s.next(), 8000);
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
      <div class="keen-slider__slide" v-for="(slide, index) in NewsData.data" :key="index">
        <div class="news-preview__content">
          <div class="news-preview__title">{{ slide.title }}</div>
          <div class="news-preview__description">{{ slide.text }}</div>
        </div>
      </div>
    </div>
    <button class="news-preview__button" @click="toRouterPath"><p>Все новости</p></button>
  </div>
</template>

<style scoped lang="scss">
.news-preview {
  position: relative;
  padding: 1.5rem;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/background-image.jpg');

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 800;
  }

  &__server-logo {
    width: 7.25rem;
    height: 1.5rem;
    background-image: url('@/assets/images/celestia-logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }

  &__content {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
  }

  &__title {
    font-size: 1.75rem;
    font-weight: 700;
  }

  &__subtitle {
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
    border-radius: 2.5rem;
    background: var(--color-ip-bg);
    opacity: 0.8;
    height: 2.5rem;
    width: 8rem;

    p {
      font-size: 1rem;
      color: var(--color-text-primary);
    }

    &:hover {
      background: var(--color-icon-bg);
      cursor: pointer;
    }
  }
}

.keen-slider {
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
}

.keen-slider__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  height: 100%;
}
</style>
