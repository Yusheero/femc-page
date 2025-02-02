<script setup lang="ts">
import { computed } from 'vue';
import { House } from 'lucide-vue-next';
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { newsData } from '@/data/news-data';

const router = useRouter();
const route = useRoute();
const newsId = route.params.id;

const pageData = computed(() => newsData.find((n) => n.id === newsId));

const toRouterPath = () => {
  router.push({ path: '/'})
}
</script>

<template>
  <div class="page-data">
    <div class="page-data__content">
      <p class="page-data__title">{{ pageData?.title }}</p>
      <p class="page-data__text">{{ pageData?.text }}</p>
      <button class="page-data__button" @click="toRouterPath"><House :size="24" color="#CCCCCC" /></button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.page-data {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);

  &__content {
    padding: 3rem;
    border-radius: 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    background: var(--color-secondary-bg);
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1.5rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  &__text {
    color: var(--color-text-secondary);
    font-size: 1.5rem;
    font-weight: 400;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
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