<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usePageStore } from '@/store/store';
import { UsersRound, X } from 'lucide-vue-next';

const props = defineProps({
  stats: Object,
  serverId: String,
})

// Получаем элементы
const modal = ref();

const store = usePageStore();
const serverStatus = ref(store.getServerStatus(props.serverId!));
const playersOnline = serverStatus.value?.playerNames[0] === undefined ? '' : serverStatus.value?.playerNames[0].split(" ");

const openModal = () => {
  console.log(modal);
  console.log('Открытие модала');
  modal.value.style.display = "block";
}

const closeModal = () => {
  if (modal) {
    modal.value.style.display = "none";
  }
}

onMounted(() => {
  modal.value = document.getElementById("myModal");
})
</script>

<template>
  <div class="chat">
    <div class="chat__title">Игровой чат</div>
    <button class="chat__button" @click="openModal"><UsersRound :size="22" color="#CCCCCC" /></button>
    <!-- Модальное окно -->
    <div id="myModal" class="modal">
      <div class="modal-content">
        <button @click="closeModal" class="close"><X :size="22" color="#CCCCCC" /></button>
        <h3 class="modal__title">Игроки онлайн</h3>
        <div v-if="serverStatus?.playerNames" class="modal__players">
          <div class="modal__item" v-for="item in playersOnline">{{ item }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.chat {
  position: relative;
  background: var(--color-black-light);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;

  &__title {
    width: 100%;
    height: 4rem;
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid var(--color-grey);
  }

  &__button {
    background: var(--color-grey);
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border: none;
    border-radius: 0.5rem;

    &:hover {
      background: #696969;
      cursor: pointer;
    }

    &:active {
      background: #fff;
    }
  }

  &__online {
    display: none;
  }
}

/* Основные стили для модального окна */
.modal {
  display: none; /* Скрыто по умолчанию */
  position: fixed; /* Остается на месте при прокрутке */
  z-index: 1; /* Поверх других элементов */
  left: 0;
  top: 0;
  width: 100%; /* Полная ширина */
  height: 100%; /* Полная высота */
  overflow: auto; /* Включить прокрутку, если нужно */
  background-color: rgb(0,0,0); /* Цвет фона */
  background-color: rgba(0,0,0,0.4); /* Черный с прозрачностью */

  &__title {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    height: 60px;
    line-height: 1.1;
  }

  &__players {
    padding: 0.5rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    height: 100%;
    gap: 0.5rem;
  }

  &__item {
    height: 3rem;
    background: var(--color-grey-dark);
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1rem;
    font-weight: 600;
    border-radius: 0.5rem;
  }
}

/* Стили для содержимого модального окна */
.modal-content {
  position: relative;
  background-color: #808080;
  margin: 15% auto; /* 15% от верха и по центру */
  border: 1px solid #888;
  height: 400px;
  font-size: 26px;
  color: var(--color-secondary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%; /* Ширина содержимого */
  max-width: 600px; /* Максимальная ширина */
  border-radius: 10px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.3);
}

/* Стили для кнопки закрытия */
.close {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  position: absolute;
  top: 7px;
  right: 7px;
  color: #aaa;
  float: right;
  font-size: 28px;
  font-weight: bold;
  border-radius: 0.3rem;
  border: none;
}

.close:hover,
.close:focus {
  background: black;
  text-decoration: none;
  cursor: pointer;
}
</style>

