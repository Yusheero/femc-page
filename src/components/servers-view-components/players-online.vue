<script setup lang="ts">
import { ref } from 'vue';
import { usePageStore } from '@/store/store';

const props = defineProps({
  stats: Object,
  serverId: String,
})

const store = usePageStore();
const serverStatus = ref(store.getServerStatus(props.serverId!));
console.log('Игроки онлайн:', serverStatus.value?.playerNames);
</script>

<template>
  <div class="players-online">
    <div class="players-online__title">Игроки онлайн</div>
    <div v-if="serverStatus?.playerNames" class="players-online__players">
      <div class="players-online__item" v-for="item in serverStatus?.playerNames">{{ item }}</div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.players-online {
  position: relative;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;

  &__players {
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    gap: 0.5rem;
  }

  &__title {
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--color-border);
  }

  &__item {
    width: 100%;
    height: 2.5rem;
    background: var(--color-ip-bg);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
  }
}
</style>

