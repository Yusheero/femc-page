<script setup lang="ts">
import { ArrowLeft  } from "lucide-vue-next";
</script>

<template>
  <div class="about">
    <h1>Servers Page</h1>
    <div class="about__links">
      <router-link class="back-button" to="/"><ArrowLeft  color="black"/></router-link>
      <router-link class="about__link" to="/about">About</router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
.about {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
  color: var(--color-white);

  &__links {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    width: 300px;
    height: 50px;
    padding: 4px;
    border-radius: 8px;
    background: var(--color-white);
  }

  &__link {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 12px;
    width: 50%;
    border-radius: 8px;
    background: var(--color-black);
    text-decoration: none;
    color: var(--color-white);

    &:hover {
      background: var(--color-grey);
    }
  }

  .back-button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: red;
    border-radius: 8px;
    position: absolute;
    top: 0;
    left: -48px;

    &:hover {
      background: var(--color-grey);
    }
  }
}
</style>