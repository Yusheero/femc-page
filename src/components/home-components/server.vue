<script setup lang="ts">
/** Компонент сервера в HomeView */
import { ArrowRight } from 'lucide-vue-next';
import { useRouter } from 'vue-router';

const props = defineProps({
  backgroundClass: String,
  logoClass: String,
  text: String,
  labels: Array,
  routerPath: String,
})

const router = useRouter();

/** Обработчик клика на кнопку */
const toRouterPath = () => {
  router.push({ path: props.routerPath })
}
</script>

<template>
  <div :class="['server ' + backgroundClass]">
    <div :class="['server__logo ' + logoClass]"></div>
    <div class="server__content">
      <div class="server__labels"><p v-for="item in labels" class="server__label">{{ item }}</p></div>
      <p class="server__text">{{ text }}</p>
    </div> 
    <button class="server__button" @click="toRouterPath"><ArrowRight :size="24" color="#CCCCCC" /></button>
  </div>
</template>

<style scoped lang="scss">
.server {
  position: relative;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 1.5rem;

  &__content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  &__labels {
    display: flex;
    flex-direction: row;
    gap: 0.5rem;
  }

  &__label {
    background: var(--color-secondary-bg);
    padding: 0.3rem 0.5rem;
    font-size: 1rem;
    border-radius: 0.25rem;
  }

  &__logo {
    background-size: contain;
    background-repeat: no-repeat;
    width: 314px;
    height: 3rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 300;
  }

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
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

.logo {
  &__celedia {
    background-image: url('@/assets/images/celedia-logo.png');
    
  }

  &__celedia-old {
    background-image: url('@/assets/images/celedia-old-logo.png');
  }

  &__pawhera {
    background-image: url('@/assets/images/pawhera-logo.png');
  }

  &__eventus {
    background-image: url('@/assets/images/eventus-logo.png');
  }
}

.celedia {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/celedia-bg.jpg');
  background-size: cover;
}

.celedia-old {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/celedia-old-bg.jpg');
  background-size: cover;
}

.pawhera {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/pawhera-bg.jpg');
  background-size: cover;
}

.eventus {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/eventus-bg.jpg');
  background-size: cover;
}
</style>

