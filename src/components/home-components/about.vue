<script setup lang="ts">
import { texts } from '../../../mocks/texts'
</script>

<template>
  <div class="about">{{ texts.mainText }}</div>
</template>

<style scoped>
.about {
  padding: 32px;
  font-family: "Merriweather", serif;
  font-weight: 700;
  background: var(--color-white);
  color: var(--color-black);
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  font-weight: 700;
  text-align: center;
  line-height: 28px;
}
</style>
