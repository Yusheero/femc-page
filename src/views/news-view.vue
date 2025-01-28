<script setup lang="ts"></script>

<template>
  <div class="news-view">
    News Page For Sure
  </div>
</template>

<style scoped lang="scss">
.news-view {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 3fr 3fr 3fr 1fr 2fr;
  grid-template-rows: 4fr 2fr;
  grid-template-areas:
    "info gallery gallery gallery gallery"
    "news news news news news";
  gap: 1.5rem;
  padding: 1.5rem;
  background: var(--color-primary-bg);
  color: var(--color-text-primary);
}
</style>