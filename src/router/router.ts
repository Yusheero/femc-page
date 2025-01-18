import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../views/home-view.vue';
import ServersView from '../views/servers-view.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: ServersView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router