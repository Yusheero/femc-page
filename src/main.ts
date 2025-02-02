import { createApp } from 'vue'
import './assets/style.scss'
import App from './App.vue'
import router from './router/router'
import { createPinia } from 'pinia'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
