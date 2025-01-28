<script setup lang="ts">
defineProps({
  backgroundClass: String,
  logoUrl: String,
  text: String,
  routerPath: String,
})
</script>

<template>
  <div :class="['server ' + backgroundClass]">
    <img class="server__logo" :src="logoUrl" alt="server-logo">
    <p class="server__text">{{ text }}</p>
  </div>
</template>

<style scoped lang="scss">
.server {
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;

  &__logo {

  }
}

.celestia {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/background-image.jpg');
}
</style>

