<script setup lang="ts">
import { ArrowLeft } from 'lucide-vue-next';
import { useRouter } from 'vue-router';
import { DiscordIcon } from 'vue3-simple-icons'

const router = useRouter();
const toRouterPath = () => {
  router.push({ path: '/' })
}
</script>

<template>
  <div class="send-news">
    <div class="send-news__header">
      <button class="send-news__button" @click="toRouterPath"><ArrowLeft :size="24" color="#CCCCCC" /></button>
      <div class="send-news__text">
        <p class="send-news__title">Написать свою новость</p>
        <p class="send-news__title">вы можете на любом из наших ресурсов!</p>
      </div> 
    </div>    
    <div class="send-news__content">
      <a class="item" href="https://t.me/fareasternmc">
        <div class="item__image"><img class="item__icon" src="@/assets/icons/tg-icon.svg"></div>
        <div class="item__text">FEMC Telegram</div>
      </a>
      <a class="item" href="https://vk.com/fareasternmc">
        <div class="item__image"><img class="item__icon" src="@/assets/icons/vk-icon.svg"></div>
        <div class="item__text">FEMC VK Group</div>
      </a>
      <a class="item" href="#">
        <div class="item__image"><DiscordIcon style="fill: white" size="20px"/></div>
        <div class="item__text">FEMC Discord</div>
      </a>
    </div>
    <p class="send-news__attention">Для избежания конфликтных ситуаций настоятельно рекомендуем ознакомиться с правилами проекта, а так же с правилами размещения новостей  в базе знаний!</p>
  </div>
</template>

<style scoped lang="scss">
.send-news {
  position: relative;
  padding: 1.5rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  &__header {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    height: 100%;
  }

  &__text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.3rem;
  }

  &__content {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 3rem);
    gap: 0.5rem;
  }

  &__attention {
    font-size: 1rem;
    font-weight: 300;
    color: var(--color-text-secondary);
    text-align: center;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
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

.item {
  width: 100%;
  padding: 0.375rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
  background: var(--color-ip-bg);
  color: var(--color-text-secondary);
  border-radius: 0.5rem;
  text-decoration: none;

  &:hover {
    background: var(--color-icon-bg);
  }

  &__image {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 2.2rem;
    height: 2.2rem;
    border-radius: 0.25rem;
    background: var(--color-icon-bg);
  }

  &__icon {
    width: 2rem;
    height: 2rem;
  }
}
</style>
