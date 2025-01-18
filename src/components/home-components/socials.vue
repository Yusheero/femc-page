<script setup lang="ts">
import { DiscordIcon, TelegramIcon, VkIcon, YouTubeIcon } from 'vue3-simple-icons';
</script>

<template>
  <div class="socials">
    <a class="socials__item" href=""><DiscordIcon size="36px" style="fill: var(--color-discord)"/></a>
    <a class="socials__item" href="https://t.me/fareasternmc"><TelegramIcon size="36px" style="fill: var(--color-telegram)"/></a>
    <a class="socials__item" href="https://vk.com/fareasternmc"><VkIcon size="36px" style="fill: var(--color-vk)"/></a>
    <a class="socials__item" href="https://www.youtube.com/@fareastern_mc"><YouTubeIcon size="36px" style="fill: var(--color-youtube)"/></a>
  </div>
</template>

<style scoped lang="scss">
.socials {
  background: var(--color-white);
  padding: 16px;
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  font-size: 32px;
  font-weight: 700;

  &__item {
    background: var(--color-black);
    height: 100%;
    width: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 8px;

    &:hover {
      background: var(--color-grey);
    }
  }
}
</style>
