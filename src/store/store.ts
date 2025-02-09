import { defineStore } from 'pinia';
import { ref } from 'vue';
import axios from 'axios';

interface ServerStatus {
  currentPlayers: number;
  playerNames: string[];
}

export const usePageStore = defineStore('page-store', () => {
  const isMobile = ref(false);
  const servers = ref<Record<string, ServerStatus | undefined>>({});
  const lastRoutePath = ref('');
  const setLastRoutePath = (path: string) => {
    lastRoutePath.value = path;
  }

  const fetchServerStatus = async (serverId: string|undefined) => {
    try {
      const response = await axios.get<{ status: ServerStatus }>(`http://femc.space:3005/api/status/${serverId}`);

      if (serverId !== undefined) {
        servers.value[serverId] = response.data.status;
        console.log(`Полученные данные по серверу ${serverId}`, servers.value[serverId]); 
      }
    } catch (error) {
      console.error(`Ошибка при загрузке данных для сервера ${serverId}:`, error);
    }
  }

  return {
    lastRoutePath,
    isMobile,
    servers,
    setLastRoutePath,
    fetchServerStatus,
  }
})