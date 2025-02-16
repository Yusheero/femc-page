<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { teamData } from '@/data/team';
import KeenSlider from "keen-slider";
import { KeenSliderInstance } from 'keen-slider';
import { ArrowLeft } from 'lucide-vue-next';
import TeamViewMobile from "./team-view-mobile.vue";
import { usePageStore } from '@/store/store';

const store = usePageStore();
const sliderRef = ref<HTMLElement | null>(null);
let slider: KeenSliderInstance | null = null;

const animation = { duration: 150000, easing: (t: any) => t }

onMounted(() => {
  if (!store.isMobile) {
    // Инициализация слайдера
    slider = new KeenSlider(sliderRef.value!, {
      loop: true,
      slides: {
        perView: 2,
        spacing: 12,
      },
      drag: true,
      created(s) {
      s.moveToIdx(5, true, animation)
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, animation)
      },
    });
  }
});

onUnmounted(() => {
  if (!store.isMobile) {
    slider?.destroy();
  } 
});
</script>

<template>
  <TeamViewMobile v-if="store.isMobile" />
  <div v-else class="team-view">
    <div class="team-view__main main">
      <router-link class="router-button" to="/"><ArrowLeft :size="24" color="#CCCCCC" /></router-link>
    </div>
    <div class="team-view__slider slider">
      <div ref="sliderRef" class="keen-slider">
        <div class="keen-slider__slide" v-for="(slide, index) in teamData" :key="index">
          <div class="slider__content">
            <div class="slider__image-container">
              <img class="slider__image" :src="slide.skin" alt="skin">
            </div>
            <div class="slider__title-container">
              <div class="slider__title">{{ slide.title }}</div>
              <div class="slider__tag">{{ slide.tag }}</div> 
            </div>
            <div class="slider__description">{{ slide.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.team-view {
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
  background: var(--color-black);
  color: var(--color-secondary);

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
  background: var(--color-grey-light);
  border-radius: 1rem;
}

.slider {
  display: flex;
  justify-content: center;
  align-items: center;

  &__content {
    padding: 2rem;
    border-radius: 0.8rem;
    border: 2px solid var(--color-grey);
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
    height: 30rem;
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
    color: var(--color-black);
    padding: 0.2rem 0.4rem;
    border-radius: 0.2rem;
    font-size: 0.8rem;
    font-weight: 700;
    line-height: 1.4;
  }

  &__description {
    word-wrap: break-word; /* Для старых браузеров */
    overflow-wrap: break-word;
    width: 100%;
    height: 3.5rem;
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