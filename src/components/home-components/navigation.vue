<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter();

/** Переход на роут /team */
const toRouterPath = (route: string) => {
  router.push({ path: route })
}
</script>

<template>
  <div class="navigation">
    <button class="navigation__item" @click="toRouterPath('/')">Планы</button>
    <button class="navigation__item turn" @click="toRouterPath('/team')">Наша команда</button>
    <button class="navigation__item" @click="toRouterPath('/')">Чат</button>
    <button class="navigation__item" @click="toRouterPath('/')">Аллея славы</button>
  </div>
</template>

<style scoped lang="scss">
.navigation {
  width: 100%;
  padding: 0.5rem;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  font-size: 1.5rem;
  font-weight: 700;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.5rem;

  &__item {
    width: 100%;
    height: 1fr;
    padding: 1rem 0;
    border: none;
    background: var(--color-red);
    color: var(--color-secondary);
    border-radius: 0.5rem;
    opacity: 0.8;
    font-size: 0.85rem;
    font-weight: 700;
    font-family: "Nunito Sans", serif;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-secondary-deep-dark-fantasies);
      cursor: pointer;
    }
  }
}

.turn {
  background: var(--color-primary);
  color: var(--white);
}
</style>
