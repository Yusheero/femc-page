/** Данные серверов для блоков CelediaView, CelediaOldView, PawheraViwe и EventusView */
type ServersData = {
  id: string;
  text1: string;
  text2: string;
  text3: string;
  text4: string;
  logoClass: string;
  mapSize: string;
};

export const ServersData: ServersData[] = [
  {
    id: "celedia",
    text1: "Celedia это эксперимент вышедший из под контроля. Мы хотели создать сервер с актуальной версией и чистым миром, в котором новичку будет чем заняться и поизучать. Мир вайпается раз в год и постоянно обновляется версия.",
    text2: "Чистая ванилла с минимальным количеством плагинов для аутентификации и защиты от читеров. Что ещё нужно чтобы вернуться в игру с друзьями и посмотреть что же там добавили нового?",
    text3: "Не забывайте про приваты. Администрация не может следить за сервером 24/7. Заприватив постройку вы поможете быстрее решить сложную ситуацию.",
    text4: "По вопросам и предложениям вы можете обратиться в любой доступной социальной сети. Удачи и веселой игры!",
    logoClass: "celedia",
    mapSize: "1000x1000"
  },
  {
    id: "celedia-old",
    text1: "Место с которого началось наше путешествие. Полигон идей и ошибок которые мы прошли. Мы решили оставить его в первозданном мире, но на новой версии.",
    text2: "Сервер нашей локальной дальневосточной тусовки. Место, которое мы по праву можем назвать домом. Установлен минимальный набор плагинов для борьбы с читерасами. ",
    text3: "Не забывайте про приваты. Администрация не может следить за сервером 24/7. Заприватив постройку вы поможете быстрее решить сложную ситуацию.",
    text4: "По вопросам и предложениям вы можете обратиться в любой доступной социальной сети. Удачи и веселой игры!",
    logoClass: "celedia-old",
    mapSize: "100000x100000"
  },
  {
    id: "pawhera",
    text1: "Предполагаю что вы итак сами знаете что такое анархия и как тут играется. Ничего нового или странного. Разрушение или созидание, выбор за тобой. Но помни что у любой дозволенности есть рамки.",
    text2: "На этом сервере нет приватов или вайпов. Установлены плагины для борьбы с читерастами. PVP включено везде.",
    text3: "Исследуйте бескрайние просторы, стройте свои убежища и выживайте в условиях, которые проверят ваши навыки и креативность.",
    text4: "По вопросам и предложениям вы можете обратиться в любой доступной социальной сети. Удачи и веселой игры!",
    logoClass: "pawhera",
    mapSize: "100000x100000"
  },
  {
    id: "eventus",
    text1: "Еще один экспериментальный сервер. Идея простая - каждые 3 месяца на сервере меняется режим игры и событие. Например - Скайблок.",
    text2: "Сервер все еще находится в разработке. Финальная версия может отличаться от того что есть сейчас.",
    text3: "Исследуйте бескрайние просторы, стройте свои убежища и выживайте в условиях, которые проверят ваши навыки и креативность.",
    text4: "По вопросам и предложениям вы можете обратиться в любой доступной социальной сети. Удачи и веселой игры!",
    logoClass: "eventus",
    mapSize: "100000x100000"
  },
];