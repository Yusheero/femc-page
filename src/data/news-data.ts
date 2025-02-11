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
  portraitImage: string;
};

export const newsData: NewsData[] = [
  {
    "id": "femc01",
    "server": "none",
    "tags": ['сервер'],
    "title": "FEMC на хостинге!",
    "text": "Вот и состоялся релиз нашего сайта. Есть моменты которые еще нужно доработать и улучшить. Ждем фидбек от наших любимых падмпещиков. В скором времени мы релизнем новые функции, такие как - игроки онлайн и количество игроков онлайн по каждому серверу. Всем peace",
    "date": "04.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/news3-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/news3-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/news3-big.jpg', import.meta.url).href,
    "portraitImage": new URL('../assets/images/news/news3-portrait.jpg', import.meta.url).href,
  },
  {
    "id": "femc02",
    "server": "celediaold",
    "tags": ['celedia old'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, в новостной форум",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
    "portraitImage": new URL('../assets/images/news/plug-portrait.jpg', import.meta.url).href,
  },
  {
    "id": "femc03",
    "server": "pawhera",
    "tags": ['pawhera'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, в новостной форум",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
    "portraitImage": new URL('../assets/images/news/plug-portrait.jpg', import.meta.url).href,
  },
  {
    "id": "femc04",
    "server": "eventus",
    "tags": ['eventus'],
    "title": "Место для вашей новости",
    "text": "Вы можете отправить новость через наш Discord канал, в новостной форум",
    "date": "01.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/plug-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/plug-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/plug-big.jpg', import.meta.url).href,
    "portraitImage": new URL('../assets/images/news/plug-portrait.jpg', import.meta.url).href,
  },
  {
    "id": "femc05",
    "server": "celedia",
    "tags": ['celedia'],
    "title": "Первый игрок прошел игру на сервере",
    "text": "Никто даже не ожидал что дракон всё ещё стоит и ожидает своего часа. Поздравляем игрока Reveck с этим достижением!",
    "date": "09.02.2025",
    "newsViewClass": "news-view__news3",
    "homePreviewImage": new URL('../assets/images/news/dragon-middle.jpg', import.meta.url).href,
    "serverPreviewImage": new URL('../assets/images/news/dragon-small.jpg', import.meta.url).href,
    "newsPreviewImage": new URL('../assets/images/news/dragon-big.jpg', import.meta.url).href,
    "portraitImage": new URL('../assets/images/news/dragon-portrait.jpg', import.meta.url).href,
  },
];