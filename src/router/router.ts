import { createMemoryHistory, createRouter } from 'vue-router';
import ServerView from '@/views/server-view.vue';
import NewsPage from '@/components/news-page.vue';
import HomeView from '@/views/home-view.vue';
import NewsView from '@/views/news-view.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomeView },
  { path: '/server/:id', name: 'ServerPage', component: ServerView },
  { path: '/news', name: 'NewsPage', component: NewsView },
  { path: '/news/:id', name: 'NewsItemPage', component: NewsPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router