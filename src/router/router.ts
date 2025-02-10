import { createMemoryHistory, createRouter } from 'vue-router';
import ServerView from '@/views/server-view.vue';
import NewsPage from '@/components/news-page.vue';
import HomeView from '@/views/home-view.vue';
import NewsView from '@/views/news-view.vue';
import PlansView from '@/views/plans-view.vue';
import TeamView from '@/views/team-view.vue';

const routes = [
  { path: '/', name: 'HomePage', component: HomeView },
  { path: '/server/:id', name: 'ServerPage', component: ServerView },
  { path: '/news', name: 'NewsPage', component: NewsView },
  { path: '/news/:id', name: 'NewsItemPage', component: NewsPage },
  { path: '/plans', name: 'PlansPage', component: PlansView },
  { path: '/team', name: 'TeamPage', component: TeamView },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router