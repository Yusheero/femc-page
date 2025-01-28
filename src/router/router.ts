import { createMemoryHistory, createRouter } from 'vue-router';
import CelestiaView from '@/views/celestia-view.vue';
import NewsItem from '@/components/news-item.vue';
import HomeView from '@/views/home-view.vue';
import NewsView from '@/views/news-view.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomeView },
  { path: '/celestia', name: 'CelestiaPage', component: CelestiaView },
  { path: '/celestia-old', name: 'CelestiaOldPage', component: CelestiaView },
  { path: '/pawhera', name: 'PawheraPage', component: CelestiaView },
  { path: '/eventus', name: 'EventusPage', component: CelestiaView },
  { path: '/news', name: 'NewsPage', component: NewsView },
  { path: '/news/:id', name: 'NewsItemPage', component: NewsItem },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router