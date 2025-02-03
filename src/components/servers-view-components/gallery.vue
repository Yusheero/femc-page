<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue'

const props = defineProps({
  pictures: Object
})

const pictures = props?.pictures?.images

const animation = { duration: 150000, easing: (t: any) => t }

const [container] = useKeenSlider({ 
  loop: true,
  initial: 0,
  slides: {
    perView: 2,
  },
  created(s) {
    s.moveToIdx(5, true, animation)
  },
  updated(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
  animationEnded(s) {
    s.moveToIdx(s.track.details.abs + 5, true, animation)
  },
})
</script>

<template>
  <div class="gallery">
    <div ref="container" class="keen-slider">
      <div v-for="(item, index) in pictures" :key="index" class="keen-slider__slide">
        <div class="gallery__image" :style="{ backgroundImage: `url(${item.image})` }">
          <p class="gallery__image-author">{{ item.author }}</p>
          <p class="gallery__image-description">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  position: relative;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &__image {
    padding: 2rem;
    height: 100%;
    width: 50rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    gap: 0.25rem;
  }

  &__image-author {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__image-description {
    font-size: 1rem;
    font-weight: 400;
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