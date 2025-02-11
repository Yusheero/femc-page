<script setup lang="ts">
import { ArrowUpRight } from 'lucide-vue-next';
import { usePageStore } from "@/store/store";
import { useRoute } from "vue-router";
import { useRouter } from 'vue-router';

defineProps({
  data: Object
})

const store = usePageStore();
const route = useRoute();
const router = useRouter();

const toRouterPath = (id: any) => {
  store.setLastRoutePath(route.path);
  router.push({ path: `/news/${id}` })
}
</script>

<template>
  <div class="news-item" :style="{ backgroundImage: `linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url(${data?.homePreviewImage})` }">
    <div class="news-item__title">{{ data?.title }}</div>
    <div class="news-item__text">{{ data?.text }}</div>
    <button @click="toRouterPath(data?.id)" class="news-item__button"><ArrowUpRight :size="24" color="#CCCCCC" /></button>
  </div>
</template>

<style scoped lang="scss">
.news-item {
  position: relative;
  padding: 1.5rem;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.5rem;

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__text {
    font-size: 1rem;
    color: var(--color-text-secondary);
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
