import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface ServerStatus {
  currentPlayers: number;
  playerNames: string[];
}

export const usePageStore = defineStore('page-store', () => {
  const isMobile = ref(true);
  const servers = ref<Record<string, ServerStatus | undefined>>({});
  const lastRoutePath = ref('');
  const newsData = ref();
  const plansData = ref();

  const setLastRoutePath = (path: string) => {
    lastRoutePath.value = path;
  }

  /** Метод получения данных для новостей */
  const getNewsData = async () => {
    try {
      const response = await axios.get(`https://femc.space/api/news`);
      newsData.value = response.data.status;
    } catch (error) {
      console.error(`Ошибка при загрузке данных новостей:`, error);
    }
  }

  /** Метод получения данных для новостей */
  const getPlansData = async () => {
    try {
      const response = await axios.get(`https://femc.space/api/plans`);
      plansData.value = response.data.status;
    } catch (error) {
      console.error(`Ошибка при загрузке данных планов:`, error);
    }
  }

  /** Метод для обновления чата по серверу */
  const fetchServerChat = async (serverId: string|undefined) => {
    try {
      const response = await axios.get(`https://femc.space/api/chat/${serverId}`);

      if (serverId !== undefined) {
        servers.value[serverId] = response.data.status;
      }
    } catch (error) {
      console.error(`Ошибка при загрузке данных для сервера ${serverId}:`, error);
    }
  };

  /** Метод для обновления данных по серверу */
  const fetchServerStatus = async (serverId: string|undefined) => {
    try {
      const response = await axios.get<{ status: ServerStatus }>(`https://femc.space/api/status/${serverId}`);

      if (serverId !== undefined) {
        servers.value[serverId] = response.data.status;
      }
    } catch (error) {
      console.error(`Ошибка при загрузке данных для сервера ${serverId}:`, error);
    }
  };

  // Метод для обновления данных сразу по нескольким серверам
  const fetchAllServerStatuses = async (serverIds: string[]) => {
    await Promise.all(serverIds.map((id) => fetchServerStatus(id)));
  };

  /** Получение статистики по отдельному серверу */
  const getServerStatus = (serverId: string) => {
    return servers.value[serverId];
  };

  // Получение общего количества игроков на всех серверах
  const totalPlayers = () => {
    return Object.values(servers.value)
      .filter((server) => server !== undefined)
      .reduce((sum, server) => sum + (server?.currentPlayers || 0), 0);
  };

  return {
    lastRoutePath,
    isMobile,
    servers,
    newsData,
    plansData,
    setLastRoutePath,
    getNewsData,
    getPlansData,
    fetchServerStatus,
    fetchServerChat,
    getServerStatus,
    totalPlayers,
    fetchAllServerStatuses,
  }
})