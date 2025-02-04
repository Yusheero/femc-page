<script setup lang="ts">
import { Copy } from 'lucide-vue-next';

function copyInnerHtml() {
  // Получаем элемент по его id
  const element = document.getElementById("ip")?.innerHTML;

  // Используем Clipboard API для копирования
  if (element !== null && element) {
    navigator.clipboard.writeText(element).then(() => {
    }).catch(err => {
      console.error("Не удалось скопировать текст: ", err);
    });
  }
}
</script>

<template>
  <div class="logo">
    <div class="logo__image"></div>
    <div class="logo__info">
      <div class="logo__ip ip">
        <div class="logo__version">1.21.3</div>
        <p class="ip__numbers" id="ip">femc.space</p>
        <button class="ip__button" @click="copyInnerHtml"><Copy :size="22" color="#CCCCCC" /></button>
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
  gap: 2.8rem;
  width: 100%;

  &__image {
    width: 18.75rem;
    height: 6.469rem;
    background-image: url('@/assets/images/main-logo.png');
    background-size: contain;
    filter: drop-shadow(0px 0px 28px rgba(255, 255, 255, 0.8));
  }

  &__info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.75rem;
  }

  &__version {
    // width: 100%;
    height: 100%;
    background: var(--color-ip-bg);
    padding: 1rem;
    font-size: 1.1rem;
    font-weight: 800;
    border-right: 1px solid var(--color-border);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &__ip {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--color-text-secondary);
    background: var(--color-ip-bg);
    border-radius: 0.4rem;
  }
}

.ip {
  position: relative;

  &__numbers {
    padding: 1rem;
    font-size: 1.5rem;
    font-weight: 800;
    width: 100%;
    text-align: center;
  }

  &__button {
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-left: 1px solid var(--color-border);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    background: var(--color-ip-bg);

    &:hover {
      cursor: pointer;
      background: var(--color-border);
    }
  }
}
</style>
