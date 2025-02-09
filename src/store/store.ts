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
  const pawheraPlayersData = ref<{ currentPlayers: number; playerNames: string[] } | null>(null);
  const celediaPlayersData = ref<{ currentPlayers: number; playerNames: string[] } | null>(null);
  const celediaOldPlayersData = ref<{ currentPlayers: number; playerNames: string[] } | null>(null);
  const setLastRoutePath = (path: string) => {
    lastRoutePath.value = path;
  }

  const fetchServerStatus = async (serverId: string|undefined) => {
    try {
      const response = await axios.get<{ status: ServerStatus }>(`http://femc.space:3005/api/status/${serverId}`);

      if (serverId !== undefined) {
        servers.value[serverId] = response.data.status;
        console.log(servers.value[serverId]); 
        console.log(servers);
      }
    } catch (error) {
      console.error(`Ошибка при загрузке данных для сервера ${serverId}:`, error);
    }
  }

  return {
    lastRoutePath,
    isMobile,
    pawheraPlayersData,
    celediaPlayersData,
    celediaOldPlayersData,
    servers,
    setLastRoutePath,
    fetchServerStatus,
  }
})