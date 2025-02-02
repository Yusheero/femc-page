/** Данные новостей для news в блоке HomeView */
type NewsData = {
  id: string;
  server: string;
  tags: Array<string>;
  title: string;
  text: string;
  date: string;
  imageClass: string;
  newsViewClass: string;
};

export const newsData: NewsData[] = [
  {
    "id": "femc01",
    "server": "none",
    "tags": ['сервер'],
    "title": "Новая версия на серверах",
    "text": "Обновили сервера до актуальной и доступной для плагинов версии 1.21.3. Также под новую версию был создан сервер Celedia. Сгенерирована новая карта мира и вообще можно сказать новый мир и новые возможности!",
    "date": "01.02.2025",
    "imageClass": "news__news1",
    "newsViewClass": "news-view__news1",
  },
  {
    "id": "femc02",
    "server": "none",
    "tags": ['сервер'],
    "title": "Сайт FEMC готов, почти",
    "text": "Было потрачено много сил и времени на разработку сайта. Надеемся что вам нравится. Но есть еще очень много того что стоит доработать.",
    "date": "01.02.2025",
    "imageClass": "news__news2",
    "newsViewClass": "news-view__news2",
  },
  {
    "id": "femc03",
    "server": "none",
    "tags": ['сервер'],
    "title": "Место для вашей новости",
    "text": "Не забывайте что наш комплекс серверов, это место сбора друзей и знакомых. Поделитесь с ними своими новостями или расскажите как проводите время на сервере.",
    "date": "01.02.2025",
    "imageClass": "news__news3",
    "newsViewClass": "news-view__news3",
  },
  {
    "id": "femc04",
    "server": "celedia",
    "tags": ['celedia', 'игроки'],
    "title": "Тестовая новость сервера Celedia",
    "text": "Дорогие игроки! Мы рады сообщить вам о запуске нашего нового Minecraft сервера Celedia! С 1 ноября 2023 года вы сможете погрузиться в уникальную атмосферу, полную приключений, квестов и дружелюбного сообщества.",
    "date": "01.02.2025",
    "imageClass": "news__news4",
    "newsViewClass": "news-view__news4",
  },
  {
    "id": "femc05",
    "server": "celedia-old",
    "tags": ['celedia', 'игроки'],
    "title": "Тестовая новость сервера Celedia Old",
    "text": "Дорогие игроки! Мы рады сообщить вам о запуске нашего нового Minecraft сервера Celedia! С 1 ноября 2023 года вы сможете погрузиться в уникальную атмосферу, полную приключений, квестов и дружелюбного сообщества.",
    "date": "01.02.2025",
    "imageClass": "none",
    "newsViewClass": "null",
  },
  {
    "id": "femc06",
    "server": "pawhera",
    "tags": ['pawhera', 'игроки'],
    "title": "Тестовая новость сервера Pawhera",
    "text": "Дорогие игроки! Мы рады сообщить вам о запуске нашего нового Minecraft сервера Celedia! С 1 ноября 2023 года вы сможете погрузиться в уникальную атмосферу, полную приключений, квестов и дружелюбного сообщества.",
    "date": "01.02.2025",
    "imageClass": "none",
    "newsViewClass": "null",
  },
  {
    "id": "femc07",
    "server": "eventus",
    "tags": ['eventus', 'игроки'],
    "title": "Тестовая новость сервера Eventus",
    "text": "Дорогие игроки! Мы рады сообщить вам о запуске нашего нового Minecraft сервера Celedia! С 1 ноября 2023 года вы сможете погрузиться в уникальную атмосферу, полную приключений, квестов и дружелюбного сообщества.",
    "date": "01.02.2025",
    "imageClass": "none",
    "newsViewClass": "null",
  }
];