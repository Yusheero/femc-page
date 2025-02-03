/** Данные новостей для news в блоке HomeView */
type NewsData = {
  id: string;
  server: string;
  tags: Array<string>;
  title: string;
  text: string;
  date: string;
  newsViewClass: string;
  homePreviewImage: string;
  serverPreviewImage: string;
  newsPreviewImage: string;
};

export const newsData: NewsData[] = [
  {
    "id": "femc01",
    "server": "none",
    "tags": ['сервер'],
    "title": "Новая версия на серверах",
    "text": "Обновили сервера до актуальной и доступной для плагинов версии 1.21.3. Также под новую версию был создан сервер Celedia. Сгенерирована новая карта мира и вообще можно сказать новый мир и новые возможности!",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news1",
    "homePreviewImage": new URL('../assets/images/news/news1-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/news1-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/news1-big.jpg', import.meta.url).href,
  },
  {
    "id": "femc02",
    "server": "none",
    "tags": ['сервер'],
    "title": "Сайт FEMC готов, почти",
    "text": "Было потрачено много сил и времени на разработку сайта. Надеемся что вам нравится. Но есть еще очень много того что стоит доработать.",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news2",
    "homePreviewImage": new URL('../assets/images/news/news2-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/news2-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/news2-big.jpg', import.meta.url).href,
  },
  {
    "id": "femc03",
    "server": "celedia",
    "tags": ['celedia'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, на новостном форуме",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
  },
  {
    "id": "femc04",
    "server": "celedia-old",
    "tags": ['celedia old'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, на новостном форуме",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
  },
  {
    "id": "femc05",
    "server": "pawhera",
    "tags": ['pawhera'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, на новостном форуме",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
  },
  {
    "id": "femc06",
    "server": "eventus",
    "tags": ['eventus'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, на новостном форуме",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
  },
];