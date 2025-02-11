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
  const setLastRoutePath = (path: string) => {
    lastRoutePath.value = path;
  }

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
    setLastRoutePath,
    fetchServerStatus,
    getServerStatus,
    totalPlayers,
    fetchAllServerStatuses,
  }
})