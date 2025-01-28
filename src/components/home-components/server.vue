<script setup lang="ts">
import { ArrowRight } from 'lucide-vue-next';

defineProps({
  backgroundClass: String,
  logoClass: String,
  text: String,
  routerPath: String,
})

const toRouterPath = () => {
  
}
</script>

<template>
  <div :class="['server ' + backgroundClass]">
    <div :class="['server__logo ' + logoClass]"></div>
    <p class="server__text">{{ text }}</p>
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

  &__logo {
    background-size: contain;
    background-repeat: no-repeat;
    width: 314px;
    height: 3rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 200;
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
    width: 3rem;
    height: 3rem;

    &:hover {
      background: var(--color-icon-bg);
      cursor: pointer;
    }
  }
}

.logo {
  &__celestia {
    background-image: url('@/assets/images/celestia-logo.png');
  }

  &__celestia-old {
    background-image: url('@/assets/images/celestia-old-logo.png');
  }

  &__pawhera {
    background-image: url('@/assets/images/pawhera-logo.png');
  }

  &__eventus {
    background-image: url('@/assets/images/eventus-logo.png');
  }
}

.celestia {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/celestia-bg.jpg');
}

.celestia-old {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/celestia-old-bg.jpg');
}

.pawhera {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/pawhera-bg.jpg');
}

.eventus {
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/eventus-bg.jpg');
}
</style>

