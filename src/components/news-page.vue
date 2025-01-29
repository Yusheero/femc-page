<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from "vue-router";

const route = useRoute();
const newsId = route.params.id;

const allNews = [
  { id: "1", title: "Первая новость" },
  { id: "2", title: "Вторая новость" },
  { id: "3", title: "Третья новость" },
];

const news = computed(() => allNews.find((n) => n.id === newsId));
</script>

<template>
  <div>
    <h1>Детали новости</h1>
    <p v-if="news">ID: {{ news.id }}</p>
    <p v-if="news">Заголовок: {{ news.title }}</p>
    <router-link to="/">Назад к списку</router-link>
  </div>
</template>