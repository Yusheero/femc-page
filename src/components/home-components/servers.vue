<script setup lang="ts">
import ServersItem from './servers-item.vue';

/** Названия серверов */
// TODO: Переделать в computed который достает дюанные из store
const serversTitle = {
  1: "NEW CELEDIA",
  2: "CELEDIA",
  3: "PAWHERA",
}
</script>

<template>
  <div class="servers">
    <ServersItem v-for="title in serversTitle" :serverTitle="title" />
  </div>
</template>

<style scoped>
.servers {
  padding: 16px;
  background: var(--color-white);
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 32px;
  font-weight: 700;
}
</style>
