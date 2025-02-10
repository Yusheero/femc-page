<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { plansData } from '@/data/plans';
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from 'keen-slider';
import { ArrowLeft } from 'lucide-vue-next';

const sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

onMounted(() => {
  // Инициализация слайдера
  slider = new KeenSlider(sliderRef.value!, {
    loop: false,
    slides: { 
      perView: 2,
      spacing: 12,
    },
    drag: true,
  });
});

onUnmounted(() => {
  slider?.destroy();
});
</script>

<template>
  <div class="plans-view">
    <div class="plans-view__main main">
      <router-link class="router-button" to="/"><ArrowLeft :size="24" color="#CCCCCC" /></router-link>
    </div>
    <div class="plans-view__slider slider">
      <div ref="sliderRef" class="keen-slider">
        <div class="keen-slider__slide" v-for="(slide, index) in plansData" :key="index">
          <div class="slider__content">
            <div class="slider__title">{{ slide.title }}</div>
            <div class="slider__description">{{ slide.text }}</div>
            <div class="slider__description">{{ slide.status }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.plans-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 450px 320px 3fr 1fr 2fr;
  grid-template-rows: 4fr 2fr;
  grid-template-areas:
    "main slider slider slider slider"
    "main slider slider slider slider";
  gap: 0.8rem;
  padding: 0.8rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);

  &__main {
    grid-area: main;
  }

  &__slider {
    grid-area: slider;
  }
}

.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--color-icon-bg);
  border-radius: 1rem;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    padding: 2rem;
    border-radius: 0.8rem;
    border: 2px solid var(--color-border);
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5rem;
    background-size: cover;
  }

  &__title {
    font-size: 1.3rem;
    font-weight: 700;
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
</style>