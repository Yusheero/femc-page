<script setup lang="ts">
import { DiscordIcon, TelegramIcon, VkIcon, YouTubeIcon } from 'vue3-simple-icons'
</script>

<template>
  <div class="socials">
    <div class="socials__header">
      <p class="socials__title">Подпишитесь на</p>
      <p class="socials__subtitle">Наши социальные сети</p>
    </div>
    <div class="socials__buttons">
      <a class="item" href="https://t.me/fareasternmc">
        <div class="item__image"><TelegramIcon style="fill: #24A1DE" size="20px"/></div>
        <div class="item__text">FEMC Telegram</div>
      </a>
      <a class="item" href="https://discord.gg/BMA2mmaw">
        <div class="item__image"><DiscordIcon style="fill: #7289da" size="20px"/></div>
        <div class="item__text">FEMC Discord</div>
      </a>
      <a class="item" href="https://www.youtube.com/@fareastern_minecraft">
        <div class="item__image"><YouTubeIcon style="fill: #c4302b" size="20px"/></div>
        <div class="item__text">FEMC Youtube</div>
      </a>
      <a class="item" href="https://vk.com/fareasternmc">
        <div class="item__image"><VkIcon style="fill: #4C75A3" size="20px"/></div>
        <div class="item__text">FEMC VK Group</div>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.socials {
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem 0.5rem 0.5rem 0.5rem;
  width: 100%;
  height: 100%;

  &__header {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.125rem;
  }

  &__buttons {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.5rem;
  }

  &__title {
    color: var(--color-secondary-dark);
    font-size: 1rem;
    font-weight: 600;
  }

  &__subtitle {
    font-size: 1.25rem;
    font-weight: 600;
  }
}

.item {
  width: 100%;
  padding: 0.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-grey-dark);
  color: var(--color-secondary-dark);
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    background: var(--color-grey-light);
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.25rem;
    background: var(--color-grey-light);
  }

  &__icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
