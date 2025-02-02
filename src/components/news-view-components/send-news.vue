<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const router = useRouter();
const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="send-news">
    <button class="send-news__button" @click="toRouterPath"><ArrowLeft :size="24" color="#CCCCCC" /></button>
    <div class="send-news__content">
      <p class="send-news__title">Написать свою новость</p>
      <p class="send-news__title">вы можете на любом из наших ресурсов!</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.send-news {
  position: relative;
  padding: 1.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;

  &__content {
    width: 100%;
    height: 100%;
  }

  &__button {
    position: absolute;
    top: 1rem;
    left: 1rem;
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
}
</style>
