<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();

const props = defineProps({
  data: Object,
})

const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="info">
    <div class="info__header">
      <button class="info__button" @click="toRouterPath"><ArrowLeft :size="24" color="#CCCCCC" /></button>
      <div :class="['info__logo ' + props?.data?.logoClass]"></div>
    </div>
    <p class="info__text">{{ props?.data?.text1 }}</p>
    <p class="info__text">{{ props?.data?.text2 }}</p>
    <div class="info__line-break"></div>
    <p class="info__text">{{ props?.data?.text3 }}</p>
    <p class="info__text">{{ props?.data?.text4 }}</p>
  </div>
</template>

<style scoped lang="scss">
.info {
  position: relative;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem;

  &__header {
    padding: 1rem 0;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 2rem;
  }

  &__line-break {
    border-bottom: 1px solid var(--color-line-break);
    width: 100%;
  }

  &__logo {
    width: 300px;
    height: 60px;
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
    background: var(--color-ip-bg);
    opacity: 0.8;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background: var(--color-icon-bg);
      cursor: pointer;
    }
  }

  &__celedia {
    background-image: url('@/assets/images/celedia-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(51, 115, 189, 0.8));
  }

  &__celedia-old {
    background-image: url('@/assets/images/celedia-old-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(59, 93, 167, 0.8));
  }

  &__pawhera {
    background-image: url('@/assets/images/pawhera-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(21, 39, 206, 0.8));
  }

  &__eventus {
    background-image: url('@/assets/images/eventus-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 12px rgba(187, 90, 174, 0.8));
  }
}
</style>

