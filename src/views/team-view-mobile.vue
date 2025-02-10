<script setup lang="ts">
import { ref, onMounted, onUnmounted, nextTick } from "vue";
import { teamData } from '@/data/team';
import KeenSlider, { KeenSliderInstance } from "keen-slider";
import { ArrowLeft } from 'lucide-vue-next';

let sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

const animation = { duration: 150000, easing: (t: any) => t };

onMounted(async () => {
  await nextTick(); // Ждём полной отрисовки DOM

  if (sliderRef instanceof HTMLElement || (sliderRef.value instanceof HTMLElement)) {
    slider = new KeenSlider(sliderRef.value as HTMLElement, {
      loop: true,
      slides: {
        perView: 1,
        spacing: 8,
      },
      drag: true,
      created(s) {
        s.moveToIdx(5, true, animation);
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation);
      },
    });
  } else {
    console.error('sliderRef не является HTMLElement:', sliderRef.value);
  }
});

onUnmounted(() => {
  if (slider && typeof slider.destroy === 'function') {
    slider.destroy();
  } else {
    console.error('Slider не инициализирован или destroy не является функцией', slider);
  }
});
</script>

<template>
  <div class="team-view-mobile">
    <div class="team-view__main main">
      <router-link class="router-button" to="/"><ArrowLeft :size="24" color="#CCCCCC" /></router-link>
    </div>
    <div class="team-view-mobile__slider slider-mobile">
      <div :ref="(el) => sliderRef = el as HTMLElement" class="keen-slider">
        <div class="keen-slider__slide" v-for="(slide, index) in teamData" :key="index">
          <div class="slider-mobile__content">
            <div class="slider-mobile__image-container">
              <img class="slider-mobile__image" :src="slide.skin" alt="skin">
            </div>
            <div class="slider-mobile__title-container">
              <div class="slider-mobile__title">{{ slide.title }}</div>
              <div class="slider-mobile__tag">{{ slide.tag }}</div> 
            </div>
            <div class="slider-mobile__description">{{ slide.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-view-mobile {
  width: 100%;
  height: 90vh;
  display: flex;
  flex-direction: column;
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

  .main {
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-icon-bg);
    border-radius: 1rem;
  }
}

.slider-mobile {
  height: 100%;
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

  &__image-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__image {
    height: 25rem;
    filter: drop-shadow(0px 0px 22px rgba(255, 255, 255, 0.4));
  }

  &__title-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  &__title {
    font-family: "Gabarito", serif;
    font-size: 1.7rem;
    font-weight: 700;
  }

  &__tag {
    background: var(--color-secondary);
    color: var(--color-primary-bg);
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.4;
  }

  &__description {
    word-wrap: break-word;
    overflow-wrap: break-word;
    width: 100%;
    height: 5rem;
    line-height: 1.1;
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
