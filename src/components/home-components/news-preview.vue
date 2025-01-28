<script setup lang="ts"></script>

<template>
  <div class="news-preview">
    <div class="news-preview__header">
      <div class="news-preview__text">Сервер:</div>
      <div class="news-preview__server-logo"></div>
    </div>
    <div class="news-preview__content">
      <div class="news-preview__title">Новость дня!</div>
      <div class="news-preview__subtitle">Сегодня на сервере прошел конкурс построек! Призовой фонд составил 10 пачек кириешек!</div>
      <div class="news-preview__description">Ну тут короче идет то, что нахуй никто читать не будет, потому что кому интересно что-то касательно как-го то конкурса, в котором ты даже не участвовал? Я лично таким бы не интересовался, но думаю, если кто-то и поинтересуется, то ему либо заняться нечем, либо он страдает тяжелой формой аутизма, всем кисам пис! </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.news-preview {
  padding: 1.5rem;
  border: 2px solid var(--color-border);
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background-image: linear-gradient(180deg, rgba(5, 5, 5, 0) 50%, rgba(5, 5, 5, 0.75) 80.5%, #050505 100%), url('@/assets/images/background-image.jpg');

  &__header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 0.5rem;
  }

  &__text {
    font-size: 1rem;
    font-weight: 800;
  }

  &__server-logo {
    width: 7.25rem;
    height: 1.5rem;
    background-image: url('@/assets/images/celestia-logo.png');
    background-repeat: no-repeat;
    background-size: contain;
  }

  &__content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 1rem;
  }

  &__title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  &__subtitle {
    font-size: 1.5rem;
    font-weight: 700;
  }

  &__description {
    color: var(--color-text-secondary);
    font-size: 1rem;
    font-weight: 300;
  }
}
</style>
