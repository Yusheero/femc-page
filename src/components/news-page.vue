<script setup lang="ts">
import { computed } from 'vue';
import { X } from 'lucide-vue-next';
import { usePageStore } from '@/store/store';
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';
import { newsData } from '@/data/news-data';

const store = usePageStore();
const router = useRouter();
const route = useRoute();
const newsId = route.params.id;

const pageData = computed(() => newsData.find((n) => n.id === newsId));

const toRouterPath = () => {
  const lastRoutePath = store.lastRoutePath;
  router.push({ path: `${lastRoutePath}`})
}
</script>

<template>
  <div class="page-data">
    <div class="page-data__content" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.5) 80.5%, #050505 100%), url(${pageData?.newsPreviewImage})` }">
      <p class="page-data__title">{{ pageData?.title }}</p>
      <p class="page-data__text">{{ pageData?.text }}</p>
      <button class="page-data__button" @click="toRouterPath"><X :size="24" color="#CCCCCC" /></button>
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
  padding: 1rem;
  background: var(--color-black);
  color: var(--color-secondary);

  &__content {
    padding: 2rem;
    border-radius: 1rem;
    position: relative;
    width: 100%;
    height: 100%;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
  }

  &__title {
    font-size: 2.5rem;
    font-weight: 700;
  }

  &__text {
    color: var(--color-secondary-dark);
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
    background: var(--color-grey-dark);
    opacity: 0.8;
    width: 2.5rem;
    height: 2.5rem;

    &:hover {
      background: var(--color-grey-light);
      cursor: pointer;
    }
  }
}
</style>