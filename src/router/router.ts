import { createMemoryHistory, createRouter } from 'vue-router';
import CelestiaView from '@/views/celestia-view.vue';
import NewsItem from '@/components/news-item.vue';
import HomeView from '@/views/home-view.vue';

const routes = [
  { path: '/', component: HomeView },
  { path: '/celestia', component: CelestiaView },
  { path: '/news/:id', component: NewsItem},
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router