import { createMemoryHistory, createRouter } from 'vue-router';

import HomeView from '../views/home-view.vue';
import CelediaView from '../views/celedia-view.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/celedia', component: CelediaView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router