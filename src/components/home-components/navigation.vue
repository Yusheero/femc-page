<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();
const toRouterPath = (route: string) => {
  router.push({ path: route })
}
</script>

<template>
  <div class="navigation">
    <button class="navigation__item" @click="toRouterPath('/')">Планы</button>
    <button class="navigation__item turn" @click="toRouterPath('/team')">Наша команда</button>
    <button class="navigation__item" @click="toRouterPath('/')">Чат</button>
    <button class="navigation__item" @click="toRouterPath('/')">Вакансии</button>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  padding: 0.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;

  &__item {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    background: var(--color-ip-bg);
    opacity: 0.8;
    width: 100%;
    padding: 1rem 0;
    height: 1fr;
    color: var(--color-text-secondary);
    font-size: 1rem;
    font-family: "Nunito Sans", serif;

    &:hover {
      background: var(--color-icon-bg);
      cursor: pointer;
    }
  }
}

.turn {
  background: var(--color-primary);
}
</style>
