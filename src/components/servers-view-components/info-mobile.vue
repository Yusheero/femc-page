<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const props = defineProps({
  data: Object,
})

const router = useRouter();
const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="info-mobile">
    <div class="info-mobile__header">
      <button class="info-mobile__button" @click="toRouterPath"><ArrowLeft :size="24" color="#CCCCCC" /></button>
      <div :class="['info-mobile__logo ' + props?.data?.logoClass]"></div>
    </div>
    <p class="info-mobile__text">{{ props?.data?.text1 }}</p>
    <p class="info-mobile__text">{{ props?.data?.text2 }}</p>
    <div class="info-mobile__line-break"></div>
    <p class="info-mobile__text">{{ props?.data?.text3 }}</p>
    <p class="info-mobile__text">{{ props?.data?.text4 }}</p>
  </div>
</template>

<style scoped lang="scss">
.info-mobile {
  position: relative;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;
  width: 100%;

  &__header {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  &__line-break {
    border-bottom: 1px solid var(--color-secondary-deep-dark-fantasies);
    width: 100%;
  }

  &__logo {
    width: 200px;
    height: 36px;
    background-repeat: no-repeat;
  }

  &__text {
    line-height: 120%;
    font-size: 1rem;
    font-weight: 200;
  }


  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 50%;
    background: var(--color-grey-dark);
    opacity: 0.8;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }

  .celedia {
    background-image: url('@/assets/images/celedia-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(51, 115, 189, 0.8));
  }

  .celedia-old {
    background-image: url('@/assets/images/celedia-old-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(59, 93, 167, 0.8));
  }

  .pawhera {
    background-image: url('@/assets/images/pawhera-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(21, 39, 206, 0.8));
  }

  .eventus {
    background-image: url('@/assets/images/eventus-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(187, 90, 174, 0.8));
  }
}
</style>

