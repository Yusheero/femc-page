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
  </div>
</template>

<style scoped lang="scss">
.send-news {
  padding: 1.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2.8rem;

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
}
</style>
