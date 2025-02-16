<script setup lang="ts">
import { useKeenSlider } from 'keen-slider/vue'
import { SquareUserRound } from 'lucide-vue-next';

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
          <div class="gallery__photo">
            <div class="gallery__photo-icon"><SquareUserRound :size="18" color="#CCCCCC" /></div>
            <p class="gallery__image-author">{{ item.author }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.gallery {
  position: relative;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  &__image {
    border-left: 2px solid var(--color-grey);
    padding: 1rem;
    height: 100%;
    width: 50rem;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    gap: 0.5rem;
  }

  &__photo {
    opacity: 80%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border-radius: 0.5rem;
    background: var(--color-black-light);
  }

  &__photo-icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 2rem;
  }

  &__image-author {
    padding: 0.5rem;
    border-left: 2px solid var(--color-grey);
    font-size: 0.9rem;
    font-weight: 600;
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
  background: var(--color-black-light);
}
</style>