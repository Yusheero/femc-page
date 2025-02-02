<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from 'keen-slider';
import { useRouter } from 'vue-router';

const props = defineProps({
  news: Object,
})

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
    slides: { perView: 5 },
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
        <div class="news-item">
          <p class="news-item__title">{{ slide.title }}</p>
          <p class="news-item__text">{{ slide.text }}</p>
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

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__text {
    font-size: 1rem;
    color: var(--color-text-secondary);
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

