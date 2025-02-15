<script setup lang="ts">

</script>

<template>
  <div class="login">
    <div class="login__title">Статистика по серверам и возможность писать в чат</div>
    <button class="login__button">Войти</button>
  </div>
</template>

<style scoped lang="scss">
.login {
  padding: 3rem;
  background: var(--color-secondary-bg);
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 700;
  width: 100%;

  &__button {
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 0.5rem;
    background: #921c1c;
    color: var(--color-secondary);
    opacity: 0.8;
    width: 10rem;
    padding: 1rem 0;
    height: 3rem;
    font-size: 0.9rem;
    font-weight: 700;
    font-family: "Nunito Sans", serif;

    &:hover {
      background: var(--color-line-break);
      cursor: pointer;
    }
  }
}
</style>
