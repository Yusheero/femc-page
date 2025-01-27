<script setup lang="ts">
import { Clipboard } from 'lucide-vue-next';
</script>

<template>
  <div class="logo">
    <div class="logo__image"></div>
    <div class="logo__info">
      <p class="logo__title">Играйте, веселитесь, знакомьтесь, делитесь!</p>
      <div class="logo__ip ip">
        <Clipboard color="#CCCCCC" :size="32" />
        <p class="ip__numbers">95.154.67.65</p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo {
  padding: 1.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 2rem;

  &__image {
    width: 336px;
    height: 116px;
    background-image: url('@/assets/images/main-logo.png');
    // filter: drop-shadow(4px 0 white);
    // filter: blur(64px);
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  &__title {
    color: var(--color-text-secondary);
    font-size: 0.9rem;
  }

  &__ip {
    width: 100%;
    padding: 8px 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-secondary);
    background: var(--color-ip-bg);
    border-radius: 0.4rem;
  }
}

.ip {
  &__numbers {
    font-size: 1.2rem;
    width: 100%;
    text-align: center;
  }
}
</style>
