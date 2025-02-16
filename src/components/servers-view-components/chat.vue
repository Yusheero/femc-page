<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { usePageStore } from '@/store/store';
import { UsersRound, X } from 'lucide-vue-next';
import { storeToRefs } from 'pinia';

const props = defineProps({
  stats: Object,
  serverId: String,
})

// Получаем элементы
const modal = ref();
const store = usePageStore();
const serverStatus = ref(store.getServerStatus(props.serverId!));
const playersOnline = serverStatus.value?.playerNames[0] === undefined ? '' : serverStatus.value?.playerNames[0].split(" ");
const { servers } = storeToRefs(store);

// Локальные переменные для отображения статуса
const serverChat = ref<{ currentPlayers: number; playerNames: string[] } | null>(null);
const loading = ref<boolean>(false);
const error = ref<string | null>(null);

// Функция для получения статуса сервера через Pinia
const fetchServerStatus = async () => {
  loading.value = true;
  error.value = null;
  try {
    await store.fetchServerStatus(props.serverId);
    serverChat.value = servers.value[props.serverId as string] ?? null;
  } catch (err) {
    error.value = 'Не удалось загрузить данные';
  } finally {
    loading.value = false;
  }
};

/** Открыть модал */
const openModal = () => {
  console.log(modal);
  console.log('Открытие модала');
  modal.value.style.display = "block";
}

/** Закрыть модал */
const closeModal = () => {
  if (modal) {
    modal.value.style.display = "none";
  }
}

onMounted(() => {
  modal.value = document.getElementById("myModal");
  fetchServerStatus();
  setInterval(() => fetchServerStatus(), 20000);
})
</script>

<template>
  <div class="chat">
    <div class="chat__title">Игровой чат</div>
    <button class="chat__button" @click="openModal"><p class="chat__button-text">Онлайн : {{ playersOnline.length }}</p><UsersRound :size="22" color="#CCCCCC" /></button>
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
  width: 100%;
  height: 100%;
  background: var(--color-black-light);
  border-radius: 1rem;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  &__title {
    width: 100%;
    height: 4rem;
    border-bottom: 2px solid var(--color-grey);
    font-size: 1.5rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  &__button {
    width: 140px;
    height: 40px;
    background: var(--color-grey);
    border: none;
    border-radius: 0.5rem;
    position: absolute;
    top: 10px;
    right: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;

    &:hover {
      background: #696969;
      cursor: pointer;
    }

    &:active {
      background: #fff;
    }
  }

  &__button-text {
    color: var(--color-secondary);
    font-size: 14px;
    font-weight: 700;
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
  height: 300px;
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
  height: 30px;
  width: 30px;
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

