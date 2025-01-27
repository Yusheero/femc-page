<script setup lang="ts"></script>

<template>
  <div class="main">
    <router-view></router-view>
  </div>
</template>

<style scoped lang="scss">
.main {
  width: 100%;
  height: 100vh;
  background: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
