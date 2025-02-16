<script setup lang="ts">
import { Copy } from 'lucide-vue-next';

/** Копирование текста из поля IP по нажатию кнопки */
const copyInnerHtml = () => {
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
        <div class="logo__city">Новосибирск</div>
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
  width: 100%;
  padding: 5rem 0.5rem 0.5rem 0.5rem;
  background: var(--color-black-light);
  border: 2px solid var(--color-grey);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.8rem;

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
    height: 3.5rem;
    background: var(--color-primary);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__city {
    width: 75%;
    height: 100%;
    padding: 1rem;
    border-right: 1px solid var(--color-secondary);
    font-size: 18px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__ping {
    width: 25%;
    height: 100%;
    padding: 1rem;
    font-size: 14px;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
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
    text-align: center;
    pointer-events: none;
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
    width: 40%;
    height: 100%;
    background: var(--color-grey-dark);
    border-right: 1px solid var(--color-grey);
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    font-size: 1.2rem;
    font-weight: 800;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  &__ip {
    width: 100%;
    height: 4rem;
    background: var(--color-grey-dark);
    color: var(--color-secondary-dark);
    border-radius: 0.5rem;
    font-size: 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.ip {
  position: relative;

  &__numbers {
    width: 16rem;
    padding: 1rem;
    text-align: center;
    font-weight: 700;
  }

  &__button {
    width: 25%;
    height: 100%;
    background: var(--color-grey-dark);
    border: none;
    border-left: 1px solid var(--color-grey);
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      background: var(--color-grey);
      cursor: pointer;
    }
  }
}

@media (max-width: 920px) {
  .logo {
    height: 350px;
    padding: 2.5rem 0.5rem 0.5rem 0.5rem;
    gap: 2.3rem;

    &__city {
      width: 60%;
      font-size: 18px;
    }

    &__ping {
      width: 40%;
      font-size: 16px;
    }

    &__version {
      width: 40%;
      font-size: 16px;
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
