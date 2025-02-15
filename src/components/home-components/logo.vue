<script setup lang="ts">
import { Copy } from 'lucide-vue-next';

function copyInnerHtml() {
  const textDiv = document.getElementById('ip');
  const textToCopy = textDiv?.innerText;

  // Используем Clipboard API для копирования
  if (textDiv !== null && textToCopy) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      // Сохраняем оригинальный текст
      const originalText = textDiv.innerText;

      // Показываем сообщение "Скопировано"
      textDiv.innerText = "Скопировано";

      // Через 2 секунды возвращаем оригинальный текст
      setTimeout(() => {
        textDiv.innerText = originalText;
      }, 3000);
    }).catch(err => {
      console.error("Не удалось скопировать текст: ", err);
    });
  }
}
</script>

<template>
  <div class="logo">
    <div class="logo__image"></div>
    <div class="logo__bottom">
      <div class="logo__location-row">
        <div class="logo__city">Новоссибирск</div>
        <div class="logo__ping">60-80ms</div>
      </div>
      <div class="logo__location-row">
        <div class="logo__city">Владивосток</div>
        <div class="logo__ping">5-15ms</div>
      </div>
      <div class="logo__info">
        <div class="logo__ip ip">
          <div class="logo__version">1.21.3</div>
          <p class="ip__numbers" id="ip">femc.space</p>
          <button class="ip__button" @click="copyInnerHtml"><Copy :size="26" color="#CCCCCC" /></button>
        </div>
      </div>
    </div>  
  </div>
</template>

<style scoped lang="scss">
.logo {
  padding: 5.5rem 0.8rem 0.8rem 0.8rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;
  width: 100%;

  &__bottom {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 0.5rem;
  }

  &__location-row {
    width: 100%;
    height: 3rem;
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--color-primary);
  }

  &__city {
    height: 100%;
    font-size: 20px;
    font-weight: 700;
    width: 75%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border-right: 1px solid var(--color-secondary);
  }

  &__ping {
    height: 100%;
    font-size: 14px;
    width: 25%;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
  }

  &__image {
    width: 15.75rem;
    height: 5.469rem;
    background-image: url('@/assets/images/main-logo.png');
    background-size: contain;
    background-repeat: no-repeat;
    filter: drop-shadow(0px 0px 44px rgba(255, 255, 255, 0.8));
  }

  &__title {
    font-size: 2rem;
    font-weight: 700;
    pointer-events: none;
    text-align: center;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40%;
    height: 100%;
    background: var(--color-ip-bg);
    font-size: 1.2rem;
    font-weight: 800;
    border-right: 1px solid var(--color-border);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }

  &__ip {
    height: 4rem;
    width: 100%;
    display: flex;
    font-size: 1.5rem;
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
    font-weight: 700;
    width: 16rem;
    text-align: center;
  }

  &__button {
    width: 25%;
    height: 100%;
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

@media (max-width: 920px) {
  .logo {
    height: 350px;
    gap: 2.3rem;
    padding: 2.5rem 0.8rem 0.8rem 0.8rem;

    &__city {
      font-size: 16px;
      width: 60%;
    }

    &__ping {
      width: 40%;
      font-size: 12px;
    }

    &__version {
      font-size: 16px;
      width: 40%;
    }

    &__ip {
      font-size: 18px;
    }

    &__image {
      width: 13rem;
      height: 5.469rem;
    }
  }

  .ip {
    &__button {
      width: 6rem;
    }
  }
}
</style>
